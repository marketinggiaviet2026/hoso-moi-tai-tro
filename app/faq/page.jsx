export const dynamic = 'force-static';

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-mt-blue-soft/5 to-mt-pink/5">
      <section className="section-padding py-12 md:py-14 border-b border-mt-gray-border/30 bg-white/70 backdrop-blur-sm">
        <div className="container-custom max-w-5xl">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm font-semibold text-primary/60">Hồ sơ mời tài trợ</p>
              <h1 className="text-3xl md:text-4xl font-bold text-titleclr mt-2">Câu hỏi thường gặp (FAQ)</h1>
              <p className="text-primary/70 mt-3 leading-relaxed">Thông tin nhanh dành cho Nhà tài trợ</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/premium"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white border border-mt-gray-border/60 text-sm font-semibold text-titleclr shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                Quay lại Hồ sơ mời tài trợ
              </a>
              <a
                href="/premium#lienhe"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-gradient-to-br from-gold via-gold-light to-gold text-sm font-semibold text-primary shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all"
              >
                Liên hệ Ban Tổ chức
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="space-y-4">
            <details className="card-premium" open>
              <summary className="cursor-pointer font-semibold text-titleclr">Deadline chốt các gói và hình thức tài trợ?</summary>
              <div className="pt-3 text-primary/75 leading-relaxed">
                Deadline áp dụng cho tất cả các gói tài trợ và hình thức đóng góp: <strong className="text-titleclr">28/02/2026</strong>.
              </div>
            </details>

            <details className="card-premium">
              <summary className="cursor-pointer font-semibold text-titleclr">Kích thước booth trưng bày?</summary>
              <div className="pt-3 text-primary/75 leading-relaxed">
                Booth tiêu chuẩn: <strong className="text-titleclr">0.8m × 1.8m</strong>.
              </div>
            </details>

            <details className="card-premium">
              <summary className="cursor-pointer font-semibold text-titleclr">Có thể “customize” quyền lợi ngoài khung Gold/Silver/Bronze không?</summary>
              <div className="pt-3 text-primary/75 leading-relaxed">
                Có. Quý Đối tác vui lòng liên hệ Ban Tổ chức để thống nhất phương án và hạng mục phù hợp.
              </div>
            </details>

            <details className="card-premium">
              <summary className="cursor-pointer font-semibold text-titleclr">BTC có nhận tài trợ hiện vật (in-kind) không? Nếu có thì tiêu chí là gì?</summary>
              <div className="pt-3 text-primary/75 leading-relaxed">
                <strong className="text-titleclr">Có.</strong> Ban Tổ chức ưu tiên hiện vật/học liệu có giá trị sử dụng thực tế cho Hội nghị và người tham dự (ví dụ: sách, học liệu, tài khoản học tập, bản quyền phần mềm, quà tặng/giải thưởng). Hạng mục cụ thể sẽ được trao đổi để đảm bảo phù hợp mục tiêu học thuật và trải nghiệm người tham dự.
              </div>
            </details>

            <details className="card-premium">
              <summary className="cursor-pointer font-semibold text-titleclr">Deadline gửi logo, bài giới thiệu, banner, video quảng bá là ngày nào?</summary>
              <div className="pt-3 text-primary/75 leading-relaxed">
                Ban Tổ chức sẽ gửi các hướng dẫn và mốc thời gian cụ thể sau khi xác nhận gói tài trợ.
              </div>
            </details>

            <details className="card-premium">
              <summary className="cursor-pointer font-semibold text-titleclr">NTT có được mang standee riêng, vật phẩm trưng bày, hoạt náo/mini game không?</summary>
              <div className="pt-3 text-primary/75 leading-relaxed">
                Có. Quý Đối tác vui lòng trao đổi trước với Ban Tổ chức để phối hợp phương án vận hành và đảm bảo trải nghiệm chung tại khu vực triển lãm.
              </div>
            </details>

            <details className="card-premium">
              <summary className="cursor-pointer font-semibold text-titleclr">Có được phát leaflet/brochure vào túi hội nghị không?</summary>
              <div className="pt-3 text-primary/75 leading-relaxed">Có. Quý Đối tác vui lòng liên hệ Ban Tổ chức để thống nhất số lượng và quy cách.</div>
            </details>

            <details className="card-premium">
              <summary className="cursor-pointer font-semibold text-titleclr">BTC có cung cấp danh sách người tham dự/lead cho NTT không?</summary>
              <div className="pt-3 text-primary/75 leading-relaxed">
                Ban Tổ chức tuân thủ chính sách bảo vệ dữ liệu và quyền riêng tư. Việc chia sẻ thông tin người tham dự (nếu có) chỉ thực hiện khi có cơ chế <strong className="text-titleclr">đồng ý rõ ràng</strong> từ người tham dự và theo quy định hiện hành. Ban Tổ chức khuyến nghị phương án thu lead tại booth (QR/đăng ký nhận thông tin) để đảm bảo minh bạch.
              </div>
            </details>

            <details className="card-premium">
              <summary className="cursor-pointer font-semibold text-titleclr">Các kênh truyền thông chính thức của hội nghị gồm những kênh nào?</summary>
              <div className="pt-3 text-primary/75 leading-relaxed">
                <strong className="text-titleclr">Website:</strong> mekongtesol.vn<br/>
                <strong className="text-titleclr">Fanpage:</strong> https://www.facebook.com/mekongtesol
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
