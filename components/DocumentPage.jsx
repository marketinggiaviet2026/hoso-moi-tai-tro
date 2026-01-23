export default function DocumentPage() {
  return (
    <>
      <header className="top-bar" id="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="logos">
              <img
                src="[LOGO_GIAVIET_URL]"
                alt="Trung tâm Ngoại ngữ Gia Việt"
                className="logo"
              />
              <img
                src="[LOGO_SOGDDT_URL]"
                alt="Sở GD-ĐT Cần Thơ"
                className="logo"
              />
            </div>

            <nav className="desktop-nav main-nav">
              <ul>
                <li>
                  <a href="#tongquan">Tổng quan</a>
                </li>
                <li>
                  <a href="#visao">Vì sao</a>
                </li>
                <li>
                  <a href="#quymo">Quy mô</a>
                </li>
                <li>
                  <a href="#timgoi">Tìm gói phù hợp</a>
                </li>
                <li>
                  <a href="#goitaitro">Gói tài trợ</a>
                </li>
                <li>
                  <a href="#lienhe">Liên hệ</a>
                </li>
              </ul>
            </nav>

            <button className="mobile-menu-toggle" aria-label="Menu">
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className="mobile-menu" id="mobile-menu">
        <nav>
          <ul>
            <li>
              <a href="#tongquan">Tổng quan</a>
            </li>
            <li>
              <a href="#visao">Vì sao</a>
            </li>
            <li>
              <a href="#quymo">Quy mô</a>
            </li>
            <li>
              <a href="#timgoi">Tìm gói phù hợp</a>
            </li>
            <li>
              <a href="#goitaitro">Gói tài trợ</a>
            </li>
            <li>
              <a href="#lienhe">Liên hệ</a>
            </li>
          </ul>
        </nav>
      </div>

      <section className="hero hero-section" id="tongquan">
        <div className="container">
          <div className="hero-content">
            <span className="hero-label">HỒ SƠ MỜI TÀI TRỢ</span>
            <h1>
              HỘI NGHỊ QUỐC TẾ<br />
              MEKONG TESOL LẦN 5 – 2026
            </h1>
            <p className="hero-theme">
              "Beyond Language: Re-Empowering Learners through Skills, Emotions, and
              Connections"
            </p>
            <p className="hero-theme-vi">
              "Hơn cả ngôn ngữ: Trao quyền cho người học qua kỹ năng, cảm xúc và kết
              nối"
            </p>

            <p className="hero-lead">
              Diễn đàn học thuật uy tín tại khu vực Đồng bằng Sông Cửu Long, quy tụ
              giảng viên, giáo viên, chuyên gia và nhà nghiên cứu trong lĩnh vực giảng
              dạy tiếng Anh.
            </p>
            <p className="hero-lead">
              Hội nghị hướng đến việc kết nối tri thức chuyên môn với nhu cầu thực
              tiễn, thúc đẩy đổi mới phương pháp và mở rộng hợp tác trong cộng đồng
              giáo dục.
            </p>

            <div className="hero-info">
              <div className="info-item">
                <strong>📅</strong> Chủ Nhật, 19/07/2026 · 07:30 – 17:30
              </div>
              <div className="info-item">
                <strong>📍</strong> Dự kiến Đại học Y Dược Cần Thơ
              </div>
              <div className="info-item text-sm md:text-base whitespace-normal lg:whitespace-nowrap">
                <strong>🏢</strong> Trung tâm Ngoại ngữ Gia Việt · Sở Giáo dục và Đào tạo Thành phố Cần Thơ · Trường Đại học Wollongong
              </div>
            </div>

            <div className="trust-chips">
              <div className="chip chip-wide">
                <span className="chip-label">
                  Khoảng <strong>1.000</strong> đại biểu (dự kiến)
                </span>
              </div>
              <div className="chip chip-wide">
                <span className="chip-label">
                  <strong>04</strong> báo cáo chính<br />
                  <span className="text-xs md:text-sm text-primary/70">(keynote talk)</span>
                  <span className="mx-2">·</span>
                  <strong>05</strong> báo cáo tiêu biểu<br />
                  <span className="text-xs md:text-sm text-primary/70">(featured talk)</span>
                </span>
              </div>
              <div className="chip chip-wide">
                <span className="chip-label">
                  <strong>40+</strong> phiên báo cáo song song · <strong>08</strong> phòng
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-sponsor" id="visao">
        <div className="container">
          <h2>Vì sao nên đồng hành cùng Mekong TESOL 2026?</h2>
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">👁️</div>
              <h3>Hiện diện trong cộng đồng chuyên môn</h3>
              <p>
                Thương hiệu được ghi nhận trong một sự kiện tập trung đúng tệp: giáo
                viên, giảng viên, nhà quản lý giáo dục và các đơn vị đào tạo.
              </p>
              <p className="card-evidence">
                <em>Quyền lợi: Logo, website, fanpage, video hội trường</em>
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🤝</div>
              <h3>Kết nối học thuật – đối tác – hợp tác</h3>
              <p>
                Tạo nền tảng cho các trao đổi chuyên môn, mở rộng hợp tác lâu dài giữa
                nhà trường, tổ chức giáo dục và doanh nghiệp.
              </p>
              <p className="card-evidence">
                <em>Quyền lợi: Quầy triển lãm, Gala Dinner, networking</em>
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🏛️</div>
              <h3>Đồng hành cùng đổi mới giảng dạy tiếng Anh</h3>
              <p>
                Gắn thương hiệu với các phiên báo cáo, hoạt động học thuật và nội dung
                cập nhật xu hướng (kỹ năng, cảm xúc, kết nối).
              </p>
              <p className="card-evidence">
                <em>Quyền lợi: Tài trợ phiên báo cáo, giải thưởng, học liệu</em>
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🎓</div>
              <h3>Tiếp cận trực tiếp người tham dự tại sự kiện</h3>
              <p>
                Booth/leaflet/video giúp đơn vị giới thiệu học liệu, giải pháp hoặc đề
                án đào tạo một cách phù hợp với bối cảnh hội nghị.
              </p>
              <p className="card-evidence">
                <em>Quyền lợi: Booth, leaflet, video theo gói</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="community-section" id="congdong">
        <div className="container">
          <h2>Cộng đồng Mekong TESOL</h2>
          <p className="section-intro">
            Hội nghị tạo ra không gian học thuật truyền cảm hứng — nơi ngôn ngữ, công
            nghệ và con người cùng hội tụ để định hình hướng đi mới cho giáo dục tiếng
            Anh
          </p>

          <div className="community-stats">
            <div className="stat-item">
              <strong>2.500+</strong> lượt tham gia qua các kỳ
            </div>
            <div className="stat-item">
              <strong>120+</strong> bài trình bày &amp; workshop
            </div>
            <div className="stat-item">
              <strong>13+</strong> quốc gia kết nối
            </div>
          </div>

          <div className="community-participants">
            <h3>Đối tượng tham dự</h3>
            <ul className="participant-list">
              <li>
                <strong>Giảng viên &amp; Giáo viên tiếng Anh</strong> — Đại học, cao đẳng,
                THPT, trung tâm ngoại ngữ
              </li>
              <li>
                <strong>Nhà nghiên cứu &amp; Học giả</strong> — TESOL, ngôn ngữ học ứng dụng
              </li>
              <li>
                <strong>Sinh viên</strong> — Ngôn ngữ Anh, Sư phạm tiếng Anh
              </li>
              <li>
                <strong>Lãnh đạo &amp; Quản lý giáo dục</strong> — Hiệu trưởng, trưởng khoa,
                trưởng bộ môn
              </li>
              <li>
                <strong>Nhà cung cấp giải pháp giáo dục</strong> — NXB, EdTech, tổ chức
                công nghệ
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="milestones-section">
        <div className="container">
          <h2>Các mốc thời gian quan trọng</h2>
          <div className="milestones-grid">
            <div className="milestone-item">
              <span className="milestone-date">01/10/2025 – 01/02/2026</span>
              <p>Nộp bản tóm tắt bài báo cáo</p>
            </div>
            <div className="milestone-item">
              <span className="milestone-date">15/03/2026</span>
              <p>Thông báo kết quả chấp nhận bài</p>
            </div>
            <div className="milestone-item">
              <span className="milestone-date">02/04 – 30/05/2026</span>
              <p>Đăng ký Early Bird</p>
            </div>
            <div className="milestone-item">
              <span className="milestone-date">31/05 – 20/06/2026</span>
              <p>Đăng ký Final</p>
            </div>
            <div className="milestone-item highlight">
              <span className="milestone-date">19/07/2026</span>
              <p>Hội nghị chính</p>
            </div>
          </div>
        </div>
      </section>

      <section className="timeline-section" id="quymo">
        <div className="container">
          <h2>Gần một thập kỷ — Bốn kỳ hội nghị thành công</h2>
          <p className="section-intro">
            Được thành lập năm 2016, Mekong TESOL đã trở thành diễn đàn học thuật uy tín
            nhất tại ĐBSCL — kết nối nhà giáo dục Việt Nam và quốc tế
          </p>

          <div className="timeline-detailed">
            <div className="timeline-item-detailed">
              <div className="timeline-year-badge">2016</div>
              <div className="timeline-card">
                <h3>Mekong TESOL lần 1</h3>
                <p className="timeline-theme">"Tailoring English Teaching to Regional Needs"</p>
                <div className="timeline-stats">
                  <span>
                    <strong>350+</strong> người tham dự
                  </span>
                  <span>
                    <strong>04</strong> phiên toàn thể
                  </span>
                  <span>
                    <strong>33</strong> bài trình bày
                  </span>
                </div>
                <div className="timeline-speakers">
                  <strong>Diễn giả:</strong> Ms. Heather Swenddal (RMIT), Dr. Amanda Baker
                  (Wollongong), Paul Grainger (NGL)
                </div>
                <div className="timeline-sponsors">
                  <strong>Nhà tài trợ:</strong> Cambridge, Oxford, NGL, FAHASA, Cengage,
                  CDIMEX
                </div>
              </div>
            </div>

            <div className="timeline-item-detailed">
              <div className="timeline-year-badge">2018</div>
              <div className="timeline-card">
                <h3>Mekong TESOL lần 2</h3>
                <p className="timeline-theme">"Think Globally, Act Locally"</p>
                <div className="timeline-stats">
                  <span>
                    <strong>500</strong> người tham dự
                  </span>
                  <span>
                    <strong>04</strong> phiên toàn thể
                  </span>
                  <span>
                    <strong>30</strong> bài trình bày
                  </span>
                </div>
                <div className="timeline-speakers">
                  <strong>Diễn giả:</strong> GS. Kris van den Branden (KU Leuven), PGS.
                  Jonathan Newton (Victoria), PGS.TS Phạm Thị Hồng Nhung
                </div>
                <div className="timeline-sponsors">
                  <strong>Nhà tài trợ:</strong> IDP IELTS, National Geographic Learning
                </div>
              </div>
            </div>

            <div className="timeline-item-detailed">
              <div className="timeline-year-badge online">2021</div>
              <div className="timeline-card">
                <h3>
                  Mekong TESOL lần 3 <span className="tag-online">Online</span>
                </h3>
                <p className="timeline-theme">
                  "Contextualising and Innovating Language Learning and Teaching"
                </p>
                <div className="timeline-stats">
                  <span>
                    <strong>863</strong> lượt tham dự
                  </span>
                  <span>
                    <strong>14</strong> webinar
                  </span>
                  <span>
                    <strong>15</strong> diễn giả
                  </span>
                </div>
                <div className="timeline-speakers">
                  <strong>Diễn giả:</strong> Dr. Willy A. Renandya (NIE Singapore), Dr.
                  Amanda Baker, PGS. Lê Văn Canh (ULIS)
                </div>
                <p className="timeline-note">Duy trì thành công bất chấp đại dịch COVID-19</p>
              </div>
            </div>

            <div className="timeline-item-detailed">
              <div className="timeline-year-badge">2023</div>
              <div className="timeline-card">
                <h3>Mekong TESOL lần 4</h3>
                <p className="timeline-theme">
                  "Re-orientation in ELT: Embracing Changes and Future Possibilities"
                </p>
                <div className="timeline-stats">
                  <span>
                    <strong>800</strong> người tham dự
                  </span>
                  <span>
                    <strong>04</strong> phiên toàn thể
                  </span>
                  <span>
                    <strong>30</strong> bài trình bày
                  </span>
                </div>
                <div className="timeline-speakers">
                  <strong>Diễn giả:</strong> PGS. Jonathan Newton, TS. Hà Văn Sinh, Dr.
                  Finita Dewi, Dr. Michael Burri
                </div>
                <div className="timeline-sponsors">
                  <strong>Nhà tài trợ:</strong> IEC Group, RELO (U.S. State Dept), NGL,
                  Oxford, Cambridge, Pearson, MM Publications, FAHASA, Macmillan
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-conclusion">
            <div className="conclusion-2026">
              <span className="year-highlight">2026</span>
              <div className="conclusion-text">
                <h3>Mekong TESOL lần 5</h3>
                <p>
                  Hướng tới <strong>1.000+ đại biểu</strong> — quy mô lớn nhất từ trước
                  đến nay
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="audience-section">
        <div className="container">
          <h2>Cơ hội cho nhà tài trợ</h2>
          <p className="section-intro">Đối tượng mục tiêu phù hợp với từng lĩnh vực kinh doanh</p>

          <div className="audience-grid">
            <div className="audience-card" data-sponsor-fit="nxb">
              <div className="audience-icon">📚</div>
              <h3>Nhà xuất bản &amp; Học liệu</h3>
              <p>
                1.000+ giáo viên có nhu cầu giáo trình và tài liệu giảng dạy. Trình bày
                sản phẩm tại quầy triển lãm, chiếu video và phát brochure trực tiếp.
              </p>
              <span className="sponsor-fit-tag">Phù hợp: Gold, Silver, Bronze</span>
            </div>
            <div className="audience-card" data-sponsor-fit="edtech">
              <div className="audience-icon">💻</div>
              <h3>EdTech &amp; AI</h3>
              <p>
                Nhà quản lý và giáo viên quan tâm công nghệ giáo dục. Giới thiệu nền
                tảng học tập, giải pháp AI trong sự kiện quy tụ chuyên gia từ Oxford,
                Cambridge, Pearson.
              </p>
              <span className="sponsor-fit-tag">Phù hợp: Gold, Silver, Học thuật</span>
            </div>
            <div className="audience-card" data-sponsor-fit="duhoc">
              <div className="audience-icon">✈️</div>
              <h3>Du học &amp; Tư vấn</h3>
              <p>
                Giáo viên và phụ huynh có học viên chuẩn bị du học. Gói Đồng Hành 8 triệu
                VNĐ là lựa chọn phù hợp để tạo tương tác trực tiếp.
              </p>
              <span className="sponsor-fit-tag">Phù hợp: Đồng hành, Bronze</span>
            </div>
            <div className="audience-card" data-sponsor-fit="hocthat">
              <div className="audience-icon">🎓</div>
              <h3>Đối tác học thuật</h3>
              <p>
                Tài trợ phiên báo cáo hoặc giải Best Presentation để gắn thương hiệu với
                hoạt động chuyên môn. Phù hợp viện nghiên cứu, tổ chức đào tạo giáo viên.
              </p>
              <span className="sponsor-fit-tag">Phù hợp: Tài trợ học thuật</span>
            </div>
          </div>
        </div>
      </section>

      <section className="sponsor-finder-section" id="timgoi">
        <div className="container">
          <h2>Tìm gói tài trợ phù hợp</h2>
          <p className="section-intro">Điều chỉnh ngân sách và mục tiêu để xem gói phù hợp nhất với bạn</p>

          <div className="sponsor-finder">
            <div className="finder-step">
              <h3>1. Ngân sách dự kiến của bạn?</h3>
              <div className="budget-slider-container">
                <div className="budget-display">
                  <span className="budget-amount" id="budgetAmount">
                    20.000.000
                  </span>
                  <span className="budget-currency">VNĐ</span>
                </div>
                <input
                  type="range"
                  id="budgetSlider"
                  className="budget-slider"
                  min="8"
                  max="30"
                  defaultValue="20"
                  step="1"
                />
                <div className="budget-labels">
                  <span>8 triệu</span>
                  <span>20 triệu</span>
                  <span>30 triệu</span>
                </div>
              </div>
            </div>

            <div className="finder-step">
              <h3>2. Mục tiêu chính của bạn?</h3>
              <div className="goal-options">
                <label className="goal-option">
                  <input type="radio" name="sponsorGoal" value="visibility" defaultChecked />
                  <span className="goal-card">
                    <span className="goal-icon">👁️</span>
                    <span className="goal-text">Hiện diện thương hiệu</span>
                  </span>
                </label>
                <label className="goal-option">
                  <input type="radio" name="sponsorGoal" value="leads" />
                  <span className="goal-card">
                    <span className="goal-icon">🎯</span>
                    <span className="goal-text">Kết nối người tham dự</span>
                  </span>
                </label>
                <label className="goal-option">
                  <input type="radio" name="sponsorGoal" value="academic" />
                  <span className="goal-card">
                    <span className="goal-icon">🎓</span>
                    <span className="goal-text">Gắn kết học thuật</span>
                  </span>
                </label>
                <label className="goal-option">
                  <input type="radio" name="sponsorGoal" value="network" />
                  <span className="goal-card">
                    <span className="goal-icon">🤝</span>
                    <span className="goal-text">Mở rộng mạng lưới</span>
                  </span>
                </label>
              </div>
            </div>

            <div className="finder-step">
              <h3>3. Bạn thuộc lĩnh vực nào?</h3>
              <div className="business-options">
                <label className="business-option">
                  <input type="radio" name="businessType" value="publisher" defaultChecked />
                  <span>📚 NXB / Học liệu</span>
                </label>
                <label className="business-option">
                  <input type="radio" name="businessType" value="edtech" />
                  <span>💻 EdTech / AI</span>
                </label>
                <label className="business-option">
                  <input type="radio" name="businessType" value="education" />
                  <span>✈️ Du học / Tư vấn</span>
                </label>
                <label className="business-option">
                  <input type="radio" name="businessType" value="academic" />
                  <span>🎓 Đối tác học thuật</span>
                </label>
              </div>
            </div>

            <div className="finder-result" id="finderResult">
              <div className="result-header">
                <h3>Gói tham chiếu</h3>
              </div>
              <div className="result-package" id="resultPackage">
                <div className="package-badge" id="packageBadge">
                  🥉 BRONZE
                </div>
                <div className="package-name" id="packageName">
                  Tài trợ Đồng
                </div>
                <div className="package-price" id="packagePrice">
                  20.000.000 VNĐ
                </div>
              </div>
              <div className="result-benefits">
                <h4>Quyền lợi nổi bật:</h4>
                <ul id="benefitsList">
                  <li>✓ Logo trên ấn phẩm hội nghị</li>
                  <li>✓ Video quảng bá 01 phút</li>
                  <li>✓ 01 bàn quầy triển lãm</li>
                  <li>✓ Phát leaflet/brochure</li>
                  <li>✓ Tham dự Gala Dinner</li>
                </ul>
              </div>

              <div className="result-reasons">
                <h4>Cơ sở gợi ý:</h4>
                <ul id="reasonsList">
                  <li>Quyền lợi phù hợp với mục tiêu ưu tiên đã lựa chọn</li>
                  <li>Mức ngân sách tương thích với cấu phần quyền lợi của gói</li>
                </ul>
              </div>
              <div className="result-recommendation" id="resultRecommendation">
                <p>
                  <strong>Ghi chú:</strong> Kết quả tham chiếu được tổng hợp theo ngân sách
                  và mục tiêu ưu tiên. Ban Tổ chức trân trọng sẵn sàng trao đổi để thống
                  nhất phương án phù hợp nhu cầu cụ thể.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="keynote-section" id="keynote">
        <div className="container">
          <h2>Diễn giả chính (Keynote Speakers)</h2>
          <p className="section-intro">Danh sách dự kiến</p>
          <div className="keynote-grid">
            <div className="keynote-card">
              <h3>GS. Rob Waring</h3>
              <p>Trường Đại học Khoa học Xã hội và Nhân văn, Đại học Quốc gia Thành phố Hồ Chí Minh</p>
            </div>
            <div className="keynote-card">
              <h3>GS. Ika Lestari Damayanti</h3>
              <p>Trường Đại học Giáo dục Indonesia</p>
            </div>
            <div className="keynote-card">
              <h3>PGS.TS Phạm Thị Hồng Nhung</h3>
              <p>Trường Đại học Ngoại ngữ - Đại học Huế</p>
            </div>
          </div>
        </div>
      </section>

      <section className="agenda-section" id="chuongtrinh">
        <div className="container">
          <h2>Chương trình dự kiến — Chủ Nhật, 19/07/2026</h2>

          <div className="agenda-timeline">
            <div className="agenda-item">
              <div className="agenda-time">07:30 – 08:00</div>
              <div className="agenda-content">
                <h4>Đón khách</h4>
                <p>Check-in · Nhận bảng tên &amp; túi Hội nghị</p>
              </div>
            </div>

            <div className="agenda-item highlight">
              <div className="agenda-time">08:00 – 08:30</div>
              <div className="agenda-content">
                <h4>Khai mạc</h4>
                <p>Phát biểu của Sở GD-ĐT Cần Thơ &amp; TT Gia Việt</p>
              </div>
            </div>

            <div className="agenda-item keynote">
              <div className="agenda-time">08:30 – 09:10</div>
              <div className="agenda-content">
                <h4>Keynote 01</h4>
                <p>40 phút</p>
              </div>
            </div>

            <div className="agenda-item">
              <div className="agenda-time">09:15 – 10:20</div>
              <div className="agenda-content">
                <h4>Phiên song song 01 &amp; 02</h4>
                <p>08 phòng song song</p>
              </div>
            </div>

            <div className="agenda-item break">
              <div className="agenda-time">10:20 – 10:40</div>
              <div className="agenda-content">
                <h4>Tea Break · Networking</h4>
              </div>
            </div>

            <div className="agenda-item keynote">
              <div className="agenda-time">10:40 – 11:20</div>
              <div className="agenda-content">
                <h4>Keynote 02</h4>
                <p>40 phút</p>
              </div>
            </div>

            <div className="agenda-item">
              <div className="agenda-time">11:25 – 11:55</div>
              <div className="agenda-content">
                <h4>Phiên song song 03</h4>
                <p>08 phòng song song</p>
              </div>
            </div>

            <div className="agenda-item break">
              <div className="agenda-time">12:00 – 13:30</div>
              <div className="agenda-content">
                <h4>Lunch · Poster Presentations</h4>
                <p>Ăn trưa, kết nối, tham quan Poster</p>
              </div>
            </div>

            <div className="agenda-item keynote">
              <div className="agenda-time">13:30 – 14:10</div>
              <div className="agenda-content">
                <h4>Keynote 03</h4>
                <p>40 phút</p>
              </div>
            </div>

            <div className="agenda-item">
              <div className="agenda-time">14:15 – 15:20</div>
              <div className="agenda-content">
                <h4>Phiên song song 04 &amp; 05</h4>
                <p>08 phòng song song</p>
              </div>
            </div>

            <div className="agenda-item break">
              <div className="agenda-time">15:20 – 15:40</div>
              <div className="agenda-content">
                <h4>Tea Break · Networking</h4>
              </div>
            </div>

            <div className="agenda-item keynote">
              <div className="agenda-time">15:40 – 16:20</div>
              <div className="agenda-content">
                <h4>Keynote 04</h4>
                <p>40 phút</p>
              </div>
            </div>

            <div className="agenda-item highlight">
              <div className="agenda-time">16:20 – 16:40</div>
              <div className="agenda-content">
                <h4>Bế mạc · Rút thăm may mắn</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sponsorship-section" id="goitaitro">
        <div className="container">
          <h2>Gói tài trợ theo cấp độ</h2>
          <p className="section-intro">Chọn cấp độ phù hợp với mục tiêu thương hiệu và ngân sách</p>

          <div className="pricing-cards">
            <div className="pricing-card gold" data-package="gold">
              <div className="pricing-header">
                <div className="pricing-badge">⭐ GOLD</div>
                <h3>Tài trợ Vàng</h3>
                <div className="pricing-amount">30.000.000 VNĐ</div>
                <p className="pricing-limit">Giới hạn: 03 đơn vị</p>
              </div>
              <p className="pricing-desc">Vị trí nổi bật nhất — Logo trung tâm, quyền lợi tối đa</p>
              <ul className="pricing-features">
                <li>✓ Logo trung tâm, kích thước lớn trên mọi ấn phẩm</li>
                <li>✓ Giới thiệu trên Website, Fanpage &amp; Booklet (½ trang A4)</li>
                <li>
                  ✓ Video quảng bá <strong>03 phút</strong> tại tất cả hội trường
                </li>
                <li>
                  ✓ <strong>03 bàn</strong> quầy triển lãm
                </li>
                <li>✓ Tham dự Gala Dinner · Nhận hoa &amp; quà trên sân khấu</li>
              </ul>
              <a
                href="mailto:mekongtesol@gmail.com?subject=Đề xuất tài trợ Vàng - Mekong TESOL 2026"
                className="btn btn-primary btn-block"
              >
                Gửi email đề xuất gói Gold
              </a>
            </div>

            <div className="pricing-card silver" data-package="silver">
              <div className="pricing-header">
                <div className="pricing-badge">🥈 SILVER</div>
                <h3>Tài trợ Bạc</h3>
                <div className="pricing-amount">25.000.000 VNĐ</div>
                <p className="pricing-limit">Giới hạn: 03 đơn vị</p>
              </div>
              <p className="pricing-desc">Cân bằng giữa hiện diện và chi phí</p>
              <ul className="pricing-features">
                <li>✓ Logo hàng thứ hai, kích thước trung bình</li>
                <li>✓ Giới thiệu trên Website &amp; Fanpage</li>
                <li>
                  ✓ Video quảng bá <strong>02 phút</strong>
                </li>
                <li>
                  ✓ <strong>02 bàn</strong> quầy triển lãm
                </li>
                <li>✓ Tham dự Gala Dinner · Nhận hoa &amp; quà trên sân khấu</li>
              </ul>
              <a
                href="mailto:mekongtesol@gmail.com?subject=Đề xuất tài trợ Bạc - Mekong TESOL 2026"
                className="btn btn-primary btn-block"
              >
                Gửi email đề xuất gói Silver
              </a>
            </div>

            <div className="pricing-card bronze" data-package="bronze">
              <div className="pricing-header">
                <div className="pricing-badge">🥉 BRONZE</div>
                <h3>Tài trợ Đồng</h3>
                <div className="pricing-amount">20.000.000 VNĐ</div>
                <p className="pricing-limit">Giới hạn: 04 đơn vị</p>
              </div>
              <p className="pricing-desc">Điểm khởi đầu lý tưởng cho doanh nghiệp</p>
              <ul className="pricing-features">
                <li>✓ Logo hàng thứ ba, kích thước nhỏ</li>
                <li>✓ Giới thiệu trên Website &amp; Fanpage</li>
                <li>
                  ✓ Video quảng bá <strong>01 phút</strong>
                </li>
                <li>
                  ✓ <strong>01 bàn</strong> quầy triển lãm
                </li>
                <li>✓ Tham dự Gala Dinner · Nhận hoa &amp; quà trên sân khấu</li>
              </ul>
              <a
                href="mailto:mekongtesol@gmail.com?subject=Đề xuất tài trợ Đồng - Mekong TESOL 2026"
                className="btn btn-primary btn-block"
              >
                Gửi email đề xuất gói Bronze
              </a>
            </div>
          </div>

          <div className="comparison-table">
            <h3>Bảng so sánh quyền lợi</h3>
            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>Quyền lợi</th>
                    <th>Gold</th>
                    <th>Silver</th>
                    <th>Bronze</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Giá trị tài trợ</td>
                    <td>
                      <strong>30tr VNĐ</strong>
                    </td>
                    <td>
                      <strong>25tr VNĐ</strong>
                    </td>
                    <td>
                      <strong>20tr VNĐ</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Số lượng giới hạn</td>
                    <td>03 đơn vị</td>
                    <td>03 đơn vị</td>
                    <td>04 đơn vị</td>
                  </tr>
                  <tr>
                    <td>Vị trí logo</td>
                    <td>Trung tâm, lớn</td>
                    <td>Hàng 2, trung bình</td>
                    <td>Hàng 3, nhỏ</td>
                  </tr>
                  <tr>
                    <td>Video quảng bá</td>
                    <td>03 phút (phát tại tất cả hội trường)</td>
                    <td>02 phút (phát tại tất cả hội trường)</td>
                    <td>01 phút (phát tại tất cả hội trường)</td>
                  </tr>
                  <tr>
                    <td>Quầy triển lãm</td>
                    <td>03 bàn</td>
                    <td>02 bàn</td>
                    <td>01 bàn</td>
                  </tr>
                  <tr>
                    <td>Booklet (½ trang A4)</td>
                    <td>✓</td>
                    <td>Không bao gồm</td>
                    <td>Không bao gồm</td>
                  </tr>
                  <tr>
                    <td>Gala Dinner</td>
                    <td>✓</td>
                    <td>✓</td>
                    <td>✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="flexible-packages">
        <div className="container">
          <h2>Gói tài trợ linh hoạt</h2>
          <p className="section-intro">Đa dạng hình thức đồng hành — phù hợp mọi quy mô và mục tiêu</p>

          <div className="tabs">
            <div className="tab-buttons">
              <button className="tab-button active" data-tab="engagement" type="button">
                Đồng hành · 8tr
              </button>
              <button className="tab-button" data-tab="academic" type="button">
                Tài trợ học thuật
              </button>
              <button className="tab-button" data-tab="inkind" type="button">
                In-kind
              </button>
            </div>

            <div className="tab-content active" id="engagement">
              <div className="flexible-card">
                <h3>Gói Đồng Hành</h3>
                <div className="flexible-price">8.000.000 VNĐ</div>
                <p className="flexible-quantity">Số lượng: Không giới hạn</p>

                <div className="flexible-features">
                  <ul>
                    <li>✓ 01 bàn quầy triển lãm</li>
                    <li>✓ Phát leaflet/brochure</li>
                    <li>✓ Logo trên website hội nghị</li>
                    <li className="disabled">✗ Logo trên backdrop/video</li>
                    <li className="disabled">✗ Gala Dinner</li>
                  </ul>
                </div>

                <div className="flexible-suitable">
                  <strong>Phù hợp:</strong> Công ty tư vấn du học · Trung tâm đào tạo vừa và
                  nhỏ · Đơn vị ưu tiên kết nối và trao đổi trực tiếp
                </div>

                <a
                  href="mailto:mekongtesol@gmail.com?subject=Đề xuất gói Đồng hành - Mekong TESOL 2026"
                  className="btn btn-primary"
                >
                  Trao đổi chi tiết
                </a>
              </div>
            </div>

            <div className="tab-content" id="academic">
              <div className="flexible-card">
                <h3>Tài trợ Học thuật</h3>
                <p className="flexible-note">Giá trị linh hoạt theo hình thức</p>

                <div className="flexible-options">
                  <div className="option-item">
                    <h4>Tài trợ diễn giả phiên song song</h4>
                    <p>Logo gắn tên phiên · Giới thiệu trước khi phiên bắt đầu</p>
                  </div>

                  <div className="option-item">
                    <h4>Tài trợ giải Best Presentation</h4>
                    <p>Logo tại lễ trao giải · Ghi nhận trong booklet &amp; website</p>
                  </div>

                  <div className="option-item">
                    <h4>Tài trợ học liệu/sách/tài khoản học tập</h4>
                    <p>Logo gắn hạng mục · Ghi nhận đóng góp học thuật</p>
                  </div>
                </div>

                <div className="flexible-suitable">
                  <strong>Phù hợp:</strong> Nhà xuất bản · EdTech · Tổ chức nghiên cứu &amp;
                  đào tạo giáo viên
                </div>

                <a
                  href="mailto:mekongtesol@gmail.com?subject=Đề xuất tài trợ học thuật - Mekong TESOL 2026"
                  className="btn btn-primary"
                >
                  Trao đổi chi tiết
                </a>
              </div>
            </div>

            <div className="tab-content" id="inkind">
              <div className="flexible-card">
                <h3>Hình thức đóng góp</h3>

                <div className="inkind-options">
                  <div className="inkind-item">
                    <div className="inkind-icon">💵</div>
                    <h4>100% hiện kim</h4>
                  </div>

                  <div className="inkind-item">
                    <div className="inkind-icon">💵📦</div>
                    <h4>80% kim + 20% vật</h4>
                  </div>

                  <div className="inkind-item">
                    <div className="inkind-icon">📦</div>
                    <h4>50% kim + 50% vật</h4>
                  </div>
                </div>

                <div className="inkind-note">
                  <p>
                    Ban Tổ Chức xây dựng các hình thức tài trợ linh hoạt nhằm giúp Quý
                    Đối Tác lựa chọn phương án đồng hành phù hợp với mục tiêu thương
                    hiệu, ngân sách và chiến lược phát triển.
                  </p>
                </div>

                <a
                  href="mailto:mekongtesol@gmail.com?subject=Trao đổi hình thức tài trợ - Mekong TESOL 2026"
                  className="btn btn-primary"
                >
                  Trao đổi chi tiết
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-organizers-section">
        <div className="container">
          <h2>Giới thiệu đơn vị tổ chức</h2>

          <div className="about-orgs-grid">
            <div className="about-org-card">
              <h3>Sở Giáo dục và Đào tạo TP. Cần Thơ</h3>
              <p className="about-org-role">Đơn vị chỉ đạo và định hướng</p>
              <p>
                Sở GD-ĐT Cần Thơ đóng góp chủ đạo trong việc định hướng, thẩm định và phê
                duyệt kế hoạch tổ chức, đồng thời chỉ đạo truyền tải thông tin đến các
                trường trực thuộc, khuyến khích giáo viên tham gia và tạo điều kiện để
                hội nghị có sự tham dự rộng rãi từ đội ngũ giáo viên trong khu vực.
              </p>
            </div>
            <div className="about-org-card">
              <h3>Trung tâm Ngoại ngữ Gia Việt</h3>
              <p className="about-org-role">Đơn vị phụ trách chuyên môn và tổ chức</p>
              <p>
                Được thành lập từ năm 2009, Gia Việt đã khẳng định uy tín trong việc đào
                tạo tiếng Anh tại ĐBSCL với hơn <strong>4.000 học viên</strong> thường
                xuyên và hơn <strong>150 giáo viên</strong>. Hội nghị Mekong TESOL được
                Gia Việt khởi xướng từ năm 2016 và tổ chức thường xuyên với tần suất 2
                năm/lần.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="organizers-section">
        <div className="container">
          <h2>Ban Tổ chức</h2>
          <div className="organizers-grid">
            <div className="organizer-card director">
              <p className="organizer-role">Chỉ đạo chung</p>
              <p className="organizer-name">TS. Nguyễn Phúc Tăng</p>
              <p className="organizer-org">Phó Giám đốc Sở GD-ĐT Cần Thơ</p>
            </div>
            <div className="organizer-card">
              <p className="organizer-role">Trưởng Ban Tổ chức</p>
              <p className="organizer-name">TS. Nguyễn Hải Quân</p>
              <p className="organizer-org">TT Ngoại ngữ Gia Việt</p>
            </div>
            <div className="organizer-card">
              <p className="organizer-role">Điều phối tổng thể</p>
              <p className="organizer-name">ThS. Huỳnh Minh Thư</p>
              <p className="organizer-org">TT Ngoại ngữ Gia Việt</p>
            </div>
            <div className="organizer-card">
              <p className="organizer-role">Hậu cần – Đối ngoại</p>
              <p className="organizer-name">Dương Hồ Bảo Ngân</p>
              <p className="organizer-org">TT Ngoại ngữ Gia Việt</p>
            </div>
            <div className="organizer-card">
              <p className="organizer-role">Thiết kế – Truyền thông</p>
              <p className="organizer-name">Võ Lê Uyển Nhi</p>
              <p className="organizer-org">TT Ngoại ngữ Gia Việt</p>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <h2>Hình ảnh Mekong TESOL các kỳ trước</h2>

          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="placeholder-image">
                <span>Khai mạc Mekong TESOL 2023</span>
              </div>
            </div>
            <div className="gallery-item">
              <div className="placeholder-image">
                <span>Keynote speaker trình bày</span>
              </div>
            </div>
            <div className="gallery-item">
              <div className="placeholder-image">
                <span>Phiên báo cáo song song</span>
              </div>
            </div>
            <div className="gallery-item">
              <div className="placeholder-image">
                <span>Quầy triển lãm nhà tài trợ</span>
              </div>
            </div>
            <div className="gallery-item">
              <div className="placeholder-image">
                <span>Networking giữa giờ giải lao</span>
              </div>
            </div>
            <div className="gallery-item">
              <div className="placeholder-image">
                <span>Gala Dinner &amp; trao giải</span>
              </div>
            </div>
          </div>

          <div className="gallery-cta">
            <button className="btn btn-outline" type="button">
              Xem thêm hình ảnh
            </button>
          </div>
        </div>
      </section>

      <section className="contact-section" id="lienhe">
        <div className="container">
          <div className="contact-content">
            <div className="contact-header">
              <h2>Liên hệ Ban Tổ chức</h2>
              <p className="contact-intro">
                Thay mặt Ban Tổ chức Hội nghị, chúng tôi xin trân trọng gửi lời cảm ơn sâu
                sắc đến Quý Cơ quan và Quý Đối tác đã dành thời gian quan tâm và xem xét
                Hồ sơ mời tài trợ.
              </p>
              <p className="contact-intro">
                Với sự đồng hành của Quý vị, Hội nghị sẽ không chỉ là một diễn đàn học thuật
                uy tín mà còn là nơi khẳng định sự kết nối chặt chẽ giữa cộng đồng giáo dục,
                doanh nghiệp và các tổ chức quốc tế.
              </p>
            </div>

            <div className="contact-main">
              <div className="contact-info-block">
                <h3>Thông tin liên hệ</h3>
                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <span className="contact-icon">📧</span>
                    <div>
                      <strong>Email</strong>
                      <a href="mailto:mekongtesol@gmail.com">mekongtesol@gmail.com</a>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <span className="contact-icon">📞</span>
                    <div>
                      <strong>TS. Nguyễn Hải Quân</strong> <span className="contact-role-tag">Trưởng BTC</span>
                      <a href="tel:+84939988747">0939 988 747</a>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <span className="contact-icon">📞</span>
                    <div>
                      <strong>ThS. Huỳnh Minh Thư</strong> <span className="contact-role-tag">Điều phối</span>
                      <a href="tel:+84939808769">0939 808 769</a>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <span className="contact-icon">📄</span>
                    <div>
                      <strong>Hồ sơ PDF</strong>
                      <a href="[PDF_SPONSOR_URL]" download>
                        Tải Hồ sơ mời tài trợ
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-action-block">
                <h3>Gửi đề xuất tài trợ</h3>
                <p>
                  Quý Đối tác vui lòng gửi email với thông tin cơ bản: đơn vị, lĩnh vực, mức
                  ngân sách dự kiến và hình thức đồng hành quan tâm.
                </p>
                <div className="contact-buttons">
                  <a
                    href="mailto:mekongtesol@gmail.com?subject=Đề xuất tài trợ - Mekong TESOL 2026"
                    className="btn btn-primary btn-large"
                  >
                    Gửi email đề xuất tài trợ
                  </a>
                  <a href="[PDF_SPONSOR_URL]" className="btn btn-outline btn-large" download>
                    Nhận Hồ sơ mời tài trợ (PDF)
                  </a>
                </div>
                <p className="contact-followup">
                  Ban Tổ chức sẽ chủ động liên hệ với Quý Đối tác sau 14 ngày kể từ ngày gửi
                  Hồ sơ mời tài trợ.
                </p>
              </div>
            </div>

            <div className="contact-closing">
              <p>
                Chúng tôi rất mong nhận được sự quan tâm, hợp tác và hỗ trợ quý báu từ Quý vị
                với tư cách Nhà tài trợ của Hội nghị Quốc tế Mekong TESOL lần thứ 5 – 2026.
              </p>
              <p>
                <strong>Trân trọng cảm ơn!</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Hội nghị Quốc tế Mekong TESOL lần 5</h4>
              <p>"Beyond Language: Re-Empowering Learners through Skills, Emotions, and Connections"</p>
              <p>
                <strong>19/07/2026</strong> · Dự kiến Đại học Y Dược Cần Thơ
              </p>
            </div>

            <div className="footer-section">
              <h4>Đơn vị tổ chức</h4>
              <p>Trung tâm Ngoại ngữ Gia Việt</p>
              <p>Sở Giáo dục và Đào tạo TP. Cần Thơ</p>
              <p>Trường Đại học Wollongong</p>
            </div>

            <div className="footer-section">
              <h4>Liên hệ</h4>
              <p>
                📧 <a href="mailto:mekongtesol@gmail.com">mekongtesol@gmail.com</a>
              </p>
              <p>
                💬 <a href="https://zalo.me/0939808769">Zalo: 0939 808 769</a>
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 Mekong TESOL · Cần Thơ, ngày 06 tháng 02 năm 2026</p>
          </div>
        </div>
      </footer>
    </>
  );
}
