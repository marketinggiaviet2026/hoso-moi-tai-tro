export default function DocumentPageTailwind() {
  return (
    <>
      {/* Header - Sticky Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b-2 border-mt-gray-border shadow-sm" id="top-bar">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4 gap-4 flex-wrap">
            <div className="flex gap-4 items-center">
              <img
                src="[LOGO_GIAVIET_URL]"
                alt="Trung tâm Anh ngữ Gia Việt"
                className="h-10 w-auto border border-mt-gray-border p-1"
              />
              <img
                src="[LOGO_SOGDDT_URL]"
                alt="Sở GD-ĐT Cần Thơ"
                className="h-10 w-auto border border-mt-gray-border p-1"
              />
            </div>

            <nav className="hidden lg:block">
              <ul className="flex gap-8 items-center">
                <li><a href="#tongquan" className="font-medium text-sm hover:text-titleclr hover:underline transition-colors">Tổng quan</a></li>
                <li><a href="#visao" className="font-medium text-sm hover:text-titleclr hover:underline transition-colors">Vì sao</a></li>
                <li><a href="#quymo" className="font-medium text-sm hover:text-titleclr hover:underline transition-colors">Quy mô</a></li>
                <li><a href="#timgoi" className="font-medium text-sm hover:text-titleclr hover:underline transition-colors">Tìm gói phù hợp</a></li>
                <li><a href="#goitaitro" className="font-medium text-sm hover:text-titleclr hover:underline transition-colors">Gói tài trợ</a></li>
                <li><a href="#lienhe" className="font-medium text-sm hover:text-titleclr hover:underline transition-colors">Liên hệ</a></li>
              </ul>
            </nav>

            <button className="lg:hidden flex flex-col gap-1 p-2 mobile-menu-toggle" aria-label="Menu">
              <span className="block w-6 h-0.5 bg-primary transition-all" />
              <span className="block w-6 h-0.5 bg-primary transition-all" />
              <span className="block w-6 h-0.5 bg-primary transition-all" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className="hidden fixed top-[70px] left-0 right-0 bg-white border-b-2 border-mt-gray-border p-8 z-40 mobile-menu" id="mobile-menu">
        <nav>
          <ul className="flex flex-col gap-4 mb-8">
            <li><a href="#tongquan" className="block p-4 border border-mt-gray-border text-center font-semibold hover:bg-primary/5">Tổng quan</a></li>
            <li><a href="#visao" className="block p-4 border border-mt-gray-border text-center font-semibold hover:bg-primary/5">Vì sao</a></li>
            <li><a href="#quymo" className="block p-4 border border-mt-gray-border text-center font-semibold hover:bg-primary/5">Quy mô</a></li>
            <li><a href="#timgoi" className="block p-4 border border-mt-gray-border text-center font-semibold hover:bg-primary/5">Tìm gói phù hợp</a></li>
            <li><a href="#goitaitro" className="block p-4 border border-mt-gray-border text-center font-semibold hover:bg-primary/5">Gói tài trợ</a></li>
            <li><a href="#lienhe" className="block p-4 border border-mt-gray-border text-center font-semibold hover:bg-primary/5">Liên hệ</a></li>
          </ul>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="section-padding border-b-2 border-mt-gray-border bg-gradient-to-br from-white via-mt-blue-soft/10 to-mt-pink/10" id="tongquan">
        <div className="container-custom">
          <div className="text-center max-w-5xl mx-auto">
            <span className="inline-block px-6 py-3 border-2 border-primary font-bold text-sm tracking-wider mb-8 bg-white">
              HỒ SƠ MỜI TÀI TRỢ
            </span>
            <h1 className="mb-4 leading-tight">
              HỘI NGHỊ QUỐC TẾ<br />
              MEKONG TESOL LẦN 5 – 2026
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-2 text-titleclr">
              "Beyond Language: Re-Empowering Learners through Skills, Emotions, and Connections"
            </p>
            <p className="text-base md:text-lg text-primary/70 mb-8">
              "Hơn cả ngôn ngữ: Trao quyền cho người học qua kỹ năng, cảm xúc và kết nối"
            </p>

            <div className="space-y-4 text-base md:text-lg text-primary/80 mb-8 max-w-4xl mx-auto">
              <p>
                Diễn đàn học thuật uy tín tại khu vực Đồng bằng Sông Cửu Long, quy tụ
                giảng viên, giáo viên, chuyên gia và nhà nghiên cứu trong lĩnh vực giảng
                dạy tiếng Anh.
              </p>
              <p>
                Hội nghị hướng đến việc kết nối tri thức chuyên môn với nhu cầu thực
                tiễn, thúc đẩy đổi mới phương pháp và mở rộng hợp tác trong cộng đồng
                giáo dục.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-around gap-4 p-8 border-2 border-mt-gray-border bg-white/80 backdrop-blur mb-8">
              <div className="text-left">
                <strong className="text-2xl">📅</strong>
                <span className="ml-2">Chủ Nhật, 19/7/2026 · 07:30 – 17:30</span>
              </div>
              <div className="text-left">
                <strong className="text-2xl">📍</strong>
                <span className="ml-2">Hội trường Cửu Long – Đại học Y Dược, Cần Thơ</span>
              </div>
              <div className="text-left">
                <strong className="text-2xl">🏢</strong>
                <span className="ml-2">TT Anh ngữ Gia Việt &amp; Sở GD-ĐT TP. Cần Thơ</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mb-4">
              <div className="flex flex-col items-center p-6 border-2 border-primary min-w-[140px] bg-white">
                <span className="text-sm text-primary/70">
                  Khoảng <strong className="text-3xl font-bold block text-titleclr">1.000</strong> đại biểu (dự kiến)
                </span>
              </div>
              <div className="flex flex-col items-center p-6 border-2 border-primary min-w-[140px] bg-white">
                <span className="text-sm text-primary/70 text-center">
                  <strong className="text-3xl font-bold block text-titleclr">04</strong> báo cáo chính · <strong>05</strong> featured talks
                </span>
              </div>
              <div className="flex flex-col items-center p-6 border-2 border-primary min-w-[140px] bg-white">
                <span className="text-sm text-primary/70 text-center">
                  <strong className="text-3xl font-bold block text-titleclr">40+</strong> phiên báo cáo · <strong>08</strong> phòng
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-titleclr/5" id="visao">
        <div className="container-custom">
          <h2 className="text-center mb-16">Vì sao nên đồng hành cùng Mekong TESOL 2026?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card group">
              <div className="text-5xl mb-4">👁️</div>
              <h3 className="mb-4">Hiện diện trong cộng đồng chuyên môn</h3>
              <p className="text-primary/70 mb-4">
                Thương hiệu được ghi nhận trong một sự kiện tập trung đúng tệp: giáo
                viên, giảng viên, nhà quản lý giáo dục và các đơn vị đào tạo.
              </p>
              <p className="text-sm text-primary/60 pt-4 border-t border-mt-gray-border italic">
              </p>
            </div>
            <div className="card group">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="mb-4">Kết nối học thuật – đối tác – hợp tác</h3>
              <p className="text-primary/70 mb-4">
                Tạo nền tảng cho các trao đổi chuyên môn, mở rộng hợp tác lâu dài giữa
                nhà trường, tổ chức giáo dục và doanh nghiệp.
              </p>
              <p className="text-sm text-primary/60 pt-4 border-t border-mt-gray-border italic">
              </p>
            </div>
            <div className="card group">
              <div className="text-5xl mb-4">🏛️</div>
              <h3 className="mb-4">Đồng hành cùng đổi mới giảng dạy tiếng Anh</h3>
              <p className="text-primary/70 mb-4">
                Gắn thương hiệu với các phiên báo cáo, hoạt động học thuật và nội dung
                cập nhật xu hướng (kỹ năng, cảm xúc, kết nối).
              </p>
              <p className="text-sm text-primary/60 pt-4 border-t border-mt-gray-border italic">
              </p>
            </div>
            <div className="card group">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="mb-4">Tiếp cận trực tiếp người tham dự tại sự kiện</h3>
              <p className="text-primary/70 mb-4">
                Quầy triển lãm, tờ rơi, video giúp đơn vị giới thiệu học liệu, giải pháp hoặc đề
                án đào tạo một cách phù hợp với bối cảnh hội nghị.
              </p>
              <p className="text-sm text-primary/60 pt-4 border-t border-mt-gray-border italic">
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="section-padding" id="congdong">
        <div className="container-custom">
          <h2 className="text-center mb-8">Cộng đồng Mekong TESOL</h2>
          <p className="text-center text-lg text-primary/70 mb-12 max-w-3xl mx-auto">
            Hội nghị tạo ra không gian học thuật truyền cảm hứng — nơi ngôn ngữ, công
            nghệ và con người cùng hội tụ để định hình hướng đi mới cho giáo dục tiếng
            Anh
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/20 min-w-[200px]">
              <strong className="text-4xl font-bold block text-accent mb-2">2.500+</strong>
              <span className="text-sm">lượt tham gia qua các kỳ</span>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-titleclr/10 to-titleclr/5 border-2 border-titleclr/20 min-w-[200px]">
              <strong className="text-4xl font-bold block text-titleclr mb-2">120+</strong>
              <span className="text-sm">bài trình bày &amp; workshop</span>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gold/30 to-gold-light/20 border-2 border-gold/40 min-w-[200px]">
              <strong className="text-4xl font-bold block text-primary mb-2">13+</strong>
              <span className="text-sm">quốc gia kết nối</span>
            </div>
          </div>

          <div className="card max-w-4xl mx-auto">
            <h3 className="mb-6 text-center">Đối tượng tham dự</h3>
            <ul className="space-y-4 text-primary/80">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl">•</span>
                <span><strong>Giảng viên &amp; Giáo viên tiếng Anh</strong> — Đại học, cao đẳng, THPT, trung tâm ngoại ngữ</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl">•</span>
                <span><strong>Nhà nghiên cứu &amp; Học giả</strong> — TESOL, ngôn ngữ học ứng dụng</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl">•</span>
                <span><strong>Sinh viên</strong> — Ngôn ngữ Anh, Sư phạm tiếng Anh</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl">•</span>
                <span><strong>Lãnh đạo &amp; Quản lý giáo dục</strong> — Hiệu trưởng, trưởng khoa, trưởng bộ môn</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold text-xl">•</span>
                <span><strong>Nhà cung cấp giải pháp giáo dục</strong> — NXB, EdTech, tổ chức công nghệ</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="section-padding bg-gradient-to-br from-titleclr/5 to-primary/5">
        <div className="container-custom">
          <h2 className="text-center mb-12">Các mốc thời gian quan trọng</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <div className="card text-center">
              <span className="block font-bold text-titleclr mb-2">01/10/2025 – 01/02/2026</span>
              <p className="text-sm">Nộp bản tóm tắt bài báo cáo</p>
            </div>
            <div className="card text-center">
              <span className="block font-bold text-titleclr mb-2">15/03/2026</span>
              <p className="text-sm">Thông báo kết quả chấp nhận bài</p>
            </div>
            <div className="card text-center">
              <span className="block font-bold text-titleclr mb-2">31/05 – 20/06/2026</span>
              <p className="text-sm">Đăng ký Final</p>
            </div>
            <div className="card text-center bg-gradient-to-br from-gold/20 to-gold-light/10 border-gold">
              <span className="block font-bold text-primary mb-2 text-lg">19/07/2026</span>
              <p className="text-sm font-semibold">Hội nghị chính</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Keeping original structure for now, will enhance in next iteration */}
      <section className="section-padding" id="quymo">
        <div className="container-custom">
          <h2 className="text-center mb-8">Gần một thập kỷ — Bốn kỳ hội nghị thành công</h2>
          <p className="text-center text-lg text-primary/70 mb-16 max-w-3xl mx-auto">
            Được thành lập năm 2016, Mekong TESOL đã trở thành diễn đàn học thuật uy tín
            nhất tại ĐBSCL — kết nối nhà giáo dục Việt Nam và quốc tế
          </p>
          
          {/* Timeline items - keeping structure, will add Tailwind styling */}
          <div className="space-y-12 max-w-4xl mx-auto">
            {/* 2016 */}
            <div className="relative pl-8 border-l-4 border-titleclr">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-titleclr rounded-full border-4 border-white"></div>
              <div className="inline-block px-4 py-2 bg-titleclr text-white font-bold text-xl mb-4">2016</div>
              <div className="card">
                <h3 className="mb-2">Mekong TESOL lần 1</h3>
                <p className="text-titleclr font-medium mb-4">"Tailoring English Teaching to Regional Needs"</p>
                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  <span className="px-3 py-1 bg-accent/10 text-accent font-semibold rounded"><strong>350+</strong> người tham dự</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent font-semibold rounded"><strong>04</strong> phiên toàn thể</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent font-semibold rounded"><strong>33</strong> bài trình bày</span>
                </div>
                <div className="text-sm text-primary/70 space-y-2">
                  <p><strong>Diễn giả:</strong> Ms. Heather Swenddal (RMIT), Dr. Amanda Baker (Wollongong), Paul Grainger (NGL)</p>
                  <p><strong>Nhà tài trợ:</strong> Cambridge, Oxford, NGL, FAHASA, Cengage, CDIMEX</p>
                </div>
              </div>
            </div>

            {/* 2018 */}
            <div className="relative pl-8 border-l-4 border-titleclr">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-titleclr rounded-full border-4 border-white"></div>
              <div className="inline-block px-4 py-2 bg-titleclr text-white font-bold text-xl mb-4">2018</div>
              <div className="card">
                <h3 className="mb-2">Mekong TESOL lần 2</h3>
                <p className="text-titleclr font-medium mb-4">"Think Globally, Act Locally"</p>
                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  <span className="px-3 py-1 bg-accent/10 text-accent font-semibold rounded"><strong>500</strong> người tham dự</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent font-semibold rounded"><strong>04</strong> phiên toàn thể</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent font-semibold rounded"><strong>30</strong> bài trình bày</span>
                </div>
                <div className="text-sm text-primary/70 space-y-2">
                  <p><strong>Diễn giả:</strong> GS. Kris van den Branden (KU Leuven), PGS. Jonathan Newton (Victoria), PGS.TS Phạm Thị Hồng Nhung</p>
                  <p><strong>Nhà tài trợ:</strong> IDP IELTS, National Geographic Learning</p>
                </div>
              </div>
            </div>

            {/* 2021 Online */}
            <div className="relative pl-8 border-l-4 border-accent">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-accent rounded-full border-4 border-white"></div>
              <div className="inline-block px-4 py-2 bg-accent text-white font-bold text-xl mb-4">2021 <span className="text-sm ml-2">Online</span></div>
              <div className="card border-accent/30">
                <h3 className="mb-2">Mekong TESOL lần 3</h3>
                <p className="text-titleclr font-medium mb-4">"Contextualising and Innovating Language Learning and Teaching"</p>
                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  <span className="px-3 py-1 bg-accent/10 text-accent font-semibold rounded"><strong>863</strong> lượt tham dự</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent font-semibold rounded"><strong>14</strong> webinar</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent font-semibold rounded"><strong>15</strong> diễn giả</span>
                </div>
                <div className="text-sm text-primary/70 space-y-2">
                  <p><strong>Diễn giả:</strong> Dr. Willy A. Renandya (NIE Singapore), Dr. Amanda Baker, PGS. Lê Văn Canh (ULIS)</p>
                  <p className="italic text-accent">Duy trì thành công bất chấp đại dịch COVID-19</p>
                </div>
              </div>
            </div>

            {/* 2023 */}
            <div className="relative pl-8 border-l-4 border-titleclr">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-titleclr rounded-full border-4 border-white"></div>
              <div className="inline-block px-4 py-2 bg-titleclr text-white font-bold text-xl mb-4">2023</div>
              <div className="card">
                <h3 className="mb-2">Mekong TESOL lần 4</h3>
                <p className="text-titleclr font-medium mb-4">"Re-orientation in ELT: Embracing Changes and Future Possibilities"</p>
                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  <span className="px-3 py-1 bg-accent/10 text-accent font-semibold rounded"><strong>800</strong> người tham dự</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent font-semibold rounded"><strong>04</strong> phiên toàn thể</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent font-semibold rounded"><strong>30</strong> bài trình bày</span>
                </div>
                <div className="text-sm text-primary/70 space-y-2">
                  <p><strong>Diễn giả:</strong> PGS. Jonathan Newton, TS. Hà Văn Sinh, Dr. Finita Dewi, Dr. Michael Burri</p>
                  <p><strong>Nhà tài trợ:</strong> IEC Group, RELO (U.S. State Dept), NGL, Oxford, Cambridge, Pearson, MM Publications, FAHASA, Macmillan</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2026 Conclusion */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-6 p-8 bg-gradient-to-br from-gold/20 via-gold-light/10 to-gold/5 border-2 border-gold rounded-lg">
              <span className="text-6xl font-bold text-titleclr">2026</span>
              <div className="text-left">
                <h3 className="mb-2">Mekong TESOL lần 5</h3>
                <p className="text-lg">
                  Hướng tới <strong className="text-titleclr">1.000+ đại biểu</strong> — quy mô lớn nhất từ trước đến nay
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Note: Continuing with remaining sections in similar Tailwind style... 
          Due to length, I'll create a continuation file or you can request specific sections */}
      
      {/* Placeholder for remaining sections - will be added in follow-up */}
      <div className="section-padding bg-gray-50 text-center">
        <div className="container-custom">
          <p className="text-lg text-primary/70">
            <em>Các sections còn lại (Audience, Sponsor Finder, Keynote, Agenda, Sponsorship, Flexible Packages, Organizers, Gallery, Contact, Footer) đang được refactor với Tailwind CSS...</em>
          </p>
        </div>
      </div>
    </>
  );
}
