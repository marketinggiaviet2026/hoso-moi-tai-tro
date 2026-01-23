'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

const LineIcon = ({ name, className = 'w-6 h-6 text-accent' }) => {
  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };

  switch (name) {
    case 'calendar':
      return (
        <svg {...common}>
          <path d="M8 3v3M16 3v3" />
          <path d="M4 8h16" />
          <path d="M6 5h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
          <path d="M8 12h.01M12 12h.01M16 12h.01" />
          <path d="M8 16h.01M12 16h.01M16 16h.01" />
        </svg>
      );
    case 'pin':
      return (
        <svg {...common}>
          <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" />
          <path d="M12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
        </svg>
      );
    case 'building':
      return (
        <svg {...common}>
          <path d="M4 21V7a2 2 0 0 1 2-2h6v16" />
          <path d="M12 9h6a2 2 0 0 1 2 2v10" />
          <path d="M6.5 9.5h.01M6.5 12.5h.01M6.5 15.5h.01" />
          <path d="M15.5 13.5h.01M15.5 16.5h.01" />
          <path d="M3 21h18" />
        </svg>
      );
    case 'eye':
      return (
        <svg {...common}>
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </svg>
      );
    case 'target':
      return (
        <svg {...common}>
          <path d="M12 21a9 9 0 1 0-9-9" />
          <path d="M12 18a6 6 0 1 0-6-6" />
          <path d="M12 15a3 3 0 1 0-3-3" />
          <path d="M12 12l7-7" />
          <path d="M16 5h3v3" />
        </svg>
      );
    case 'cap':
      return (
        <svg {...common}>
          <path d="M12 3l10 5-10 5L2 8l10-5z" />
          <path d="M6 10v6c0 1.7 3 3 6 3s6-1.3 6-3v-6" />
          <path d="M22 8v6" />
        </svg>
      );
    case 'users':
      return (
        <svg {...common}>
          <path d="M16 11a4 4 0 1 0-8 0" />
          <path d="M2.5 21a9.5 9.5 0 0 1 19 0" />
        </svg>
      );
    case 'book':
      return (
        <svg {...common}>
          <path d="M4 5a2 2 0 0 1 2-2h12v17a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5z" />
          <path d="M8 3v18" />
        </svg>
      );
    case 'chip':
      return (
        <svg {...common}>
          <path d="M9 9h6v6H9z" />
          <path d="M4 9h2M4 15h2M18 9h2M18 15h2" />
          <path d="M9 4v2M15 4v2M9 18v2M15 18v2" />
          <path d="M7 7h10v10H7z" />
        </svg>
      );
    case 'plane':
      return (
        <svg {...common}>
          <path d="M22 2L11 13" />
          <path d="M22 2l-7 20-4-9-9-4 20-7z" />
        </svg>
      );
    case 'mail':
      return (
        <svg {...common}>
          <path d="M4 6h16v12H4z" />
          <path d="M4 7l8 6 8-6" />
        </svg>
      );
    case 'phone':
      return (
        <svg {...common}>
          <path d="M7 3h3l2 5-2 1c1 3 4 6 7 7l1-2 5 2v3c0 1-1 2-2 2-9.4 0-17-7.6-17-17 0-1 1-2 2-2z" />
        </svg>
      );
    case 'file':
      return (
        <svg {...common}>
          <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z" />
          <path d="M14 2v5h5" />
          <path d="M8 13h8M8 17h8" />
        </svg>
      );
    case 'mic':
      return (
        <svg {...common}>
          <path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3z" />
          <path d="M19 11a7 7 0 0 1-14 0" />
          <path d="M12 18v4" />
          <path d="M8 22h8" />
        </svg>
      );
    case 'briefcase':
      return (
        <svg {...common}>
          <path d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
          <path d="M3 8h18v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z" />
          <path d="M3 12h18" />
          <path d="M10 12v2h4v-2" />
        </svg>
      );
    case 'palette':
      return (
        <svg {...common}>
          <path d="M12 3a9 9 0 1 0 0 18h2a2 2 0 0 0 2-2 2.5 2.5 0 0 1 2.5-2.5H21a2 2 0 0 0 2-2A9.5 9.5 0 0 0 12 3z" />
          <path d="M7.5 10.5h.01M10 8.5h.01M14 8.5h.01M16.5 10.5h.01" />
        </svg>
      );
    case 'store':
      return (
        <svg {...common}>
          <path d="M4 7l2-3h12l2 3" />
          <path d="M4 7h16" />
          <path d="M5 7v13h14V7" />
          <path d="M9 20v-6h6v6" />
        </svg>
      );
    case 'award':
      return (
        <svg {...common}>
          <path d="M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" />
          <path d="M9.5 14.5L8 22l4-2 4 2-1.5-7.5" />
        </svg>
      );
    case 'chevronLeft':
      return (
        <svg {...common}>
          <path d="M15 18l-6-6 6-6" />
        </svg>
      );
    case 'chevronRight':
      return (
        <svg {...common}>
          <path d="M9 18l6-6-6-6" />
        </svg>
      );
    case 'chevronDown':
      return (
        <svg {...common}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
        </svg>
      );
  }
};

