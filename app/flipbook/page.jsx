'use client';

import PdfFlipbookViewer from '../../components/PdfFlipbookViewer';

export const dynamic = 'force-static';

export default function FlipbookPage() {
  return (
    <PdfFlipbookViewer
      src="/mekong-tesol-sponsorship-2026.pdf"
      title="Hồ sơ mời tài trợ (PDF)"
    />
  );
}
