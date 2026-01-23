'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

function useEventListener(target, type, handler, options) {
  useEffect(() => {
    if (!target) return;
    target.addEventListener(type, handler, options);
    return () => target.removeEventListener(type, handler, options);
  }, [target, type, handler, options]);
}

class LruCache {
  constructor(limit) {
    this.limit = limit;
    this.map = new Map();
  }
  get(key) {
    if (!this.map.has(key)) return undefined;
    const value = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, value);
    return value;
  }
  set(key, value) {
    if (this.map.has(key)) this.map.delete(key);
    this.map.set(key, value);
    while (this.map.size > this.limit) {
      const oldestKey = this.map.keys().next().value;
      const oldest = this.map.get(oldestKey);
      this.map.delete(oldestKey);
      try {
        oldest?.cleanup?.();
      } catch {
        // ignore
      }
    }
  }
  clear() {
    for (const [, v] of this.map.entries()) {
      try {
        v?.cleanup?.();
      } catch {
        // ignore
      }
    }
    this.map.clear();
  }
}

export default function PdfFlipbookViewer({
  src,
  title = 'PDF Flipbook',
  initialPage = 1,
  prefetchAhead = 1,
}) {
  const containerRef = useRef(null);
  const viewportHostRef = useRef(null);
  const canvasCurrentRef = useRef(null);
  const canvasIncomingRef = useRef(null);
  const thumbListRef = useRef(null);

  const pdfjsRef = useRef(null);
  const pdfRef = useRef(null);
  const renderTaskRef = useRef(null);
  const disposedRef = useRef(false);

  const renderCacheRef = useRef(new LruCache(6)); // main pages
  const thumbCacheRef = useRef(new LruCache(24)); // thumbnails

  const [status, setStatus] = useState({ phase: 'idle', percent: 0, message: '' });
  const [error, setError] = useState(null);
  const [numPages, setNumPages] = useState(0);
  const [page, setPage] = useState(initialPage);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [zoom, setZoom] = useState(1);
  const [fitMode, setFitMode] = useState('width'); // width | page | custom

  const [isFlipping, setIsFlipping] = useState(false);

  const canPrev = page > 1;
  const canNext = numPages > 0 && page < numPages;

  const workerSrc = '/pdfjs/pdf.worker.min.mjs';

  const computeFitScale = useCallback(
    async (mode, pageNum = page) => {
      const pdf = pdfRef.current;
      const host = viewportHostRef.current;
      if (!pdf || !host) return 1;

      const p = await pdf.getPage(pageNum);
      const unscaled = p.getViewport({ scale: 1 });
      const hostRect = host.getBoundingClientRect();

      const availableW = Math.max(1, hostRect.width);
      const availableH = Math.max(1, hostRect.height);

      if (mode === 'page') {
        const s = Math.min(availableW / unscaled.width, availableH / unscaled.height);
        return clamp(s, 0.25, 4);
      }

      // width
      const s = availableW / unscaled.width;
      return clamp(s, 0.25, 4);
    },
    [page]
  );

  const loadPdf = useCallback(async () => {
    setError(null);
    setStatus({ phase: 'loading-pdf', percent: 0, message: 'Đang tải PDF…' });

    try {
      const pdfjs = await import('pdfjs-dist/legacy/build/pdf');

      // Configure worker
      pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
      pdfjsRef.current = pdfjs;

      const loadingTask = pdfjs.getDocument({ url: src, withCredentials: false });
      loadingTask.onProgress = (p) => {
        const total = p?.total || 0;
        const loaded = p?.loaded || 0;
        if (total > 0) {
          setStatus({ phase: 'loading-pdf', percent: Math.round((loaded / total) * 100), message: 'Đang tải PDF…' });
        }
      };

      const pdf = await loadingTask.promise;
      if (disposedRef.current) {
        try {
          pdf.destroy();
        } catch {
          // ignore
        }
        return;
      }

      pdfRef.current = pdf;
      setNumPages(pdf.numPages);

      const safeInitial = clamp(initialPage, 1, pdf.numPages);
      setPage(safeInitial);

      // Fit by default
      const fitScale = await computeFitScale('width', safeInitial);
      setFitMode('width');
      setZoom(fitScale);

      setStatus({ phase: 'ready', percent: 100, message: '' });
    } catch (e) {
      setError(e);
      setStatus({ phase: 'error', percent: 0, message: 'Không thể tải PDF' });
    }
  }, [src, workerSrc, initialPage, computeFitScale]);

  const cleanup = useCallback(() => {
    disposedRef.current = true;

    try {
      renderTaskRef.current?.cancel?.();
    } catch {
      // ignore
    }

    renderCacheRef.current?.clear();
    thumbCacheRef.current?.clear();

    const pdf = pdfRef.current;
    pdfRef.current = null;
    if (pdf) {
      try {
        pdf.destroy();
      } catch {
        // ignore
      }
    }
  }, []);

  useEffect(() => {
    disposedRef.current = false;
    loadPdf();
    return cleanup;
  }, [loadPdf, cleanup]);

  const drawToCanvas = useCallback(async ({ pageNum, targetCanvas, scale }) => {
    const pdf = pdfRef.current;
    if (!pdf) throw new Error('PDF not loaded');

    const pdfPage = await pdf.getPage(pageNum);
    const viewport = pdfPage.getViewport({ scale });

    const outputScale = window.devicePixelRatio || 1;
    const canvas = targetCanvas;
    const ctx = canvas.getContext('2d', { alpha: false });

    const cssW = viewport.width;
    const cssH = viewport.height;

    canvas.style.width = `${cssW}px`;
    canvas.style.height = `${cssH}px`;

    canvas.width = Math.floor(cssW * outputScale);
    canvas.height = Math.floor(cssH * outputScale);

    ctx.setTransform(outputScale, 0, 0, outputScale, 0, 0);
    ctx.imageSmoothingEnabled = true;

    // Cancel any ongoing render
    try {
      renderTaskRef.current?.cancel?.();
    } catch {
      // ignore
    }

    const renderContext = {
      canvasContext: ctx,
      viewport,
      intent: 'display',
    };

    const renderTask = pdfPage.render(renderContext);
    renderTaskRef.current = renderTask;

    await renderTask.promise;

    return {
      width: cssW,
      height: cssH,
      cleanup: () => {
        try {
          const c = canvas;
          const cx = c.getContext('2d');
          cx && cx.clearRect(0, 0, c.width, c.height);
        } catch {
          // ignore
        }
      },
    };
  }, []);

  const renderPage = useCallback(
    async (pageNum, { animate = true } = {}) => {
      if (!pdfRef.current) return;

      const currentCanvas = canvasCurrentRef.current;
      const incomingCanvas = canvasIncomingRef.current;
      if (!currentCanvas || !incomingCanvas) return;

      // If we already have a cached render at this zoom & fit mode, reuse by copying bitmap
      const cacheKey = `${pageNum}@${zoom.toFixed(3)}`;
      const cached = renderCacheRef.current.get(cacheKey);

      setStatus((s) => (s.phase === 'ready' ? { phase: 'rendering', percent: s.percent, message: 'Đang hiển thị trang…' } : s));

      const doSwap = () => {
        currentCanvas.style.visibility = 'hidden';
        incomingCanvas.style.visibility = 'visible';
        // swap refs by swapping DOM nodes' roles
        const tmp = canvasCurrentRef.current;
        canvasCurrentRef.current = canvasIncomingRef.current;
        canvasIncomingRef.current = tmp;
        canvasCurrentRef.current.style.visibility = 'visible';
        canvasIncomingRef.current.style.visibility = 'hidden';
      };

      try {
        if (cached) {
          // Copy cached bitmap (canvas is the same element) by drawing image onto incoming
          const srcCanvas = cached.canvas;
          incomingCanvas.width = srcCanvas.width;
          incomingCanvas.height = srcCanvas.height;
          incomingCanvas.style.width = srcCanvas.style.width;
          incomingCanvas.style.height = srcCanvas.style.height;
          const ctx = incomingCanvas.getContext('2d', { alpha: false });
          ctx.drawImage(srcCanvas, 0, 0);
        } else {
          await drawToCanvas({ pageNum, targetCanvas: incomingCanvas, scale: zoom });

          // Cache by copying into an offscreen canvas to keep DOM canvases free to animate
          const off = document.createElement('canvas');
          off.width = incomingCanvas.width;
          off.height = incomingCanvas.height;
          off.style.width = incomingCanvas.style.width;
          off.style.height = incomingCanvas.style.height;
          const offCtx = off.getContext('2d', { alpha: false });
          offCtx.drawImage(incomingCanvas, 0, 0);

          renderCacheRef.current.set(cacheKey, {
            canvas: off,
            cleanup: () => {
              try {
                const c = off;
                const cx = c.getContext('2d');
                cx && cx.clearRect(0, 0, c.width, c.height);
              } catch {
                // ignore
              }
            },
          });
        }

        if (disposedRef.current) return;

        if (animate) {
          setIsFlipping(true);
          // trigger flip
          const host = viewportHostRef.current;
          host?.classList.add('is-flipping');
          // slight delay to let browser paint incoming canvas
          requestAnimationFrame(() => {
            host?.classList.add('flip-next');
            window.setTimeout(() => {
              doSwap();
              host?.classList.remove('flip-next');
              host?.classList.remove('is-flipping');
              setIsFlipping(false);
            }, 220);
          });
        } else {
          doSwap();
        }

        setStatus({ phase: 'ready', percent: 100, message: '' });
      } catch (e) {
        // Fallback if render fails
        setError(e);
        setStatus({ phase: 'error', percent: 0, message: 'Không thể render trang' });
      }
    },
    [drawToCanvas, zoom]
  );

  const prefetch = useCallback(
    async (pageNum) => {
      if (!pdfRef.current) return;
      if (pageNum < 1 || pageNum > numPages) return;

      const cacheKey = `${pageNum}@${zoom.toFixed(3)}`;
      if (renderCacheRef.current.get(cacheKey)) return;

      // Render into an offscreen canvas (not DOM) at current zoom.
      try {
        const pdf = pdfRef.current;
        const p = await pdf.getPage(pageNum);
        const viewport = p.getViewport({ scale: zoom });
        const outputScale = window.devicePixelRatio || 1;

        const off = document.createElement('canvas');
        off.width = Math.floor(viewport.width * outputScale);
        off.height = Math.floor(viewport.height * outputScale);
        off.style.width = `${viewport.width}px`;
        off.style.height = `${viewport.height}px`;

        const ctx = off.getContext('2d', { alpha: false });
        ctx.setTransform(outputScale, 0, 0, outputScale, 0, 0);

        await p.render({ canvasContext: ctx, viewport, intent: 'display' }).promise;

        renderCacheRef.current.set(cacheKey, {
          canvas: off,
          cleanup: () => {
            try {
              const c = off;
              const cx = c.getContext('2d');
              cx && cx.clearRect(0, 0, c.width, c.height);
            } catch {
              // ignore
            }
          },
        });
      } catch {
        // ignore prefetch failures
      }
    },
    [numPages, zoom]
  );

  // Render when page changes
  useEffect(() => {
    if (!numPages) return;
    renderPage(page, { animate: true });

    // Prefetch ahead
    for (let i = 1; i <= prefetchAhead; i++) {
      prefetch(page + i);
    }
  }, [page, numPages, renderPage, prefetch, prefetchAhead]);

  // Re-fit on resize when in fit modes
  const onResize = useCallback(async () => {
    if (!pdfRef.current) return;
    if (fitMode === 'custom') return;
    const s = await computeFitScale(fitMode, page);
    setZoom(s);
  }, [fitMode, computeFitScale, page]);

  useEventListener(typeof window !== 'undefined' ? window : null, 'resize', onResize);

  // Keyboard shortcuts
  const onKeyDown = useCallback(
    (e) => {
      if (e.defaultPrevented) return;

      if (e.key === 'Escape') {
        setSidebarOpen(false);
        return;
      }

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (canPrev) setPage((p) => p - 1);
        return;
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (canNext) setPage((p) => p + 1);
        return;
      }

      if (e.key === '+' || e.key === '=') {
        e.preventDefault();
        setFitMode('custom');
        setZoom((z) => clamp(z * 1.1, 0.25, 4));
        return;
      }

      if (e.key === '-' || e.key === '_') {
        e.preventDefault();
        setFitMode('custom');
        setZoom((z) => clamp(z / 1.1, 0.25, 4));
      }
    },
    [canPrev, canNext]
  );

  useEventListener(typeof window !== 'undefined' ? window : null, 'keydown', onKeyDown);

  // Re-render on zoom changes (without flip animation to reduce motion)
  useEffect(() => {
    if (!numPages) return;
    renderPage(page, { animate: false });
    for (let i = 1; i <= prefetchAhead; i++) {
      prefetch(page + i);
    }
  }, [zoom, numPages]);

  const onPrev = useCallback(() => {
    if (!canPrev) return;
    setPage((p) => p - 1);
  }, [canPrev]);

  const onNext = useCallback(() => {
    if (!canNext) return;
    setPage((p) => p + 1);
  }, [canNext]);

  const onZoomIn = useCallback(() => {
    setFitMode('custom');
    setZoom((z) => clamp(z * 1.1, 0.25, 4));
  }, []);

  const onZoomOut = useCallback(() => {
    setFitMode('custom');
    setZoom((z) => clamp(z / 1.1, 0.25, 4));
  }, []);

  const onFitWidth = useCallback(async () => {
    const s = await computeFitScale('width', page);
    setFitMode('width');
    setZoom(s);
  }, [computeFitScale, page]);

  const onFitPage = useCallback(async () => {
    const s = await computeFitScale('page', page);
    setFitMode('page');
    setZoom(s);
  }, [computeFitScale, page]);

  const [pageInput, setPageInput] = useState('1');
  useEffect(() => {
    setPageInput(String(page));
  }, [page]);

  const onSubmitPage = useCallback(
    (e) => {
      e.preventDefault();
      const n = parseInt(pageInput, 10);
      if (!Number.isFinite(n)) return;
      setPage(clamp(n, 1, numPages || 1));
    },
    [pageInput, numPages]
  );

  // Thumbnail rendering (lazy: only +/- window around current)
  const thumbWindow = 18;
  const thumbRange = useMemo(() => {
    if (!numPages) return { start: 1, end: 0 };
    const start = clamp(page - Math.floor(thumbWindow / 2), 1, numPages);
    const end = clamp(start + thumbWindow - 1, 1, numPages);
    return { start, end };
  }, [page, numPages]);

  const renderThumb = useCallback(
    async (pageNum, canvasEl) => {
      const key = `${pageNum}@thumb@${zoom.toFixed(3)}`;
      const cached = thumbCacheRef.current.get(key);
      if (cached) {
        canvasEl.width = cached.canvas.width;
        canvasEl.height = cached.canvas.height;
        canvasEl.style.width = cached.canvas.style.width;
        canvasEl.style.height = cached.canvas.style.height;
        const ctx = canvasEl.getContext('2d', { alpha: false });
        ctx.drawImage(cached.canvas, 0, 0);
        return;
      }

      const pdf = pdfRef.current;
      if (!pdf) return;

      const p = await pdf.getPage(pageNum);
      const baseViewport = p.getViewport({ scale: 1 });

      // Pick a thumbnail width ~ 140px for sidebar
      const targetW = 140;
      const scale = clamp(targetW / baseViewport.width, 0.12, 0.3);

      const viewport = p.getViewport({ scale });
      const outputScale = window.devicePixelRatio || 1;

      canvasEl.style.width = `${viewport.width}px`;
      canvasEl.style.height = `${viewport.height}px`;
      canvasEl.width = Math.floor(viewport.width * outputScale);
      canvasEl.height = Math.floor(viewport.height * outputScale);

      const ctx = canvasEl.getContext('2d', { alpha: false });
      ctx.setTransform(outputScale, 0, 0, outputScale, 0, 0);

      await p.render({ canvasContext: ctx, viewport, intent: 'display' }).promise;

      // cache offscreen thumb
      const off = document.createElement('canvas');
      off.width = canvasEl.width;
      off.height = canvasEl.height;
      off.style.width = canvasEl.style.width;
      off.style.height = canvasEl.style.height;
      const offCtx = off.getContext('2d', { alpha: false });
      offCtx.drawImage(canvasEl, 0, 0);

      thumbCacheRef.current.set(key, {
        canvas: off,
        cleanup: () => {
          try {
            const cx = off.getContext('2d');
            cx && cx.clearRect(0, 0, off.width, off.height);
          } catch {
            // ignore
          }
        },
      });
    },
    [zoom]
  );

  useEffect(() => {
    if (!sidebarOpen) return;
    const list = thumbListRef.current;
    if (!list) return;

    // Render thumbnails for current window
    const canvases = list.querySelectorAll('canvas[data-thumb]');
    canvases.forEach((c) => {
      const n = parseInt(c.getAttribute('data-page'), 10);
      renderThumb(n, c);
    });
  }, [sidebarOpen, thumbRange, renderThumb]);

  const showFallback = Boolean(error);

  return (
    <div ref={containerRef} className="pdf-fb-root">
      <style jsx>{`
        .pdf-fb-root {
          position: fixed;
          inset: 0;
          background: #0b0b0c;
          color: #fff;
          display: grid;
          grid-template-rows: auto 1fr auto;
        }

        .topbar {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          background: rgba(20, 20, 22, 0.92);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
        }

        .title {
          font-size: 14px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.92);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 40vw;
        }

        .spacer {
          flex: 1;
        }

        .btn {
          appearance: none;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.04);
          color: rgba(255, 255, 255, 0.92);
          border-radius: 10px;
          padding: 8px 10px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          user-select: none;
        }

        .btn:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }

        .btn.primary {
          background: rgba(255, 255, 255, 0.10);
        }

        .main {
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: ${sidebarOpen ? '320px 1fr' : '1fr'};
        }

        .sidebar {
          display: ${sidebarOpen ? 'flex' : 'none'};
          flex-direction: column;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(12, 12, 14, 0.96);
        }

        .sidebarHeader {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .thumbList {
          padding: 10px;
          overflow: auto;
        }

        .thumbBtn {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr;
          gap: 6px;
          padding: 10px;
          margin-bottom: 10px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.10);
          background: rgba(255, 255, 255, 0.03);
          cursor: pointer;
          text-align: left;
        }

        .thumbBtn.active {
          border-color: rgba(255, 255, 255, 0.32);
          background: rgba(255, 255, 255, 0.06);
        }

        .thumbMeta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: rgba(255, 255, 255, 0.75);
          font-size: 12px;
          font-weight: 600;
        }

        .viewportHost {
          position: relative;
          display: grid;
          place-items: center;
          overflow: hidden;
        }

        .viewportInner {
          position: relative;
          transform-style: preserve-3d;
        }

        canvas {
          display: block;
          border-radius: 10px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.55);
          background: #fff;
        }

        .incoming {
          position: absolute;
          inset: 0;
        }

        .skeleton {
          width: min(92vw, 920px);
          height: min(86vh, 1200px);
          border-radius: 10px;
          background: linear-gradient(90deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.12) 40%, rgba(255,255,255,0.06) 80%);
          background-size: 200% 100%;
          animation: shimmer 1.2s infinite;
        }

        @keyframes shimmer {
          0% { background-position: 120% 0; }
          100% { background-position: -80% 0; }
        }

        /* Flip animation (simple + safe). */
        .is-flipping .viewportInner {
          perspective: 1400px;
        }
        .flip-next {
          animation: flip 220ms ease-out;
        }
        @keyframes flip {
          0% { transform: translateX(0) rotateY(0deg); }
          100% { transform: translateX(-10px) rotateY(-10deg); }
        }

        .bottombar {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          background: rgba(20, 20, 22, 0.92);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
        }

        .group {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .label {
          color: rgba(255, 255, 255, 0.70);
          font-size: 12px;
          font-weight: 600;
        }

        .pageForm {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .input {
          width: 64px;
          padding: 8px 10px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.04);
          color: rgba(255, 255, 255, 0.92);
          font-weight: 700;
          font-size: 13px;
        }

        .hint {
          color: rgba(255, 255, 255, 0.55);
          font-size: 12px;
        }

        .progress {
          height: 6px;
          width: 160px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.10);
          overflow: hidden;
        }

        .progress > div {
          height: 100%;
          background: rgba(255, 255, 255, 0.55);
        }

        .fallback {
          height: 100%;
          width: 100%;
          background: #111;
        }

        .fallback iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }

        @media (max-width: 860px) {
          .main {
            grid-template-columns: 1fr;
          }
          .sidebar {
            position: absolute;
            z-index: 20;
            inset: 0 auto 0 0;
            width: min(86vw, 340px);
          }
          .title {
            max-width: 46vw;
          }
        }
      `}</style>

      <header className="topbar">
        <button className="btn" onClick={() => setSidebarOpen((v) => !v)}>
          {sidebarOpen ? 'Đóng thumbnails' : 'Mở thumbnails'}
        </button>

        <div className="title" title={title}>
          {title}
        </div>

        <div className="spacer" />

        {status.phase === 'loading-pdf' ? (
          <div className="group" aria-live="polite">
            <span className="label">{status.message}</span>
            <div className="progress" aria-label="Tiến độ tải PDF">
              <div style={{ width: `${status.percent || 0}%` }} />
            </div>
          </div>
        ) : null}

        {showFallback ? (
          <a className="btn primary" href={src} target="_blank" rel="noreferrer">
            Mở PDF
          </a>
        ) : null}
      </header>

      <div className="main">
        <aside className="sidebar" aria-hidden={!sidebarOpen}>
          <div className="sidebarHeader">
            <div className="label">Trang {page} / {numPages || '–'}</div>
            <button className="btn" onClick={() => setSidebarOpen(false)}>
              ✕
            </button>
          </div>

          <div ref={thumbListRef} className="thumbList">
            {numPages ? (
              Array.from({ length: thumbRange.end - thumbRange.start + 1 }, (_, idx) => {
                const n = thumbRange.start + idx;
                return (
                  <button
                    key={n}
                    className={`thumbBtn ${n === page ? 'active' : ''}`}
                    onClick={() => {
                      setPage(n);
                      setSidebarOpen(false);
                    }}
                  >
                    <div className="thumbMeta">
                      <span>Trang {n}</span>
                      <span className="hint">Nhấn để mở</span>
                    </div>
                    <canvas data-thumb="1" data-page={n} />
                  </button>
                );
              })
            ) : (
              <div className="hint">Đang tải…</div>
            )}
          </div>
        </aside>

        <div ref={viewportHostRef} className="viewportHost">
          {showFallback ? (
            <div className="fallback">
              <iframe
                title="PDF fallback"
                src={`${src}#page=${page}`}
              />
            </div>
          ) : status.phase === 'loading-pdf' ? (
            <div className="skeleton" />
          ) : (
            <div className="viewportInner">
              <canvas ref={canvasCurrentRef} />
              <canvas ref={canvasIncomingRef} className="incoming" style={{ visibility: 'hidden' }} />
            </div>
          )}
        </div>
      </div>

      <footer className="bottombar">
        <div className="spacer" />

        <form className="pageForm" onSubmit={onSubmitPage}>
          <span className="label">Trang</span>
          <input
            className="input"
            inputMode="numeric"
            value={pageInput}
            onChange={(e) => setPageInput(e.target.value)}
            aria-label="Nhập trang"
            disabled={!numPages || showFallback}
          />
          <span className="hint">/ {numPages || '–'}</span>
          <button className="btn primary" type="submit" disabled={!numPages || showFallback}>
            Đi
          </button>
        </form>

        <div className="group">
          <span className="label">Thu phóng</span>
          <button className="btn" onClick={onZoomOut} disabled={showFallback}>−</button>
          <button className="btn" onClick={onZoomIn} disabled={showFallback}>+</button>
          <button className="btn" onClick={onFitWidth} disabled={showFallback}>Vừa chiều rộng</button>
          <button className="btn" onClick={onFitPage} disabled={showFallback}>Vừa trang</button>
        </div>

        <a className="btn primary" href={src} download>
          Tải PDF
        </a>

        <button className="btn" onClick={onPrev} disabled={!canPrev || isFlipping || showFallback}>
          ← Trước
        </button>
        <button className="btn" onClick={onNext} disabled={!canNext || isFlipping || showFallback}>
          Sau →
        </button>
      </footer>
    </div>
  );
}