export default function DocumentPagePremium() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAgendaExpanded, setIsAgendaExpanded] = useState(false);
  const [expandedOrganizerKey, setExpandedOrganizerKey] = useState(null);
  const [expandedSponsorPackageKey, setExpandedSponsorPackageKey] = useState(null);
  const [finderBudget, setFinderBudget] = useState(20);
  const [finderFocus, setFinderFocus] = useState('visibility');
  const [finderContribution, setFinderContribution] = useState('cash');

  const galleryRef = useRef(null);
  const galleryRafRef = useRef(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const agendaItems = useMemo(
    () => [
      { key: 'welcome', time: '07:30 – 08:00', title: 'Đón khách', meta: 'Check-in, nhận bảng tên & túi Hội nghị' },
      {
        key: 'opening',
        time: '08:00 – 08:30',
        title: 'Khai mạc',
        meta: 'Phát biểu của đơn vị tổ chức (Sở GD&ĐT Cần Thơ; Trung tâm Ngoại ngữ Gia Việt)',
      },
      { key: 'keynote1', time: '08:30 – 09:10', title: 'Báo cáo chính 01', meta: '40 phút' },
      { key: 'parallel1', time: '09:15 – 09:45', title: 'Phiên song song 01', meta: '08 phòng song song' },
      { key: 'parallel2', time: '09:50 – 10:20', title: 'Phiên song song 02', meta: '08 phòng song song' },
      { key: 'tea1', time: '10:20 – 10:40', title: 'Tea Break sáng', meta: 'Tiệc trà & giao lưu' },
      { key: 'keynote2', time: '10:40 – 11:20', title: 'Báo cáo chính 02', meta: '40 phút' },
      { key: 'parallel3', time: '11:25 – 11:55', title: 'Phiên song song 03', meta: '08 phòng song song' },
      {
        key: 'lunch',
        time: '12:00 – 13:30',
        title: 'Lunch Break + Poster Presentations',
        meta: 'Ăn trưa, kết nối, tham quan Poster',
      },
      { key: 'keynote3', time: '13:30 – 14:10', title: 'Báo cáo chính 03', meta: '40 phút' },
      { key: 'parallel4', time: '14:15 – 14:45', title: 'Phiên song song 04', meta: '08 phòng song song' },
      { key: 'parallel5', time: '14:50 – 15:20', title: 'Phiên song song 05', meta: '08 phòng song song' },
      { key: 'tea2', time: '15:20 – 15:40', title: 'Tea Break chiều', meta: 'Tiệc trà & networking' },
      { key: 'keynote4', time: '15:40 – 16:20', title: 'Báo cáo chính 04', meta: '40 phút' },
      { key: 'closing', time: '16:20 – 16:40', title: 'Bế mạc', meta: 'Phát biểu bế mạc, rút thăm may mắn' },
    ],
    [],
  );

  const galleryItems = useMemo(
    () => [
      { src: '/images/gallery/mt-2016-01.jpg' },
      { src: '/images/gallery/mt-2016-02.jpg' },
      { src: '/images/gallery/mt-2016-03.jpg' },
      { src: '/images/gallery/mt-2016-04.jpg' },
      { src: '/images/gallery/mt-2016-05.jpg' },
      { src: '/images/gallery/mt-2016-06.png' },
      { src: '/images/gallery/mt-2016-07.jpg' },
    ],
    [],
  );

  const sponsorPackages = useMemo(
    () => [
      {
        key: 'diamond',
        label: 'DIAMOND',
        title: 'Tài trợ Kim Cương (Diamond Sponsor)',
        priceText: '30.000.000 VNĐ',
        priceMillions: 30,
        quotaText: '03 đơn vị',
        theme: {
          card: 'border-mt-purple-brand/35 bg-gradient-to-br from-mt-purple-brand/12 via-titleclr/6 to-transparent',
          badge: 'bg-mt-purple-brand/10 text-titleclr border border-mt-purple-brand/25',
        },
        benefits: [
          'Logo trên các ấn phẩm truyền thông (poster, banner, standee, backdrop, booklet): Vị trí trung tâm; Kích thước lớn',
          'Giới thiệu sản phẩm/dịch vụ (bài viết/hình ảnh): 01 bài post riêng trên Fanpage & Website; 01 bài post tổng hợp; Booklet: ½ trang A4',
          'Video clip quảng bá tại hội trường: 03 phút; Chiếu trước khai mạc & giữa chương trình; Tất cả hội trường',
          'Quầy giới thiệu sản phẩm/dịch vụ: 03 bàn; Vị trí trung tâm khu trưng bày',
          'Phát leaflet/brochure',
          'Tham dự Sponsors & Partners Networking Night: 02 đại diện; Giao lưu cùng báo cáo viên & BTC',
          'Vinh danh trên sân khấu khai mạc: MC xướng tên & danh xưng “Nhà tài trợ Kim Cương”; Nhận hoa & quà lưu niệm',
          'Ghi chú: Quyền lợi có thể điều chỉnh linh hoạt theo thỏa thuận giữa BTC và Nhà tài trợ',
        ],
        focuses: ['visibility', 'leads', 'network'],
      },
      {
        key: 'gold',
        label: 'GOLD',
        title: 'Tài trợ Vàng (Gold Sponsor)',
        priceText: '20.000.000 VNĐ',
        priceMillions: 20,
        quotaText: '03 đơn vị',
        theme: {
          card: 'border-gold/45 bg-gradient-to-br from-gold/14 via-gold-light/6 to-transparent',
          badge: 'bg-gold/15 text-titleclr border border-gold/30',
        },
        benefits: [
          'Logo trên các ấn phẩm truyền thông (poster, banner, standee, backdrop, booklet): Hàng thứ hai; Kích thước trung bình',
          'Giới thiệu sản phẩm/dịch vụ (bài viết/hình ảnh): 01 bài post riêng trên Fanpage & Website',
          'Video clip quảng bá tại hội trường: 02 phút; Chiếu trước khai mạc hoặc giữa chương trình',
          'Quầy giới thiệu sản phẩm/dịch vụ: 02 bàn; Khu vực chính',
          'Phát leaflet/brochure',
          'Tham dự Sponsors & Partners Networking Night: 02 đại diện',
          'Vinh danh trên sân khấu khai mạc: MC xướng tên; Nhận hoa & quà lưu niệm',
          'Ghi chú: Áp dụng theo gói đã ký kết',
        ],
        focuses: ['visibility', 'leads', 'network'],
      },
      {
        key: 'silver',
        label: 'SILVER',
        title: 'Tài trợ Bạc (Silver Sponsor)',
        priceText: '15.000.000 VNĐ',
        priceMillions: 15,
        quotaText: '04 đơn vị',
        theme: {
          card: 'border-mt-gray-border/70 bg-gradient-to-br from-mt-blue-soft/10 via-white to-transparent',
          badge: 'bg-primary/5 text-primary border border-mt-gray-border/60',
        },
        benefits: [
          'Logo trên các ấn phẩm truyền thông (poster, banner, standee, backdrop, booklet): Hàng thứ ba; Kích thước nhỏ',
          'Giới thiệu sản phẩm/dịch vụ (bài viết/hình ảnh): Logo + tên thương hiệu trong 01 bài post tổng hợp',
          'Video clip quảng bá tại hội trường: 01 phút; Chiếu trước khai mạc',
          'Quầy giới thiệu sản phẩm/dịch vụ: 01 bàn; Khu vực tiêu chuẩn',
          'Phát leaflet/brochure',
          'Tham dự Sponsors & Partners Networking Night: 01 đại diện',
          'Vinh danh trên sân khấu khai mạc: Nhận hoa & quà lưu niệm',
          'Ghi chú: Áp dụng theo gói đã ký kết',
        ],
        focuses: ['visibility', 'leads'],
      },
      {
        key: 'supporting',
        label: 'SUPPORTING',
        title: 'Tài trợ Đồng hành (Supporting Sponsor)',
        priceText: '10.000.000 VNĐ',
        priceMillions: 10,
        quotaText: '10 đơn vị',
        theme: {
          card: 'border-accent/30 bg-gradient-to-br from-accent/10 via-white to-transparent',
          badge: 'bg-accent/10 text-accent border border-accent/20',
        },
        benefits: [
          'Logo trên các ấn phẩm truyền thông (poster, banner, standee, backdrop, booklet): Hàng cuối ấn phẩm; Kích thước nhỏ',
          'Giới thiệu sản phẩm/dịch vụ (bài viết/hình ảnh): Logo + tên thương hiệu trong 01 bài post tổng hợp',
          'Video clip quảng bá tại hội trường',
          'Quầy giới thiệu sản phẩm/dịch vụ: 01 bàn; Khu vực tiêu chuẩn',
          'Phát leaflet/brochure',
          'Tham dự Sponsors & Partners Networking Night',
          'Vinh danh trên sân khấu khai mạc: Nhận hoa & quà lưu niệm',
          'Ghi chú: Áp dụng theo gói đã ký kết',
        ],
        focuses: ['visibility', 'leads'],
      },
      {
        key: 'academic',
        label: 'HỌC THUẬT',
        title: 'Tài trợ Học thuật (Academic Sponsorship)',
        priceText: 'Linh hoạt',
        priceMillions: 0,
        quotaText: '',
        theme: {
          card: 'border-titleclr/20 bg-gradient-to-br from-titleclr/5 via-white to-transparent',
          badge: 'bg-primary/5 text-primary border border-mt-gray-border/60',
        },
        benefits: [
          'Tài trợ diễn giả cho phiên báo cáo song song',
          'Logo gắn với tên phiên báo cáo',
          'Giới thiệu ngắn trước khi phiên bắt đầu',
          'Tài trợ giải thưởng học thuật (Best Presentation)',
          'Logo xuất hiện tại lễ trao giải',
          'Ghi nhận trong booklet và website hội nghị',
          'Tài trợ học liệu, sách, tài khoản học tập (In-kind Academic Support)',
          'Logo gắn với hạng mục tài trợ',
          'Ghi nhận đóng góp học thuật',
        ],
        focuses: ['academic'],
      },
      {
        key: 'media',
        label: 'TRUYỀN THÔNG',
        title: 'Tài trợ truyền thông (Media Sponsorship)',
        priceText: 'Linh hoạt',
        priceMillions: 0,
        quotaText: '',
        theme: {
          card: 'border-mt-gray-border/60 bg-gradient-to-br from-primary/5 via-white to-transparent',
          badge: 'bg-primary/5 text-primary border border-mt-gray-border/60',
        },
        benefits: [
          'Tài trợ truyền thông đa kênh',
          'Chia sẻ thông tin chương trình trước, trong và sau sự kiện',
          'Phối hợp sản xuất nội dung truyền thông (bài viết, hình ảnh, video ngắn)',
          'Hàng cuối ấn phẩm, kích thước nhỏ',
          'Logo + tên thương hiệu trong 01 bài post tổng hợp',
          'Được nhắc tên trong phần cảm ơn đối tác truyền thông tại sự kiện',
          'Nhận hoa và quà lưu niệm',
        ],
        focuses: ['visibility', 'network'],
      },
    ],
    [],
  );

  const sponsorFinderRecommendations = useMemo(() => {
    const normalizedBudget = Number.isFinite(finderBudget) ? finderBudget : 0;

    const scorePackage = (pkg) => {
      let score = 0;

      if (pkg.key === 'academic' || pkg.key === 'media') {
        score += finderFocus === 'academic' && pkg.key === 'academic' ? 40 : 0;
        score += finderFocus === 'media' && pkg.key === 'media' ? 40 : 0;
      }

      if (pkg.focuses?.includes(finderFocus)) score += 25;

      if (pkg.priceMillions > 0) {
        if (normalizedBudget >= pkg.priceMillions) score += 25;
        else score += Math.max(0, 25 - (pkg.priceMillions - normalizedBudget) * 3);
      } else {
        score += 10;
      }

      if (finderContribution === 'inkind') {
        if (pkg.key === 'academic') score += 20;
      }

      if (finderContribution === 'mixed') {
        if (pkg.key === 'diamond' || pkg.key === 'gold') score += 10;
      }

      return score;
    };

    return [...sponsorPackages]
      .map((pkg) => ({ pkg, score: scorePackage(pkg) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .filter((item) => item.score > 0);
  }, [finderBudget, finderContribution, finderFocus, sponsorPackages]);

  const normalizeBenefitText = (text) => (text ?? '').toString().replace(/^\s*[–-]\s*/, '').trim();

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPrefersReducedMotion(!!mq.matches);
    update();
    if (mq.addEventListener) mq.addEventListener('change', update);
    else mq.addListener(update);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', update);
      else mq.removeListener(update);
    };
  }, []);

  const updateActiveGalleryIndex = () => {
    const el = galleryRef.current;
    if (!el) return;

    const children = Array.from(el.children);
    if (!children.length) return;

    const containerRect = el.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let bestIdx = 0;
    let bestDist = Infinity;
    children.forEach((child, idx) => {
      const rect = child.getBoundingClientRect();
      const childCenter = rect.left + rect.width / 2;
      const dist = Math.abs(childCenter - containerCenter);
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = idx;
      }
    });

    setActiveGalleryIndex(bestIdx);
  };

  const handleGalleryScroll = () => {
    if (galleryRafRef.current) return;
    galleryRafRef.current = window.requestAnimationFrame(() => {
      galleryRafRef.current = null;
      updateActiveGalleryIndex();
    });
  };

  const scrollToGalleryIndex = (idx) => {
    const el = galleryRef.current;
    if (!el) return;
    const children = Array.from(el.children);
    const target = children[idx];
    if (!target) return;

    el.scrollTo({
      left: target.offsetLeft,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <>
      {/* Premium Header with Glass Effect */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-mt-gray-border/50 shadow-sm" id="top-bar">
        <div className="container-custom">
          <header className="flex items-center py-5">
            {/* LEFT: logos */}
            <div className="logo-wrapper flex items-center gap-2">
              <div className="flex-shrink-0 w-28 h-20 flex items-center justify-center">
                <img
                  src="/images/logo-mekong-tesol.png"
                  alt="Logo Mekong TESOL"
                  className="h-20 w-auto object-contain"
                />
              </div>

              <div className="flex-shrink-0 w-28 h-20 flex items-center justify-center">
                <img
                  src="/images/logo-giaviet.png"
                  alt="Logo Trung tâm Anh ngữ Gia Việt"
                  className="h-20 w-auto object-contain"
                />
              </div>

              <div className="flex-shrink-0 w-28 h-20 flex items-center justify-center">
                <img
                  src="/images/logo-sogddt-cantho.png"
                  alt="Logo Sở Giáo dục và Đào tạo TP. Cần Thơ"
                  className="h-20 w-auto object-contain"
                />
              </div>

              <div className="flex-shrink-0 w-28 h-20 flex items-center justify-center">
                <img
                  src="/images/logo-wollongong.png"
                  alt="Logo University of Wollongong"
                  className="h-20 w-auto object-contain"
                />
              </div>
            </div>

            {/* RIGHT: menu */}
            <nav className="ml-auto flex items-center gap-6">
              <ul className="flex gap-8 items-center">
                <li><a href="/hosomoitaitro" className="font-medium text-sm text-primary/80 hover:text-titleclr transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-titleclr after:transition-all hover:after:w-full">Thư mời tài trợ</a></li>
                <li><a href="#quymo" className="font-medium text-sm text-primary/80 hover:text-titleclr transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-titleclr after:transition-all hover:after:w-full">Quy mô</a></li>
                <li><a href="#goitaitro" className="font-medium text-sm text-primary/80 hover:text-titleclr transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-titleclr after:transition-all hover:after:w-full">Gói tài trợ</a></li>
                <li><a href="#lienhe" className="font-medium text-sm text-primary/80 hover:text-titleclr transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-titleclr after:transition-all hover:after:w-full">Liên hệ</a></li>
                <li><a href="/faq" className="font-medium text-sm text-primary/80 hover:text-titleclr transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-titleclr after:transition-all hover:after:w-full">FAQ</a></li>
              </ul>
            </nav>

            <button
              className="lg:hidden flex flex-col gap-1.5 p-2 mobile-menu-toggle group"
              aria-label="Menu"
              type="button"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
            >
              <span className="block w-6 h-0.5 bg-primary transition-all group-hover:bg-titleclr" />
              <span className="block w-6 h-0.5 bg-primary transition-all group-hover:bg-titleclr" />
              <span className="block w-6 h-0.5 bg-primary transition-all group-hover:bg-titleclr" />
            </button>
          </header>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`${isMobileMenuOpen ? 'fixed' : 'hidden'} top-[85px] left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-mt-gray-border/50 p-8 z-40 shadow-xl mobile-menu`}
        id="mobile-menu"
      >
        <nav>
          <ul className="flex flex-col gap-3">
            <li><a href="/hosomoitaitro" className="block p-4 border border-mt-gray-border/50 rounded-xl text-center font-semibold hover:bg-titleclr/5 hover:border-titleclr/30 transition-all" onClick={() => setIsMobileMenuOpen(false)}>Thư mời tài trợ</a></li>
            <li><a href="#quymo" className="block p-4 border border-mt-gray-border/50 rounded-xl text-center font-semibold hover:bg-titleclr/5 hover:border-titleclr/30 transition-all" onClick={() => setIsMobileMenuOpen(false)}>Quy mô</a></li>
            <li><a href="#goitaitro" className="block p-4 border border-mt-gray-border/50 rounded-xl text-center font-semibold hover:bg-titleclr/5 hover:border-titleclr/30 transition-all" onClick={() => setIsMobileMenuOpen(false)}>Gói tài trợ</a></li>
            <li><a href="#lienhe" className="block p-4 border border-mt-gray-border/50 rounded-xl text-center font-semibold hover:bg-titleclr/5 hover:border-titleclr/30 transition-all" onClick={() => setIsMobileMenuOpen(false)}>Liên hệ</a></li>
            <li><a href="/faq" className="block p-4 border border-mt-gray-border/50 rounded-xl text-center font-semibold hover:bg-titleclr/5 hover:border-titleclr/30 transition-all" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a></li>
          </ul>
        </nav>
      </div>

      {/* Hero Section - Premium Academic Design */}
      <section className="section-padding py-12 md:py-14 border-b border-mt-gray-border/30 bg-gradient-to-br from-white via-mt-blue-soft/5 to-mt-pink/5 relative overflow-hidden" id="tongquan">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-titleclr/5 to-accent/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gold/10 to-gold-light/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="container-custom">
          <div className="text-center max-w-5xl mx-auto">
            <span className="inline-block px-6 py-3 border-2 border-primary/20 rounded-full font-bold text-sm tracking-wider mb-10 bg-white/80 backdrop-blur-sm shadow-sm">
              HỒ SƠ MỜI TÀI TRỢ
            </span>
            
            <h1 className="mb-6 leading-[1.1]">
              HỘI NGHỊ QUỐC TẾ<br />
              MEKONG TESOL LẦN 5 – 2026
            </h1>
            
            <div className="mb-10 space-y-3">
              <p className="text-base md:text-lg text-primary/60 font-semibold tracking-wide">
                Beyond Language:
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-titleclr leading-tight">
                Re-Empowering Learners through Skills, Emotions, and Connections
              </p>
              <p className="text-base md:text-lg text-primary/70 italic">
                Hơn cả ngôn ngữ: Trao quyền cho người học qua kỹ năng, cảm xúc và kết nối
              </p>
            </div>

            <div className="space-y-5 text-lg md:text-xl text-primary/75 mb-12 max-w-4xl mx-auto leading-relaxed">
              <p>
                <span className="text-base md:text-lg lg:text-xl whitespace-normal lg:whitespace-nowrap">
                  Đơn vị tổ chức: Trung tâm Ngoại ngữ Gia Việt · Sở Giáo dục và Đào tạo Thành phố Cần Thơ · Trường Đại học Wollongong.
                </span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-10 border border-mt-gray-border/40 rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg mb-12">
              <div className="text-left space-y-2">
                <div className="mb-2"><LineIcon name="calendar" className="w-8 h-8 text-accent" /></div>
                <p className="text-sm text-primary/60 font-medium">Thời gian</p>
                <p className="font-semibold">Chủ Nhật, 19/07/2026</p>
                <p className="text-sm text-primary/60">07:30 – 17:30</p>
              </div>
              <div className="text-left space-y-2">
                <div className="mb-2"><LineIcon name="pin" className="w-8 h-8 text-accent" /></div>
                <p className="text-sm text-primary/60 font-medium">Địa điểm</p>
                <p className="font-semibold">Dự kiến Đại học Y Dược</p>
                <p className="text-sm text-primary/60">Thành phố Cần Thơ</p>
              </div>
              <div className="text-left space-y-2">
                <div className="mb-2"><LineIcon name="building" className="w-8 h-8 text-accent" /></div>
                <p className="text-sm text-primary/60 font-medium">Đơn vị tổ chức</p>
                <p className="font-semibold">Trung tâm Ngoại ngữ Gia Việt</p>
                <p className="font-semibold">Sở Giáo dục và Đào tạo TP. Cần Thơ</p>
                <p className="font-semibold">Trường Đại học Wollongong</p>
              </div>
              <div className="text-left space-y-2">
                <div className="mb-2"><LineIcon name="users" className="w-8 h-8 text-accent" /></div>
                <p className="text-sm text-primary/60 font-medium">Số lượng tham dự</p>
                <p className="font-semibold">1.000+</p>
                <p className="text-sm text-primary/60">Giảng viên, giáo viên, chuyên gia</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="card-premium text-center group">
                <div className="text-4xl md:text-5xl font-bold text-titleclr mb-2 group-hover:scale-110 transition-transform">1.000+</div>
                <p className="text-sm text-primary/70 font-medium">đại biểu dự kiến</p>
              </div>
              <div className="card-premium text-center group">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">04</div>
                <p className="text-sm text-primary/70 font-medium">
                  báo cáo chính
                  <span className="block text-xs text-primary/60">(keynote talks)</span>
                </p>
              </div>
              <div className="card-premium text-center group">
                <div className="text-4xl md:text-5xl font-bold text-titleclr mb-2 group-hover:scale-110 transition-transform">05</div>
                <p className="text-sm text-primary/70 font-medium">
                  báo cáo tiêu biểu
                  <span className="block text-xs text-primary/60">(featured talks)</span>
                </p>
              </div>
              <div className="card-premium text-center group">
                <div className="text-4xl md:text-5xl font-bold text-gold-light mb-2 group-hover:scale-110 transition-transform">40+</div>
                <p className="text-sm text-primary/70 font-medium">
                  phiên báo cáo song song
                  <span className="block text-xs text-primary/60">(parallel sessions)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="flex justify-center">
            <a
              href="/hosomoitaitro"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-br from-gold via-gold-light to-gold text-primary shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all ring-1 ring-gold/40"
            >
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: '0 0 0 6px rgba(212,175,55,0.14)' }} />
              <span className="inline-flex relative"><LineIcon name="mail" className="w-6 h-6 text-primary" /></span>
              <span className="font-semibold whitespace-nowrap relative">Thư mời tài trợ</span>
              <span className="relative inline-flex animate-pulse">
                <span className="inline-flex w-2 h-2 rounded-full bg-titleclr" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Why Sponsor Section - Premium Cards */}
      <section className="section-padding bg-gradient-to-br from-primary/3 via-white to-titleclr/3" id="visao" data-bookmark="Vì sao tài trợ?">
        <div className="container-custom">
          <h2 className="section-title relative z-10 pb-2 leading-tight">Vì sao nên đồng hành cùng Mekong TESOL 2026?</h2>
          <p className="section-subtitle relative z-10 pb-1">
            Cơ hội kết nối với cộng đồng giáo dục hàng đầu khu vực Đồng bằng Sông Cửu Long
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-premium group flex flex-col h-full">
              <div className="mb-6 group-hover:scale-110 transition-transform inline-flex"><LineIcon name="eye" className="w-10 h-10 text-accent" /></div>
              <h3 className="mb-5">Hiện diện trong cộng đồng chuyên môn</h3>
              <p className="text-primary/70 mb-6 leading-relaxed text-justify">
                Thương hiệu của Quý Đối tác hiện diện nổi bật trước nhóm đối tượng mục tiêu: giáo viên, giảng viên, nhà quản lý giáo dục và các đơn vị đào tạo.
              </p>
              <div className="mt-auto pt-6 border-t border-mt-gray-border/40">
                <p className="text-sm text-primary/60 italic">
                  <strong className="text-titleclr not-italic">Quyền lợi:</strong> Logo, website, fanpage, video hội trường
                </p>
              </div>
            </div>
            
            <div className="card-premium group flex flex-col h-full">
              <div className="mb-6 group-hover:scale-110 transition-transform inline-flex"><LineIcon name="users" className="w-10 h-10 text-accent" /></div>
              <h3 className="mb-5">Kết nối học thuật – đối tác – hợp tác</h3>
              <p className="text-primary/70 mb-6 leading-relaxed text-justify">
                Tạo nền tảng cho các trao đổi chuyên môn, mở rộng hợp tác lâu dài giữa
                nhà trường, tổ chức giáo dục và doanh nghiệp.
              </p>
              <div className="mt-auto pt-6 border-t border-mt-gray-border/40">
                <p className="text-sm text-primary/60 italic">
                  <strong className="text-titleclr not-italic">Quyền lợi:</strong> Quầy triển lãm, Gala Dinner, networking
                </p>
              </div>
            </div>
            
            <div className="card-premium group flex flex-col h-full">
              <div className="mb-6 group-hover:scale-110 transition-transform inline-flex"><LineIcon name="building" className="w-10 h-10 text-accent" /></div>
              <h3 className="mb-5">Đồng hành cùng đổi mới giảng dạy.</h3>
              <p className="text-primary/70 mb-6 leading-relaxed text-justify">
                Lan toả dấu ấn thương hiệu qua những phiên chia sẻ học thuật và nội dung cập nhật xu hướng giáo dục: kỹ năng, cảm xúc và kết nối.
              </p>
              <div className="mt-auto pt-6 border-t border-mt-gray-border/40">
                <p className="text-sm text-primary/60 italic">
                  <strong className="text-titleclr not-italic">Quyền lợi:</strong> Tài trợ phiên báo cáo, giải thưởng, học liệu
                </p>
              </div>
            </div>
            
            <div className="card-premium group flex flex-col h-full">
              <div className="mb-6 group-hover:scale-110 transition-transform inline-flex"><LineIcon name="target" className="w-10 h-10 text-accent" /></div>
              <h3 className="mb-5">Tiếp cận trực tiếp người tham dự</h3>
              <p className="text-primary/70 mb-6 leading-relaxed text-justify">
                Booth/leaflet/video giúp đơn vị giới thiệu học liệu, giải pháp hoặc đề
                án đào tạo phù hợp với bối cảnh hội nghị.
              </p>
              <div className="mt-auto pt-6 border-t border-mt-gray-border/40">
                <p className="text-sm text-primary/60 italic">
                  <strong className="text-titleclr not-italic">Quyền lợi:</strong> Booth, leaflet, video theo gói
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="section-padding" id="congdong">
        <div className="container-custom">
          <h2 className="section-title relative z-10 pb-2 leading-tight">Cộng đồng Mekong TESOL</h2>
          <p className="section-subtitle relative z-10 pb-1">
            Không gian học thuật truyền cảm hứng — nơi ngôn ngữ, công nghệ và con người cùng hội tụ để định hình hướng đi mới cho giáo dục tiếng Anh.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="card text-center bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border-accent/30">
              <div className="text-6xl font-bold text-accent mb-3">2.500+</div>
              <p className="text-base text-primary/70">lượt tham gia qua các kỳ</p>
            </div>
            <div className="card text-center bg-gradient-to-br from-titleclr/10 via-titleclr/5 to-transparent border-titleclr/30">
              <div className="text-6xl font-bold text-titleclr mb-3">120+</div>
              <p className="text-base text-primary/70">bài trình bày &amp; workshop</p>
            </div>
            <div className="card text-center bg-gradient-to-br from-gold/20 via-gold-light/10 to-transparent border-gold/40">
              <div className="text-6xl font-bold text-primary mb-3">13+</div>
              <p className="text-base text-primary/70">quốc gia kết nối</p>
            </div>
          </div>

          <div className="card-premium max-w-4xl mx-auto">
            <h3 className="mb-6 text-center">Đối tượng tham dự</h3>
            <ul className="space-y-1 text-primary/80">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold text-2xl flex-shrink-0">•</span>
                <span className="leading-relaxed"><strong className="text-titleclr">Giảng viên và Giáo viên tiếng Anh</strong>: Từ các trường đại học, cao đẳng, trung học phổ thông và các trung tâm ngoại ngữ.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold text-2xl flex-shrink-0">•</span>
                <span className="leading-relaxed"><strong className="text-titleclr">Nhà nghiên cứu và Học giả</strong>: Thực hiện các nghiên cứu trong lĩnh vực TESOL, ngôn ngữ học ứng dụng và giáo dục ngôn ngữ.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold text-2xl flex-shrink-0">•</span>
                <span className="leading-relaxed"><strong className="text-titleclr">Sinh viên</strong>: Chuyên ngành Ngôn ngữ Anh, Sư phạm tiếng Anh hoặc các lĩnh vực liên quan.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold text-2xl flex-shrink-0">•</span>
                <span className="leading-relaxed"><strong className="text-titleclr">Lãnh đạo và Quản lý giáo dục</strong>: Các nhà hoạch định chính sách, hiệu trưởng, trưởng khoa và trưởng bộ môn.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold text-2xl flex-shrink-0">•</span>
                <span className="leading-relaxed"><strong className="text-titleclr">Chuyên viên phát triển chương trình</strong>: Các chuyên gia tham gia thiết kế và triển khai chương trình tiếng Anh.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold text-2xl flex-shrink-0">•</span>
                <span className="leading-relaxed"><strong className="text-titleclr">Nhà cung cấp giải pháp giáo dục</strong>: Đại diện từ các nhà xuất bản và tổ chức công nghệ giáo dục.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="section-padding bg-gradient-to-br from-titleclr/5 via-white to-primary/5" id="timeline">
        <div className="container-custom">
          <h2 className="section-title relative z-10 pb-2 leading-tight">Các mốc thời gian quan trọng</h2>
          <p className="section-subtitle relative z-10 pb-1">Lộ trình chuẩn bị và tham gia hội nghị</p>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute left-0 right-0 top-6 h-0.5 bg-titleclr/20" />

              <div className="grid grid-cols-2 md:grid-cols-7 gap-6">
                <div className="relative group hover:z-40">
                  <div className="relative z-10 mx-auto w-4 h-4 rounded-full bg-white border-2 border-titleclr/50 shadow-sm" />
                  <div className="mt-4 text-center">
                    <p className="text-sm font-semibold text-titleclr">01/10/2025 – 01/02/2026</p>
                    <p className="text-sm text-primary/70">Nộp tóm tắt</p>
                  </div>
                  <div className="hidden md:block absolute z-50 left-1/2 -translate-x-1/2 top-14 w-[300px] bg-white border border-mt-gray-border/60 rounded-xl p-4 shadow-xl opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all pointer-events-none">
                    <p className="text-sm text-primary/80">Nộp bản tóm tắt bài báo cáo theo khung thời gian công bố của Ban Tổ chức.</p>
                  </div>
                </div>

                <div className="relative group hover:z-40">
                  <div className="relative z-10 mx-auto w-4 h-4 rounded-full bg-white border-2 border-titleclr/50 shadow-sm" />
                  <div className="mt-4 text-center">
                    <p className="text-sm font-semibold text-titleclr">15/03/2026</p>
                    <p className="text-sm text-primary/70">Thông báo kết quả</p>
                  </div>
                  <div className="hidden md:block absolute z-50 left-1/2 -translate-x-1/2 top-14 w-[300px] bg-white border border-mt-gray-border/60 rounded-xl p-4 shadow-xl opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all pointer-events-none">
                    <p className="text-sm text-primary/80">Thông báo kết quả chấp nhận bài báo cáo theo thông tin đăng ký.</p>
                  </div>
                </div>

                <div className="relative group hover:z-40">
                  <div className="relative z-10 mx-auto w-4 h-4 rounded-full bg-white border-2 border-titleclr/50 shadow-sm" />
                  <div className="mt-4 text-center">
                    <p className="text-sm font-semibold text-titleclr">31/03/2026</p>
                    <p className="text-sm text-primary/70">Xác nhận báo cáo</p>
                  </div>
                  <div className="hidden md:block absolute z-50 left-1/2 -translate-x-1/2 top-14 w-[300px] bg-white border border-mt-gray-border/60 rounded-xl p-4 shadow-xl opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all pointer-events-none">
                    <p className="text-sm text-primary/80">Diễn giả xác nhận báo cáo để Ban Tổ chức sắp xếp chương trình.</p>
                  </div>
                </div>

                <div className="relative group hover:z-40">
                  <div className="relative z-10 mx-auto w-4 h-4 rounded-full bg-white border-2 border-titleclr/50 shadow-sm" />
                  <div className="mt-4 text-center">
                    <p className="text-sm font-semibold text-titleclr">02/04/2026 – 20/06/2026</p>
                    <p className="text-sm text-primary/70">Mở đăng ký</p>
                  </div>
                  <div className="hidden md:block absolute z-50 left-1/2 -translate-x-1/2 top-14 w-[320px] bg-white border border-mt-gray-border/60 rounded-xl p-4 shadow-xl opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all pointer-events-none">
                    <p className="text-sm text-primary/80"><strong className="text-titleclr">Early bird:</strong> 02/04/2026 - 30/05/2026</p>
                    <p className="text-sm text-primary/80"><strong className="text-titleclr">Final registration:</strong> 31/05/2026 - 20/06/2026</p>
                  </div>
                </div>

                <div className="relative group hover:z-40">
                  <div className="relative z-10 mx-auto w-4 h-4 rounded-full bg-white border-2 border-titleclr/50 shadow-sm" />
                  <div className="mt-4 text-center">
                    <p className="text-sm font-semibold text-titleclr">01/07/2026</p>
                    <p className="text-sm text-primary/70">Công bố CT</p>
                  </div>
                  <div className="hidden md:block absolute z-50 left-1/2 -translate-x-1/2 top-14 w-[300px] bg-white border border-mt-gray-border/60 rounded-xl p-4 shadow-xl opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all pointer-events-none">
                    <p className="text-sm text-primary/80">Thông báo chương trình chính thức của hội nghị.</p>
                  </div>
                </div>

                <div className="relative group hover:z-40">
                  <div className="relative z-10 mx-auto w-4 h-4 rounded-full bg-white border-2 border-titleclr/50 shadow-sm" />
                  <div className="mt-4 text-center">
                    <p className="text-sm font-semibold text-titleclr">19/07/2026</p>
                    <p className="text-sm text-primary/70">Hội thảo chuyên đề</p>
                  </div>
                  <div className="hidden md:block absolute z-50 left-1/2 -translate-x-1/2 top-14 w-[300px] bg-white border border-mt-gray-border/60 rounded-xl p-4 shadow-xl opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all pointer-events-none">
                    <p className="text-sm text-primary/80">Hội thảo chuyên đề và các tập huấn trước hội nghị: 19/07/2026.</p>
                  </div>
                </div>

                <div className="relative group hover:z-40">
                  <div className="relative z-10 mx-auto w-4 h-4 rounded-full bg-gold/30 border-2 border-gold/70 shadow-sm" />
                  <div className="mt-4 text-center">
                    <p className="text-sm font-bold text-primary">19/07/2026</p>
                    <p className="text-sm text-primary/80 font-semibold">Hội nghị chính</p>
                  </div>
                  <div className="hidden md:block absolute z-50 left-1/2 -translate-x-1/2 top-14 w-[320px] bg-white border border-mt-gray-border/60 rounded-xl p-4 shadow-xl opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all pointer-events-none">
                    <p className="text-sm text-primary/80">Chủ Nhật, ngày 19/07/2026 (từ 07:30 đến 17:30).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Premium Academic Timeline */}
      <section className="section-padding" id="quymo">
        <div className="container-custom">
          <h2 className="section-title relative z-10 pb-2 leading-tight">Gần một thập kỷ — Bốn kỳ hội nghị thành công</h2>
          <p className="section-subtitle">
            Được thành lập năm 2016, Mekong TESOL đã trở thành diễn đàn học thuật uy tín
            nhất tại ĐBSCL — kết nối nhà giáo dục Việt Nam và quốc tế
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="card-premium bg-gradient-to-br from-primary/5 to-titleclr/5 flex flex-col h-full">
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="min-w-0">
                  <h3 className="text-2xl text-titleclr">Sở Giáo dục và Đào tạo thành phố Cần Thơ</h3>
                  <span className="badge-primary mt-3 inline-block">Đơn vị chỉ đạo và định hướng</span>
                </div>
                <span className="inline-flex flex-shrink-0"><LineIcon name="building" className="w-10 h-10 text-accent" /></span>
              </div>

              <p className="text-primary/80 leading-relaxed text-justify">
                Sở Giáo dục và Đào tạo thành phố Cần Thơ định hướng, thẩm định và phê duyệt kế hoạch tổ chức, đảm bảo các hoạt động của Hội nghị diễn ra đúng quy định.
              </p>

              {expandedOrganizerKey === 'so' && (
                <p className="text-primary/80 leading-relaxed mt-4 text-justify">
                  Sở đồng thời chỉ đạo, truyền tải thông tin đến các trường trực thuộc, khuyến khích giáo viên tham gia, tạo điều kiện để hội nghị có sự tham dự rộng rãi từ đội ngũ giáo viên trong khu vực. Sau khi hội nghị kết thúc, Sở sẽ tham gia góp ý báo cáo tổng kết, giúp Ban tổ chức rút kinh nghiệm và nâng cao chất lượng cho các kỳ hội nghị tiếp theo.
                </p>
              )}

              <div className="mt-auto pt-6">
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-mt-gray-border/60 text-titleclr font-semibold text-xs md:text-sm leading-none shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                  onClick={() => setExpandedOrganizerKey((v) => (v === 'so' ? null : 'so'))}
                >
                  <LineIcon name="chevronDown" className={`w-3.5 h-3.5 text-accent transition-transform ${expandedOrganizerKey === 'so' ? 'rotate-180' : ''}`} />
                  <span>Đọc thêm thông tin</span>
                </button>
              </div>
            </div>

            <div className="card-premium bg-gradient-to-br from-accent/5 to-gold/5 flex flex-col h-full">
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="min-w-0">
                  <h3 className="text-2xl text-accent">Trung tâm Ngoại ngữ Gia Việt</h3>
                  <span className="badge-accent mt-3 inline-block">Đơn vị phụ trách chuyên môn và tổ chức</span>
                </div>
                <span className="inline-flex flex-shrink-0"><LineIcon name="building" className="w-10 h-10 text-accent" /></span>
              </div>

              <p className="text-primary/80 leading-relaxed text-justify">
                Trung tâm Ngoại ngữ Gia Việt là đơn vị chịu trách nhiệm tổ chức chính của Hội nghị.
              </p>

              {expandedOrganizerKey === 'giaviet' && (
                <>
                  <p className="text-primary/80 leading-relaxed mt-4 text-justify">
                    Được thành lập từ năm 2009 và đã khẳng định được uy tín trong việc đào tạo tiếng Anh cho học sinh, sinh viên và phụ huynh tại Đồng bằng Sông Cửu Long. Với hơn 4.000 học viên thường xuyên theo học và hơn 150 giáo viên, Gia Việt là một trong những đơn vị đào tạo tiếng Anh hàng đầu trong khu vực. Định hướng phát triển lâu dài của Trung tâm là kết nối nhu cầu thực tiễn địa phương với xu thế giáo dục toàn cầu, thông qua các chương trình đào tạo tiếng Anh thiết thực và gắn với trải nghiệm thực tế.
                  </p>
                  <p className="text-primary/80 leading-relaxed mt-4 text-justify">
                    Hội nghị Mekong TESOL đã được Trung tâm ngoại ngữ Gia Việt khởi xướng từ năm 2016 (lần 1) và được tổ chức thường xuyên với tần suất 2 năm 1 lần qua các năm. Trong việc tổ chức Hội nghị Quốc tế Mekong TESOL, Gia Việt đảm nhận vai trò điều phối, phối hợp chặt chẽ với các đơn vị đồng tổ chức trong việc xây dựng kế hoạch, mời diễn giả, theo dõi tiến độ triển khai, thực hiện các thủ tục pháp lý và tổ chức các hoạt động chuyên môn, chi trả kinh phí tổ chức hội nghị. Đồng thời, Trung tâm chịu trách nhiệm tổng hợp và báo cáo kết quả hội nghị.
                  </p>
                  <div className="card bg-white/60 border-mt-gray-border/60 mt-6">
                    <div className="h-44 rounded-xl overflow-hidden">
                      <img
                        src="/images/giaviet-center.jpg"
                        alt="Trung tâm Ngoại ngữ Gia Việt"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="mt-auto pt-6">
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-mt-gray-border/60 text-titleclr font-semibold text-xs md:text-sm leading-none shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                  onClick={() => setExpandedOrganizerKey((v) => (v === 'giaviet' ? null : 'giaviet'))}
                >
                  <LineIcon name="chevronDown" className={`w-3.5 h-3.5 text-accent transition-transform ${expandedOrganizerKey === 'giaviet' ? 'rotate-180' : ''}`} />
                  <span>Đọc thêm thông tin</span>
                </button>
              </div>
            </div>

            <div className="card-premium bg-gradient-to-br from-titleclr/5 to-primary/5 flex flex-col h-full">
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="min-w-0">
                  <h3 className="text-2xl text-titleclr">Trường Đại học Wollongong, Úc</h3>
                  <span className="badge-primary mt-3 inline-block">Đơn vị đồng tổ chức</span>
                </div>
                <span className="inline-flex flex-shrink-0"><LineIcon name="cap" className="w-10 h-10 text-accent" /></span>
              </div>

              <p className="text-primary/80 leading-relaxed text-justify">
                Trường Đại học Wollongong là đơn vị đồng tổ chức, có thế mạnh về đào tạo giáo viên và lĩnh vực TESOL.
              </p>

              {expandedOrganizerKey === 'uow' && (
                <>
                  <p className="text-primary/80 leading-relaxed mt-4 text-justify">
                    Trong nhiều năm qua, Đại học Wollongong đã phối hợp với Gia Việt tổ chức nhiều hoạt động giáo dục dành cho học sinh, sinh viên và giáo viên tại khu vực Đồng bằng sông Cửu Long, bao gồm cuộc thi Hùng biện tiếng Anh dành cho học sinh, sinh viên; hoạt động giao lưu Trivia với các trường phổ thông và các chương trình tập huấn giảng dạy kỹ năng Nghe nói và Ngữ âm cho giáo viên trong khu vực.
                  </p>
                  <p className="text-primary/80 leading-relaxed mt-4 text-justify">
                    Trong các chương trình đào tạo, chương trình đào tạo giáo viên tiếng Anh bậc Thạc sĩ (Master’s Program in TESOL) của Đại học Wollongong là một trong những chương trình thành công nhất hiện nay, thu hút lớn lực lượng giáo viên từ các nước Châu Á như Nhật Bản, Indonesia, Thái Lan và Việt Nam. Một trong những điểm mạnh nổi bật của chương trình là sự kết hợp các cơ sở lý thuyết cần thiết với các kỹ năng và trải nghiệm giảng dạy thực tế mà giáo viên có thể áp dụng khi hoàn thành chương trình. Đại học Wollongong cũng sở hữu một lực lượng giáo viên và nghiên cứu viên giỏi trong lĩnh vực TESOL với nhiều dự án nghiên cứu thiết thực, góp phần cải thiện chất lượng dạy và học tiếng Anh tại Việt Nam.
                  </p>
                </>
              )}

              <div className="mt-auto pt-6">
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-mt-gray-border/60 text-titleclr font-semibold text-xs md:text-sm leading-none shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                  onClick={() => setExpandedOrganizerKey((v) => (v === 'uow' ? null : 'uow'))}
                >
                  <LineIcon name="chevronDown" className={`w-3.5 h-3.5 text-accent transition-transform ${expandedOrganizerKey === 'uow' ? 'rotate-180' : ''}`} />
                  <span>Đọc thêm thông tin</span>
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-16 space-y-12">
            <div className="relative pl-12 border-l-2 border-titleclr/30">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-titleclr rounded-full border-4 border-white shadow-lg"></div>
              <div className="badge-primary mb-6 text-lg px-6 py-3">2016</div>
              <div className="card-premium">
                <h3 className="mb-3">Mekong TESOL lần 1 — 2016</h3>
                <p className="text-titleclr font-bold mb-6 text-lg">"TAILORING ENGLISH TEACHING TO REGIONAL NEEDS"</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="badge-accent"><strong>350+</strong> người tham dự</span>
                  <span className="badge-accent"><strong>04</strong> phiên toàn thể</span>
                  <span className="badge-accent"><strong>33</strong> bài trình bày song song</span>
                </div>
                <div className="space-y-3 text-sm text-primary/70">
                  <p><strong className="text-titleclr">Diễn giả chính:</strong> Ms. Heather Swenddal – Đại học RMIT (Việt Nam); Dr. Amanda Baker – Đại học Wollongong; Paul Grainger – National Geographic Learning; TS. Nguyễn Thu Hương – Đại học Hoa Sen</p>
                  <p><strong className="text-titleclr">Nhà tài trợ:</strong> Bangkok University, Cambridge Assessment English, CDIMEX, Cengage Learning, Oxford University Press, FAHASA, National Geographic Learning</p>
                </div>
              </div>
            </div>

            <div className="relative pl-12 border-l-2 border-titleclr/30">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-titleclr rounded-full border-4 border-white shadow-lg"></div>
              <div className="badge-primary mb-6 text-lg px-6 py-3">2018</div>
              <div className="card-premium">
                <h3 className="mb-3">Mekong TESOL lần 2 — 2018</h3>
                <p className="text-titleclr font-bold mb-6 text-lg">"THINK GLOBALLY, ACT LOCALLY"</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="badge-accent"><strong>500</strong> người tham dự</span>
                  <span className="badge-accent"><strong>04</strong> phiên toàn thể</span>
                  <span className="badge-accent"><strong>30</strong> bài trình bày song song</span>
                </div>
                <div className="space-y-3 text-sm text-primary/70">
                  <p><strong className="text-titleclr">Diễn giả chính:</strong> Dr. Amanda Baker – Đại học Wollongong (Úc); GS. Kris van den Branden – KU Leuven, Bỉ; PGS.TS Phạm Thị Hồng Nhung – Đại học Ngoại ngữ, Đại học Huế, Việt Nam; PGS. Jonathan Newton – Đại học Victoria Wellington, New Zealand</p>
                  <p><strong className="text-titleclr">Nhà tài trợ:</strong> IDP IELTS, National Geographic Learning</p>
                </div>
              </div>
            </div>

            <div className="relative pl-12 border-l-2 border-accent/30">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-accent rounded-full border-4 border-white shadow-lg"></div>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="badge bg-accent/10 text-accent border-accent/20 text-lg px-6 py-3">2021</span>
                <span className="badge bg-accent/20 text-accent border-accent/30">Trực tuyến</span>
              </div>
              <div className="card border-accent/40 bg-gradient-to-br from-accent/5 to-transparent">
                <h3 className="mb-3">Mekong TESOL lần 3 — 2021</h3>
                <p className="text-titleclr font-bold mb-6 text-lg">"CONTEXTUALISING AND INNOVATING LANGUAGE LEARNING AND TEACHING"</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="badge-accent"><strong>863</strong> lượt tham dự</span>
                  <span className="badge-accent"><strong>14</strong> webinar</span>
                  <span className="badge-accent"><strong>15</strong> diễn giả</span>
                </div>
                <div className="space-y-3 text-sm text-primary/70">
                  <p><strong className="text-titleclr">Diễn giả chính:</strong> Dr. Willy A. Renandya – Viện Giáo dục Quốc gia (NIE), Đại học Công nghệ Nanyang, Singapore; Dr. Amanda Baker – Đại học Wollongong (Úc); PGS. Lê Văn Canh – ĐHQGHN – Đại học Ngoại ngữ (ULIS), Việt Nam</p>
                  <p className="italic text-accent font-medium">Duy trì thành công bất chấp những thách thức của đại dịch COVID-19</p>
                </div>
              </div>
            </div>

            <div className="relative pl-12 border-l-2 border-titleclr/30">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-titleclr rounded-full border-4 border-white shadow-lg"></div>
              <div className="badge-primary mb-6 text-lg px-6 py-3">2023</div>
              <div className="card-premium">
                <h3 className="mb-3">Mekong TESOL lần 4 — 2023</h3>
                <p className="text-titleclr font-bold mb-6 text-lg">"RE-ORIENTATION IN ELT: EMBRACING CHANGES AND FUTURE POSSIBILITIES"</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="badge-accent"><strong>800</strong> người tham dự</span>
                  <span className="badge-accent"><strong>04</strong> phiên toàn thể</span>
                  <span className="badge-accent"><strong>30</strong> bài trình bày song song</span>
                </div>
                <div className="space-y-3 text-sm text-primary/70">
                  <p><strong className="text-titleclr">Diễn giả chính:</strong> PGS. Jonathan Newton – Đại học Victoria Wellington, New Zealand; TS. Hà Văn Sinh – Trung tâm Anh ngữ PTC, Nha Trang, Việt Nam; Dr. Finita Dewi – Universitas Pendidikan Indonesia, Indonesia; Dr. Michael Burri – Đại học Wollongong, Úc</p>
                  <p><strong className="text-titleclr">Nhà tài trợ:</strong> IEC Group, Regional English Language Office (Bộ Ngoại giao Hoa Kỳ), National Geographic Learning, CDIMEX, MM Publications, Oxford University Press, Cambridge University Press, FAHASA, Du Học VISA, Macmillan Education, Đại học Y Dược Cần Thơ</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2026 Conclusion */}
          <div className="mt-20 text-center">
            <div className="inline-flex flex-col md:flex-row items-center gap-8 p-12 bg-gradient-to-br from-gold/20 via-gold-light/10 to-transparent border-2 border-gold/50 rounded-3xl shadow-2xl max-w-3xl">
              <div className="text-8xl font-bold bg-gradient-to-br from-titleclr to-mt-purple-brand bg-clip-text text-transparent">2026</div>
              <div className="text-left">
                <h3 className="mb-3">Mekong TESOL lần 5</h3>
                <p className="text-xl text-primary/80">
                  Hướng tới <strong className="text-titleclr text-2xl">1.000+ đại biểu</strong><br/>
                  <span className="text-lg">— quy mô lớn nhất từ trước đến nay</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" id="goitaitro">
        <div className="container-custom">
          <div className="card-premium mb-12 bg-gradient-to-br from-titleclr/5 to-accent/5 border-mt-gray-border/60" id="timgoitaitro">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
              <div>
                <h2 className="section-title mb-2">Tìm gói tài trợ</h2>
                <p className="text-primary/75 max-w-3xl">
                  Chọn ngân sách và ưu tiên để gợi ý 2–3 gói phù hợp.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="card bg-white border-mt-gray-border/60">
                <div className="flex items-center gap-3 mb-4">
                  <LineIcon name="target" className="w-7 h-7 text-accent" />
                  <h3 className="text-lg font-semibold text-titleclr">Ngân sách dự kiến</h3>
                </div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-titleclr">{finderBudget}.000.000</span>
                  <span className="text-primary/70">VNĐ</span>
                </div>
                <input
                  type="range"
                  min={8}
                  max={30}
                  step={1}
                  value={finderBudget}
                  onChange={(e) => setFinderBudget(parseInt(e.currentTarget.value, 10))}
                  className="w-full"
                  aria-label="Ngân sách dự kiến"
                />
                <div className="flex justify-between text-xs text-primary/60 mt-2">
                  <span>8 triệu</span>
                  <span>20 triệu</span>
                  <span>30 triệu</span>
                </div>
              </div>

              <div className="card bg-white border-mt-gray-border/60">
                <div className="flex items-center gap-3 mb-4">
                  <LineIcon name="eye" className="w-7 h-7 text-accent" />
                  <h3 className="text-lg font-semibold text-titleclr">Ưu tiên chính</h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { key: 'visibility', label: 'Hiện diện thương hiệu' },
                    { key: 'leads', label: 'Kết nối người tham dự' },
                    { key: 'academic', label: 'Gắn kết học thuật' },
                    { key: 'media', label: 'Đồng hành truyền thông' },
                  ].map((opt) => (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => setFinderFocus(opt.key)}
                      className={`text-left px-4 py-3 rounded-xl border transition-all ${finderFocus === opt.key ? 'border-titleclr/40 bg-titleclr/5' : 'border-mt-gray-border/60 hover:border-titleclr/30'}`}
                      aria-pressed={finderFocus === opt.key}
                    >
                      <span className="font-semibold text-titleclr">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="card bg-white border-mt-gray-border/60">
                <div className="flex items-center gap-3 mb-4">
                  <LineIcon name="file" className="w-7 h-7 text-accent" />
                  <h3 className="text-lg font-semibold text-titleclr">Hình thức đóng góp</h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { key: 'cash', label: '100% hiện kim' },
                    { key: 'mixed', label: '80% hiện kim + 20% hiện vật' },
                    { key: 'inkind', label: '50% hiện kim + 50% hiện vật' },
                  ].map((opt) => (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => setFinderContribution(opt.key)}
                      className={`text-left px-4 py-3 rounded-xl border transition-all ${finderContribution === opt.key ? 'border-titleclr/40 bg-titleclr/5' : 'border-mt-gray-border/60 hover:border-titleclr/30'}`}
                      aria-pressed={finderContribution === opt.key}
                    >
                      <span className="font-semibold text-titleclr">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex items-center justify-between gap-4 mb-4">
                <h3 className="text-lg font-semibold text-titleclr">Gợi ý phù hợp</h3>
                <a href="#goitaitro" className="text-sm font-semibold text-accent hover:text-titleclr transition-colors">Xem tất cả gói</a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sponsorFinderRecommendations.map(({ pkg }) => (
                  <div key={pkg.key} className={`card-premium bg-white ${pkg.theme?.card || ''} flex flex-col h-full`}>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${pkg.theme?.badge || 'bg-primary/5 text-primary border border-mt-gray-border/60'}`}>{pkg.label}</div>
                        <p className="mt-3 font-semibold text-titleclr">{pkg.title}</p>
                      </div>
                      {pkg.priceText && (
                        <div className="text-right">
                          <div className="text-sm text-primary/60">Mức</div>
                          <div className="text-lg font-bold text-titleclr">{pkg.priceText}</div>
                        </div>
                      )}
                    </div>
                    <ul className="space-y-2 text-sm text-primary/80 text-justify">
                      {pkg.benefits.slice(0, 3).map((b) => (
                        <li key={b} className="flex items-start gap-2"><span className="text-accent font-bold">✓</span><span className="block">{b}</span></li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-5">
                      <button
                        type="button"
                        className="btn btn-outline w-full"
                        onClick={() => {
                          const el = document.getElementById(`sponsor-package-${pkg.key}`);
                          if (el) el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
                        }}
                      >
                        Xem chi tiết gói
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h2 className="section-title">Gói tài trợ theo cấp độ</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {sponsorPackages.slice(0, 3).map((pkg) => {
              const isExpanded = expandedSponsorPackageKey === pkg.key;
              const shownBenefits = isExpanded ? pkg.benefits : pkg.benefits.slice(0, 4);
              return (
                <div
                  key={pkg.key}
                  id={`sponsor-package-${pkg.key}`}
                  className={`card-premium ${pkg.theme.card} flex flex-col h-full`}
                >
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-base font-semibold mb-4 ${pkg.theme.badge}`}>{pkg.label}</div>
                    <h3 className="text-2xl mb-2">{pkg.title}</h3>
                    <div className="text-4xl font-bold text-primary mb-2">{pkg.priceText}</div>
                    {pkg.quotaText && <p className="text-sm text-primary/70">{pkg.quotaText}</p>}
                  </div>

                  <ul className="space-y-3 text-primary/80 text-justify">
                    {shownBenefits.filter((b) => b.trim() !== '✓').map((b) => {
                      const normalizedText = normalizeBenefitText(b);
                      const isNote = normalizedText.startsWith('Ghi chú:');
                      return (
                        <li key={b} className="flex items-start gap-3">
                          <span className="text-accent font-bold">{isNote ? '*' : '✓'}</span>
                          <span className={`block ${isNote ? 'text-primary/60' : ''}`}>{normalizedText}</span>
                        </li>
                      );
                    })}
                  </ul>

                  {pkg.benefits.length > 4 && (
                    <div className="mt-auto pt-6 text-center">
                      <button
                        type="button"
                        className="btn btn-outline btn-small"
                        onClick={() => setExpandedSponsorPackageKey((v) => (v === pkg.key ? null : pkg.key))}
                        aria-expanded={isExpanded}
                      >
                        {isExpanded ? 'Thu gọn quyền lợi' : 'Xem đầy đủ quyền lợi'}
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {sponsorPackages.slice(3, 6).map((pkg) => {
              const isExpanded = expandedSponsorPackageKey === pkg.key;
              const shownBenefits = isExpanded ? pkg.benefits : pkg.benefits.slice(0, 5);
              return (
                <div
                  key={pkg.key}
                  id={`sponsor-package-${pkg.key}`}
                  className={`card-premium ${pkg.theme.card} flex flex-col h-full`}
                >
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-base font-semibold mb-4 ${pkg.theme.badge}`}>{pkg.label}</div>
                    <h3 className="text-2xl mb-2">{pkg.title}</h3>
                    {pkg.priceText && pkg.priceText !== 'Linh hoạt' && (
                      <div className="text-4xl font-bold text-primary mb-2">{pkg.priceText}</div>
                    )}
                    {pkg.quotaText && <p className="text-sm text-primary/70">{pkg.quotaText}</p>}
                  </div>

                  <ul className="space-y-3 text-primary/80 text-justify">
                    {shownBenefits.map((b) => {
                      const normalizedText = normalizeBenefitText(b);
                      return (
                        <li key={b} className="flex items-start gap-3">
                          <span className="text-accent font-bold">{b.trim() === '✓' ? '✓' : '✓'}</span>
                          <span className="block">{normalizedText}</span>
                        </li>
                      );
                    })}
                  </ul>

                  {pkg.benefits.length > 5 && (
                    <div className="mt-auto pt-6 text-center">
                      <button
                        type="button"
                        className="btn btn-outline btn-small"
                        onClick={() => setExpandedSponsorPackageKey((v) => (v === pkg.key ? null : pkg.key))}
                        aria-expanded={isExpanded}
                      >
                        {isExpanded ? 'Thu gọn quyền lợi' : 'Xem đầy đủ quyền lợi'}
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Keynote Section */}
      <section className="section-padding bg-white" id="keynote">
        <div className="container-custom">
          <h2 className="section-title relative z-10 pb-2 leading-tight">Diễn giả chính (Keynote Speakers)</h2>
          <p className="section-subtitle relative z-10 pb-1">Danh sách dự kiến</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-premium group">
              <div className="rounded-2xl overflow-hidden border border-mt-gray-border/60">
                <div className="h-56 bg-gradient-to-br from-titleclr/10 to-accent/10 flex items-center justify-center relative">
                  <img
                    src="/images/keynote/rob-waring.jpg"
                    alt="GS. Rob Waring"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 flex-col items-center justify-center text-center px-4" style={{ display: 'none' }}>
                    <LineIcon name="cap" className="w-12 h-12 text-accent mb-3" />
                    <p className="font-semibold text-titleclr">Ảnh diễn giả (placeholder)</p>
                  </div>
                </div>
              </div>
              <div className="pt-6 text-center">
                <h3 className="mb-2 text-lg font-bold text-titleclr">Giáo sư Rob Waring</h3>
                <p className="text-primary/70">Trường Đại học Khoa học Xã hội và Nhân văn, Đại học Quốc gia Thành phố Hồ Chí Minh</p>
              </div>
            </div>

            <div className="card-premium group">
              <div className="rounded-2xl overflow-hidden border border-mt-gray-border/60">
                <div className="h-56 bg-gradient-to-br from-titleclr/10 to-accent/10 flex items-center justify-center relative">
                  <img
                    src="/images/keynote/ika-lestari-damayanti.jpg"
                    alt="GS. Ika Lestari Damayanti"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 flex-col items-center justify-center text-center px-4" style={{ display: 'none' }}>
                    <LineIcon name="cap" className="w-12 h-12 text-accent mb-3" />
                    <p className="font-semibold text-titleclr">Ảnh diễn giả (placeholder)</p>
                  </div>
                </div>
              </div>
              <div className="pt-6 text-center">
                <h3 className="mb-2 text-lg font-bold text-titleclr">Giáo sư Ika Lestari Damayanti</h3>
                <p className="text-primary/70">Trường Đại học Giáo dục Indonesia</p>
              </div>
            </div>

            <div className="card-premium group">
              <div className="rounded-2xl overflow-hidden border border-mt-gray-border/60">
                <div className="h-56 bg-gradient-to-br from-titleclr/10 to-accent/10 flex items-center justify-center relative">
                  <img
                    src="/images/keynote/pham-thi-hong-nhung.jpg"
                    alt="PGS.TS Phạm Thị Hồng Nhung"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 flex-col items-center justify-center text-center px-4" style={{ display: 'none' }}>
                    <LineIcon name="cap" className="w-12 h-12 text-accent mb-3" />
                    <p className="font-semibold text-titleclr">Ảnh diễn giả (placeholder)</p>
                  </div>
                </div>
              </div>
              <div className="pt-6 text-center">
                <h3 className="mb-2 text-lg font-bold text-titleclr">Phó giáo sư - Tiến sĩ Phạm Thị Hồng Nhung</h3>
                <p className="text-primary/70">Trường Đại học Ngoại ngữ - Đại học Huế</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section className="section-padding bg-gradient-to-br from-primary/3 to-titleclr/3" id="chuongtrinh">
        <div className="container-custom">
          <h2 className="section-title relative z-10 pb-2 leading-tight">Chương trình dự kiến (19/07/2026)</h2>
          <p className="section-subtitle relative z-10 pb-1">Lịch trình chi tiết từ 07:30 đến 17:30</p>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div
                className={`overflow-hidden transition-[max-height] duration-500 motion-reduce:transition-none ${isAgendaExpanded ? 'max-h-[2000px]' : 'max-h-[360px]'}`}
                id="agendaList"
              >
                <div className="grid grid-cols-1 gap-3">
                  {(isAgendaExpanded ? agendaItems : agendaItems.slice(0, 4)).map((item) => (
                    <div
                      key={item.key}
                      className="card p-4 flex items-start gap-4 hover:border-titleclr/40 hover:bg-white/60 transition-all cursor-pointer"
                      role="button"
                      tabIndex={0}
                      onClick={() => setIsAgendaExpanded(true)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') setIsAgendaExpanded(true);
                      }}
                    >
                      <div className="flex-shrink-0">
                        <div className="px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-xs font-semibold">
                          {item.time}
                        </div>
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-titleclr leading-snug">{item.title}</p>
                        <p className="text-sm text-primary/70 truncate">{item.meta}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {!isAgendaExpanded && (
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-titleclr/5" />
              )}
            </div>

            <div className="mt-6 text-center">
              <button
                type="button"
                className="btn btn-outline btn-large inline-flex items-center gap-2"
                aria-expanded={isAgendaExpanded}
                aria-controls="agendaList"
                onClick={() => setIsAgendaExpanded((v) => !v)}
              >
                <span>{isAgendaExpanded ? 'Thu gọn' : 'Xem toàn bộ lịch trình'}</span>
                <span className={`inline-flex transition-transform motion-reduce:transition-none ${isAgendaExpanded ? 'rotate-180' : ''}`}>
                  <LineIcon name="chevronDown" className="w-5 h-5 text-accent" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Organizers Team Section */}
      <section className="section-padding bg-gradient-to-br from-titleclr/3 to-accent/3">
        <div className="container-custom">
          <h2 className="section-title">Ban Tổ chức</h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card-premium">
                <p className="text-sm text-primary/60 font-semibold">Chỉ đạo chung</p>
                <p className="mt-2 font-semibold text-titleclr">Tiến sĩ Nguyễn Phúc Tăng</p>
                <p className="mt-1 text-sm text-primary/70">Phó Giám đốc – Sở Giáo dục và Đào tạo, TP. Cần Thơ</p>
              </div>
              <div className="card-premium">
                <p className="text-sm text-primary/60 font-semibold">Trưởng Ban tổ chức Hội nghị</p>
                <p className="mt-2 font-semibold text-titleclr">Tiến sĩ Nguyễn Hải Quân</p>
                <p className="mt-1 text-sm text-primary/70">Trung tâm Ngoại ngữ Gia Việt</p>
              </div>
              <div className="card-premium">
                <p className="text-sm text-primary/60 font-semibold">Điều phối tổng thể Hội nghị</p>
                <p className="mt-2 font-semibold text-titleclr">Thạc sĩ Huỳnh Minh Thư</p>
                <p className="mt-1 text-sm text-primary/70">Trung tâm Ngoại ngữ Gia Việt</p>
              </div>
              <div className="card-premium">
                <p className="text-sm text-primary/60 font-semibold">Điều phối Hậu cần – Học thuật</p>
                <p className="mt-2 font-semibold text-titleclr">Dương Hồ Bảo Ngân</p>
                <p className="mt-1 text-sm text-primary/70">Trung tâm Ngoại ngữ Gia Việt</p>
              </div>
              <div className="card-premium">
                <p className="text-sm text-primary/60 font-semibold">Điều phối Thiết kế – Truyền thông</p>
                <p className="mt-2 font-semibold text-titleclr">Võ Lê Uyển Nhi</p>
                <p className="mt-1 text-sm text-primary/70">Trung tâm Ngoại ngữ Gia Việt</p>
              </div>
              <div className="card-premium">
                <p className="text-sm text-primary/60 font-semibold">Điều phối Sự kiện &amp; Đối ngoại Tài trợ</p>
                <p className="mt-2 font-semibold text-titleclr">Ngô Trần Trọng Đức</p>
                <p className="mt-1 text-sm text-primary/70">Trung tâm Ngoại ngữ Gia Việt</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-white" id="hinhanh">
        <div className="container-custom">
          <h2 className="section-title relative z-10 pb-2 leading-tight">Hình ảnh Mekong TESOL các kỳ trước</h2>
          <p className="section-subtitle relative z-10 pb-1">Khoảnh khắc đáng nhớ từ kỳ hội nghị Mekong TESOL lần 3 năm 2023</p>

          <div
            className="relative"
            role="region"
            aria-label="Carousel hình ảnh Mekong TESOL"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') scrollToGalleryIndex(Math.max(0, activeGalleryIndex - 1));
              if (e.key === 'ArrowRight') scrollToGalleryIndex(Math.min(galleryItems.length - 1, activeGalleryIndex + 1));
            }}
          >
            <div className="hidden lg:flex items-center justify-between absolute left-0 right-0 top-1/2 -translate-y-1/2 pointer-events-none">
              <button
                type="button"
                className="pointer-events-auto w-11 h-11 rounded-full bg-white border border-mt-gray-border/60 shadow-sm hover:shadow-md transition-all flex items-center justify-center"
                aria-label="Ảnh trước"
                onClick={() => scrollToGalleryIndex(Math.max(0, activeGalleryIndex - 1))}
              >
                <LineIcon name="chevronLeft" className="w-6 h-6 text-accent" />
              </button>
              <button
                type="button"
                className="pointer-events-auto w-11 h-11 rounded-full bg-white border border-mt-gray-border/60 shadow-sm hover:shadow-md transition-all flex items-center justify-center"
                aria-label="Ảnh tiếp theo"
                onClick={() => scrollToGalleryIndex(Math.min(galleryItems.length - 1, activeGalleryIndex + 1))}
              >
                <LineIcon name="chevronRight" className="w-6 h-6 text-accent" />
              </button>
            </div>

            <div
              ref={galleryRef}
              className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-1"
              onScroll={handleGalleryScroll}
            >
              {galleryItems.map((it, idx) => (
                <div
                  key={it.src}
                  className={`snap-center flex-none w-[85%] sm:w-[48%] lg:w-[32%] card-premium group overflow-hidden transition-all ${idx === activeGalleryIndex ? 'shadow-lg' : ''}`}
                >
                  <div className="h-56 rounded-xl overflow-hidden bg-gradient-to-br from-titleclr/10 to-accent/10 group-hover:scale-[1.01] transition-transform motion-reduce:transition-none">
                    <img src={it.src} alt="Mekong TESOL" className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-2" aria-label="Chỉ báo trang carousel">
              {galleryItems.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`w-2.5 h-2.5 rounded-full border transition-all ${idx === activeGalleryIndex ? 'bg-titleclr border-titleclr' : 'bg-white border-mt-gray-border/60 hover:border-titleclr/50'}`}
                  aria-label={`Chuyển đến ảnh ${idx + 1}`}
                  aria-current={idx === activeGalleryIndex ? 'true' : 'false'}
                  onClick={() => scrollToGalleryIndex(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-br from-titleclr/5 via-white to-accent/5">
        <div className="container-custom max-w-5xl">
          <div className="card-premium text-center">
            <h2 className="section-title relative z-10 pb-2 leading-tight">Câu hỏi thường gặp (FAQ)</h2>
            <a href="/faq" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-br from-titleclr/15 via-white to-accent/10 border border-titleclr/25 text-titleclr font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              <LineIcon name="chevronRight" className="w-5 h-5 text-accent" />
              <span>Mở trang FAQ</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gradient-to-br from-titleclr/5 via-white to-primary/5" id="lienhe">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="section-title relative z-10 pb-2 leading-tight">Liên hệ Ban Tổ chức</h2>
            <div className="space-y-4 text-lg text-primary/75 max-w-3xl mx-auto leading-relaxed">
              <p>
                Thay mặt Ban Tổ chức Hội nghị, chúng tôi xin trân trọng gửi lời cảm ơn sâu sắc đến Quý Cơ quan và Quý Đối tác đã dành thời gian quan tâm và xem xét Hồ sơ mời tài trợ Hội nghị Quốc tế Mekong TESOL lần thứ 5 – năm 2026.
              </p>
              <p style={{ textAlign: 'justify' }}>
                Với sự đồng hành của Quý vị, Hội nghị sẽ không chỉ là một diễn đàn học thuật uy tín mà còn là nơi khẳng định sự kết nối chặt chẽ giữa cộng đồng giáo dục, doanh nghiệp và các tổ chức quốc tế, cùng hướng tới mục tiêu nâng cao chất lượng giảng dạy và học tập tiếng Anh tại Việt Nam và khu vực Đồng bằng Sông Cửu Long.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card-premium">
              <h3 className="mb-8">Thông tin liên hệ</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0"><LineIcon name="mail" className="w-7 h-7 text-accent" /></span>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-primary/80">mekongtesol@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0"><LineIcon name="phone" className="w-7 h-7 text-accent" /></span>
                  <div>
                    <p className="font-semibold mb-1">ThS. Huỳnh Minh Thư – Điều phối viên Hội nghị</p>
                    <p className="text-primary/80">+84 939 808 769</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0"><LineIcon name="phone" className="w-7 h-7 text-accent" /></span>
                  <div>
                    <p className="font-semibold mb-1">Ngô Trần Trọng Đức – Điều phối Sự kiện &amp; Đối ngoại Tài trợ</p>
                    <p className="text-primary/80">+84 762 483 357</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-premium bg-gradient-to-br from-gold/10 to-gold-light/5 border-gold/40">
              <h3 className="mb-6">Gửi đề xuất tài trợ</h3>
              <p className="text-primary/70 mb-8 leading-relaxed">
                Để liên hệ với Ban Tổ chức về các gói tài trợ và quyền lợi cụ thể, Quý Cơ quan và Quý Đối tác vui lòng gửi email về: <strong>mekongtesol@gmail.com</strong>, hoặc liên hệ trực tiếp.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:info.mekongtesol.vn,mekongtesol@gmail.com,ngotrantrongduc26032003@gmail.com?subject=Đề xuất tài trợ - Mekong TESOL 2026"
                  className="btn btn-primary btn-large"
                >
                  Gửi email đề xuất tài trợ
                </a>
              </div>
              <p className="text-sm text-primary/60 mt-6 italic">
                Ban Tổ chức sẽ chủ động liên hệ với Quý Cơ quan và Quý Đối tác sau 14 ngày kể từ ngày gửi Hồ sơ mời tài trợ.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed right-4 bottom-4 z-50 hidden sm:flex flex-col gap-3">
        <a
          href="mailto:info.mekongtesol.vn,mekongtesol@gmail.com,ngotrantrongduc26032003@gmail.com?subject=Đề xuất tài trợ - Mekong TESOL 2026"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-br from-gold via-gold-light to-gold text-primary shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all"
        >
          <LineIcon name="mail" className="w-5 h-5 text-primary" />
          <span className="font-semibold">Gửi đề xuất tài trợ</span>
        </a>
        <a
          href="#lienhe"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/90 backdrop-blur border border-mt-gray-border/60 text-titleclr shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
          <LineIcon name="users" className="w-5 h-5 text-accent" />
          <span className="font-semibold">Thảo luận với Ban tổ chức</span>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-primary via-mt-purple-mid to-mt-purple-brand text-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="text-2xl font-bold mb-4 text-gold">MEKONG TESOL 2026</h4>
              <p className="text-white/90 font-semibold tracking-wide">HỒ SƠ MỜI TÀI TRỢ</p>
              <p className="text-white/85 mt-3" style={{ textAlign: 'justify' }}>Hội nghị Quốc tế MEKONG TESOL Lần 5 – 2026</p>
              <p className="text-white/80 mt-2" style={{ textAlign: 'justify' }}>“Beyond Language: Re-Empowering Learners through Skills, Emotions, and Connections”</p>
              <p className="text-white/70 mt-5 leading-relaxed" style={{ textAlign: 'justify' }}>
                Một diễn đàn học thuật quy mô quốc tế tại Đồng bằng Sông Cửu Long, kết nối cộng đồng giáo viên, giảng viên, chuyên gia và tổ chức giáo dục. Chúng tôi trân trọng mời Quý Đối tác đồng hành để lan tỏa đổi mới và tạo dấu ấn thương hiệu bền vững.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 text-gold">Nội dung</h4>
              <ul className="space-y-2 text-white/85">
                <li><a href="/hosomoitaitro" className="hover:text-gold transition-colors">Thư mời tài trợ</a></li>
                <li><a href="#visao" className="hover:text-gold transition-colors">Vì sao nên đồng hành</a></li>
                <li><a href="#quymo" className="hover:text-gold transition-colors">Quy mô &amp; đối tượng tham dự</a></li>
                <li><a href="#goitaitro" className="hover:text-gold transition-colors">Gói tài trợ</a></li>
                <li><a href="#timeline" className="hover:text-gold transition-colors">Timeline &amp; chương trình</a></li>
                <li><a href="#keynote" className="hover:text-gold transition-colors">Diễn giả chính</a></li>
                <li><a href="#hinhanh" className="hover:text-gold transition-colors">Hình ảnh các kỳ trước</a></li>
                <li><a href="#lienhe" className="hover:text-gold transition-colors">Liên hệ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 text-gold">Liên hệ</h4>
              <p className="text-white/85 font-semibold">Email</p>
              <p className="text-white/80 mt-2">mekongtesol@gmail.com</p>
              <p className="text-white/85 font-semibold mt-6">Liên hệ trực tiếp</p>
              <p className="text-white/80 mt-1">ThS. Huỳnh Minh Thư – +84 939 808 769</p>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center space-y-2">
            <p className="text-white/75">© 2026 Mekong TESOL International Conference · Cần Thơ</p>
            <p className="text-white/70">Đơn vị tổ chức: Trung tâm Ngoại ngữ Gia Việt · Sở GD&amp;ĐT TP. Cần Thơ · Trường Đại học Wollongong</p>
            <p className="text-white/70">Ngày phát hành hồ sơ: 06/02/2026 · Phiên bản: v1.0</p>
          </div>
        </div>
      </footer>
    </>
  );
}
