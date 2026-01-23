# Hosomoitaitro landing page — Nguồn nội dung (text + images)

## Mục tiêu
- File này tổng hợp **nội dung dạng text đang hiển thị** và **tên/đường dẫn các image** của trang **homepage**: `http://localhost:3000/`.
- Khi cần chỉnh sửa nội dung, bạn sửa tại đây. Sau đó mình sẽ lấy nội dung từ file này để cập nhật lại UI.

## Nguồn nội dung (hiện tại)
- Route: `app/page.jsx`
- Component render nội dung: `components/DocumentPagePremium.jsx`

---

## Danh sách images (đang dùng trên `http://localhost:3000/`)

### Logos (header)
- Src: `/images/logo-mekong-tesol.png`
  - Alt: `Logo Mekong TESOL`
- Src: `/images/logo-giaviet.png`
  - Alt: `Logo Trung tâm Anh ngữ Gia Việt`
- Src: `/images/logo-sogddt-cantho.png`
  - Alt: `Logo Sở Giáo dục và Đào tạo TP. Cần Thơ`

### Organizers / giới thiệu đơn vị
- Src: `/images/giaviet-center.jpg`
  - Alt: `Trung tâm Anh ngữ Gia Việt`

### Keynote speakers
- Src: `/images/keynote/rob-waring.jpg`
  - Alt: `GS. Rob Waring`
- Src: `/images/keynote/ika-lestari-damayanti.jpg`
  - Alt: `GS. Ika Lestari Damayanti`
- Src: `/images/keynote/pham-thi-hong-nhung.jpg`
  - Alt: `PGS.TS Phạm Thị Hồng Nhung`
- Src: `/images/keynote/relo-speaker.jpg`
  - Alt: `Speaker của RELO`

### Gallery (carousel)
- Src: `/images/gallery/mt-2016-01.jpg`
- Src: `/images/gallery/mt-2016-02.jpg`
- Src: `/images/gallery/mt-2016-03.jpg`
- Src: `/images/gallery/mt-2016-04.jpg`
- Src: `/images/gallery/mt-2016-05.jpg`
- Src: `/images/gallery/mt-2016-06.png`
- Src: `/images/gallery/mt-2016-07.jpg`

---

## Điều hướng / Header `#top-bar`
**Nơi hiển thị**: thanh menu đầu trang (desktop + mobile)

- Link: `Thư mời tài trợ` → `/hosomoitaitro`
- Anchor: `Quy mô` → `#quymo`
- Anchor: `Gói tài trợ` → `#goitaitro`
- Anchor: `Liên hệ` → `#lienhe`
- Link: `FAQ` → `/faq`

---

## Section `#tongquan` (Hero)
**Nơi hiển thị**: khối hero đầu trang

- Label: `HỒ SƠ MỜI TÀI TRỢ`
- H1:
  - `HỘI NGHỊ QUỐC TẾ`
  - `MEKONG TESOL LẦN 5 – 2026`
- Chủ đề:
  - `Beyond Language:`
  - `Re-Empowering Learners through Skills, Emotions, and Connections`
  - `Vượt ra ngoài ngôn ngữ: Trao quyền cho người học thông qua kỹ năng, cảm xúc và kết nối.`
- Mô tả:
  - `Diễn đàn học thuật uy tín tại Đồng bằng Sông Cửu Long, quy tụ giảng viên, giáo viên, chuyên gia và nhà nghiên cứu trong lĩnh vực giảng dạy tiếng Anh.`

### Thông tin nhanh (4 cột)
- `Thời gian`
  - `Chủ Nhật, 19/7/2026`
  - `07:30 – 17:30`
- `Địa điểm`
  - `Hội trường Cửu Long`
  - `Đại học Y Dược, Cần Thơ`
- `Đơn vị tổ chức`
  - `Trung tâm Anh ngữ Gia Việt`
  - `Sở Giáo dục và Đào tạo TP. Cần Thơ`
- `Số lượng tham dự`
  - `1.000+`
  - `Giảng viên, giáo viên, chuyên gia`

### Chỉ số nổi bật (4 cards)
- `1.000+` — `đại biểu dự kiến`
- `04` — `báo cáo chính`
- `05` — `báo cáo tiêu biểu`
- `40+` — `bài báo cáo phiên song song`

### CTA
- Button (link): `Thư mời tài trợ` → `/hosomoitaitro`

---

## Section `#visao`
**Nơi hiển thị**: “Vì sao nên đồng hành…” (4 cards)

- Tiêu đề: `Vì sao nên đồng hành cùng Mekong TESOL 2026?`
- Sub: `Cơ hội kết nối với cộng đồng giáo dục hàng đầu khu vực Đồng bằng Sông Cửu Long`

### Card 1
- Title: `Hiện diện trong cộng đồng chuyên môn`
- Body: `Thương hiệu của Quý Đối tác hiện diện nổi bật trước nhóm đối tượng mục tiêu: giáo viên, giảng viên, nhà quản lý giáo dục và các đơn vị đào tạo.`
- Note: `Quyền lợi: Logo, website, fanpage, video hội trường`

### Card 2
- Title: `Kết nối học thuật – đối tác – hợp tác`
- Body: `Tạo nền tảng cho các trao đổi chuyên môn, mở rộng hợp tác lâu dài giữa nhà trường, tổ chức giáo dục và doanh nghiệp.`
- Note: `Quyền lợi: Quầy triển lãm, Gala Dinner, networking`

### Card 3
- Title: `Đồng hành cùng đổi mới giảng dạy.`
- Body: `Lan toả dấu ấn thương hiệu qua những phiên chia sẻ học thuật và nội dung cập nhật xu hướng giáo dục: kỹ năng, cảm xúc và kết nối.`
- Note: `Quyền lợi: Tài trợ phiên báo cáo, giải thưởng, học liệu`

### Card 4
- Title: `Tiếp cận trực tiếp người tham dự`
- Body: `Booth/leaflet/video giúp đơn vị giới thiệu học liệu, giải pháp hoặc đề án đào tạo phù hợp với bối cảnh hội nghị.`
- Note: `Quyền lợi: Booth, leaflet, video theo gói`

---

## Section `#congdong`
**Nơi hiển thị**: “Cộng đồng Mekong TESOL”

- Tiêu đề: `Cộng đồng Mekong TESOL`
- Sub: `Không gian học thuật truyền cảm hứng — nơi ngôn ngữ, công nghệ và con người cùng hội tụ để định hình hướng đi mới cho giáo dục tiếng Anh.`

### Chỉ số
- `2.500+` — `lượt tham gia qua các kỳ`
- `120+` — `bài trình bày & workshop`
- `13+` — `quốc gia kết nối`
- `1.000+` — `giáo viên tham dự`

### Đối tượng tham dự
- `Giảng viên và Giáo viên tiếng Anh`: `Từ các trường đại học, cao đẳng, trung học phổ thông và các trung tâm ngoại ngữ.`
- `Nhà nghiên cứu và Học giả`: `Thực hiện các nghiên cứu trong lĩnh vực TESOL, ngôn ngữ học ứng dụng và giáo dục ngôn ngữ.`
- `Sinh viên`: `Chuyên ngành Ngôn ngữ Anh, Sư phạm tiếng Anh hoặc các lĩnh vực liên quan.`
- `Lãnh đạo và Quản lý giáo dục`: `Các nhà hoạch định chính sách, hiệu trưởng, trưởng khoa và trưởng bộ môn.`
- `Chuyên viên phát triển chương trình`: `Các chuyên gia tham gia thiết kế và triển khai chương trình tiếng Anh.`
- `Nhà cung cấp giải pháp giáo dục`: `Đại diện từ các nhà xuất bản và tổ chức công nghệ giáo dục.`

---

## Section `#timeline`
**Nơi hiển thị**: “Các mốc thời gian quan trọng”

- Tiêu đề: `Các mốc thời gian quan trọng`
- Sub: `Lộ trình chuẩn bị và tham gia hội nghị`

- `01/10/2025 – 01/02/2026` — `Nộp tóm tắt`
  - Tooltip: `Nộp bản tóm tắt bài báo cáo theo khung thời gian công bố của Ban Tổ chức.`
- `09/02/2026` — `Chốt tài trợ`
  - Tooltip: `Deadline chốt tất cả các gói tài trợ và hình thức đóng góp.`
- `15/03/2026` — `Thông báo kết quả`
  - Tooltip: `Thông báo kết quả chấp nhận bài báo cáo theo thông tin đăng ký.`
- `31/03/2026` — `Xác nhận báo cáo`
  - Tooltip: `Diễn giả xác nhận báo cáo để Ban Tổ chức sắp xếp chương trình.`
- `02/04/2026 – 20/06/2026` — `Mở đăng ký`
  - Tooltip: `Early bird: 02/04/2026 - 30/05/2026`
  - Tooltip: `Final registration: 31/05/2026 - 20/06/2026`
- `01/07/2026` — `Công bố CT`
  - Tooltip: `Thông báo chương trình chính thức của hội nghị.`
- `19/07/2026` — `Chuyên đề`
  - Tooltip: `Chuỗi chuyên đề/tập huấn trong khuôn khổ hội nghị: 19/7/2026.`
- `19/07/2026` — `Hội nghị chính`
  - Tooltip: `Chủ Nhật, ngày 19/7/2026 (từ 7:30 đến 17:30) · Hội trường Cửu Long – Đại học Y Dược Cần Thơ.`

---

## Section `#quymo`
**Nơi hiển thị**: “Gần một thập kỷ — Bốn kỳ hội nghị thành công” + giới thiệu đơn vị tổ chức

- Title: `Gần một thập kỷ — Bốn kỳ hội nghị thành công`
- Sub:
  - `Được thành lập năm 2016, Mekong TESOL đã trở thành diễn đàn học thuật uy tín`
  - `nhất tại ĐBSCL — kết nối nhà giáo dục Việt Nam và quốc tế`

### Giới thiệu đơn vị
- `Sở Giáo dục và Đào tạo thành phố Cần Thơ`
  - Badge: `Đơn vị chỉ đạo và định hướng`
  - Nội dung: `Sở Giáo dục và Đào tạo thành phố Cần Thơ đóng góp chủ đạo trong việc định hướng, thẩm định và phê duyệt kế hoạch tổ chức, nhằm đảm bảo các hoạt động của Hội nghị diễn ra suôn sẻ, đúng quy định và đạt hiệu quả cao. Sở đồng thối chỉ đạo, truyền tải thông tin đến các trường trực thuộc, khuyến khích giáo viên tham gia, tạo điều kiện để hội nghị có sự tham dự rộng rãi từ đội ngũ giáo viên trong khu vực.`
  - Caption: `Đơn vị đồng hành cùng cộng đồng giáo dục khu vực`
- `Trung tâm Anh ngữ Gia Việt`
  - Badge: `Đơn vị phụ trách chuyên môn và tổ chức`
  - Nội dung: `Trung tâm Ngoại ngữ Gia Việt đóng vai trò là đơn vị chịu trách nhiệm tổ chức chính của Hội nghị. Được thành lập từ năm 2009 và đã khẳng định được uy tín trong việc đào tạo tiếng Anh cho học sinh, sinh viên và phụ huynh tại Đồng bằng Sông Cửu Long. Với hơn 4.000 học viên thường xuyên theo học và hơn 150 giáo viên, Gia Việt là một trong những đơn vị đào tạo tiếng Anh hàng đầu trong khu vực.`

### Các kỳ hội nghị (timeline)
- `2016` — `Mekong TESOL lần 1 — 2016`
  - Theme: `"TAILORING ENGLISH TEACHING TO REGIONAL NEEDS"`
  - Stats: `350+ người tham dự` · `04 phiên toàn thể` · `33 bài trình bày song song`
  - `Diễn giả chính:` `Ms. Heather Swenddal – Đại học RMIT (Việt Nam); Dr. Amanda Baker – Đại học Wollongong; Paul Grainger – National Geographic Learning; TS. Nguyễn Thu Hương – Đại học Hoa Sen`
  - `Nhà tài trợ:` `Bangkok University, Cambridge Assessment English, CDIMEX, Cengage Learning, Oxford University Press, FAHASA, National Geographic Learning`
- `2018` — `Mekong TESOL lần 2 — 2018`
  - Theme: `"THINK GLOBALLY, ACT LOCALLY"`
  - Stats: `500 người tham dự` · `04 phiên toàn thể` · `30 bài trình bày song song`
  - `Diễn giả chính:` `Dr. Amanda Baker – Đại học Wollongong (Úc); GS. Kris van den Branden – KU Leuven (Bỉ); PGS.TS Phạm Thị Hồng Nhung – ĐH Ngoại ngữ, ĐH Huế; PGS. Jonathan Newton – ĐH Victoria Wellington (New Zealand)`
  - `Nhà tài trợ:` `IDP IELTS, National Geographic Learning`
- `2021` — `Mekong TESOL lần 3 — 2021` (badge: `Trực tuyến`)
  - Theme: `"CONTEXTUALISING AND INNOVATING LANGUAGE LEARNING AND TEACHING"`
  - Stats: `863 lượt tham dự` · `14 webinar` · `15 diễn giả`
  - `Diễn giả chính:` `Dr. Willy A. Renandya – NIE, Đại học Công nghệ Nanyang (Singapore); Dr. Amanda Baker – Đại học Wollongong (Úc); PGS. Lê Văn Canh – ĐHQGHN (ULIS)`
  - Note: `Duy trì thành công bất chấp những thách thức của đại dịch COVID-19`
- `2023` — `Mekong TESOL lần 4 — 2023`
  - Theme: `"RE-ORIENTATION IN ELT: EMBRACING CHANGES AND FUTURE POSSIBILITIES"`
  - Stats: `800 người tham dự` · `04 phiên toàn thể` · `30 bài trình bày song song`
  - `Diễn giả chính:` `PGS. Jonathan Newton – ĐH Victoria Wellington (New Zealand); TS. Hà Văn Sinh – Trung tâm Anh ngữ PTC (Nha Trang); Dr. Finita Dewi – Universitas Pendidikan Indonesia (Indonesia); Dr. Michael Burri – Đại học Wollongong (Úc)`
  - `Nhà tài trợ:` `IEC Group, RELO (Bộ Ngoại giao Hoa Kỳ), National Geographic Learning, CDIMEX, MM Publications, Oxford University Press, Cambridge University Press, FAHASA, Du Học VISA, Macmillan Education, Đại học Y Dược Cần Thơ`

### Kết luận 2026
- `2026`
- `Mekong TESOL lần 5`
- `Hướng tới 1.000+ đại biểu`
- `— quy mô lớn nhất từ trước đến nay`

---

## Section `#goitaitro`
**Nơi hiển thị**: các gói tài trợ + bảng so sánh + hình thức đóng góp

- Title: `Gói tài trợ theo cấp độ`

### Gói GOLD
- `GOLD` · `Tài trợ Vàng` · `30.000.000 VNĐ` · `Giới hạn: 03 đơn vị`
- `Vị trí nổi bật nhất — Logo trung tâm, quyền lợi tối đa`
- CTA: `Gửi email đề xuất gói Gold` (mailto subject: `Đề xuất tài trợ Vàng - Mekong TESOL 2026`)

### Gói SILVER
- `SILVER` · `Tài trợ Bạc` · `25.000.000 VNĐ` · `Giới hạn: 03 đơn vị`
- `Cân bằng giữa hiện diện và chi phí`
- CTA: `Gửi email đề xuất gói Silver` (mailto subject: `Đề xuất tài trợ Bạc - Mekong TESOL 2026`)

### Gói BRONZE
- `BRONZE` · `Tài trợ Đồng` · `20.000.000 VNĐ` · `Giới hạn: 04 đơn vị`
- `Điểm khởi đầu lý tưởng cho doanh nghiệp`
- CTA: `Gửi email đề xuất gói Bronze` (mailto subject: `Đề xuất tài trợ Đồng - Mekong TESOL 2026`)

### Gói ĐỒNG HÀNH
- `ĐỒNG HÀNH` · `Gói Đồng hành` · `8.000.000 VNĐ` · `Số lượng: Không giới hạn`
- `Phù hợp ngân sách tối ưu — tập trung tương tác trực tiếp`
- CTA: `Trao đổi gói Đồng hành` (mailto subject: `Đề xuất gói Đồng hành - Mekong TESOL 2026`)

### Gói HỌC THUẬT
- `HỌC THUẬT` · `Tài trợ Học thuật` · `Linh hoạt` · `Theo hình thức thỏa thuận`
- `Gắn thương hiệu với giá trị chuyên môn — ghi nhận đóng góp học thuật`
- CTA: `Trao đổi tài trợ học thuật` (mailto subject: `Đề xuất tài trợ học thuật - Mekong TESOL 2026`)

### Hình thức đóng góp tài trợ
- Tiêu đề: `Hình thức đóng góp tài trợ`
- Intro: `Ban Tổ Chức Hội nghị Quốc tế Mekong TESOL lần thứ 5 trân trọng xây dựng các hình thức tài trợ linh hoạt nhằm giúp Quý Đối Tác lựa chọn phương án đồng hành phù hợp với mục tiêu thương hiệu, ngân sách và chiến lược phát triển, đồng thối cùng Ban Tổ Chức tạo nên một sự kiện học thuật quốc tế chất lượng và giàu giá trị kết nối.`
- `Cash`
  - `Đóng góp tài trợ bằng tiền mặt theo gói hoặc theo hạng mục được thống nhất với Ban Tổ chức.`
- `Cash + In-kind`
  - `Kết hợp tài trợ tiền mặt và học liệu/giải thưởng/giấy phép sử dụng sản phẩm để tăng hiệu quả hiện diện.`
- `In-kind`
  - `Tài trợ học liệu (sách, học liệu, tài khoản học tập, bản quyền phần mềm), quà tặng hoặc giải thưởng theo nhu cầu chuyên môn.`

---

## Section `#timgoi`
**Nơi hiển thị**: module “Cân nhắc gói tài trợ phù hợp”

- Title: `Cân nhắc gói tài trợ phù hợp`

### (1) Ngân sách
- `1. Ngân sách dự kiến của Quý Đối tác?`
- `VNĐ`
- Mốc slider: `8 triệu` · `20 triệu` · `30 triệu`

### (2) Mục tiêu ưu tiên
- `2. Mục tiêu ưu tiên của Quý Đối tác?`
- Options:
  - `Hiện diện thương hiệu`
  - `Kết nối người tham dự`
  - `Gắn kết học thuật`
  - `Mở rộng mạng lưới`

### (3) Lĩnh vực
- `3. Quý Đối tác thuộc lĩnh vực nào?`
- Options:
  - `NXB / Học liệu`
  - `EdTech / AI`
  - `Du học / Tư vấn`
  - `Đối tác học thuật`

### Kết quả gợi ý
- `Gói tham chiếu`
- Title button: `Gửi email trao đổi về gói tham chiếu`
- Ghi chú:
  - `Ngân sách và mục tiêu ưu tiên được tổng hợp để đưa ra gợi ý tham chiếu.`
  - `Ban Tổ chức trân trọng sẵn sàng trao đổi để thống nhất phương án phù hợp nhu cầu cụ thể.`

---

## Section `#keynote`
**Nơi hiển thị**: “Diễn giả chính (Keynote Speakers)”

- Title: `Diễn giả chính (Keynote Speakers)`
- Sub: `Danh sách dự kiến`

- `GS. Rob Waring` — `Notre Dame Seishin Women’s University, Japan`
- `GS. Ika Lestari Damayanti` — `Universitas Pendidikan Indonesia, Indonesia`
- `PGS.TS Phạm Thị Hồng Nhung` — `Hiệu trưởng ĐH Ngoại ngữ Huế`
- `Speaker của RELO` — `United States Department of State`

---

## Section `#chuongtrinh`
**Nơi hiển thị**: agenda có nút “Xem toàn bộ lịch trình” / “Thu gọn”

- Title: `Chương trình dự kiến (19/7/2026)`
- Sub: `Lịch trình chi tiết từ 07:30 đến 17:30`
- Button:
  - `Xem toàn bộ lịch trình`
  - `Thu gọn`

---

## Section `#hinhanh`
**Nơi hiển thị**: gallery carousel

- Title: `Hình ảnh Mekong TESOL các kỳ trước`
- Sub: `Khoảnh khắc đáng nhớ từ kỳ hội nghị Mekong TESOL lần 3 năm 2023`
- Nút điều hướng (desktop):
  - `Ảnh trước`
  - `Ảnh tiếp theo`

---

## Section `#lienhe`
**Nơi hiển thị**: liên hệ + CTA gửi email

- Title: `Liên hệ Ban Tổ chức`
- Paragraph 1: `Thay mặt Ban Tổ chức Hội nghị, chúng tôi xin trân trọng gửi lời cảm ơn sâu sắc đến Quý Cơ quan và Quý Đối tác đã dành thởi gian quan tâm và xem xét Hồ sơ mời tài trợ.`
- Paragraph 2: `Với sự đồng hành của Quý Đối tác, Hội nghị sẽ không chỉ là một diễn đàn học thuật uy tín mà còn là nơi khẳng định sự kết nối chặt chẽ giữa cộng đồng giáo dục, doanh nghiệp và các tổ chức quốc tế.`

### Thông tin liên hệ
- `Thông tin liên hệ`
- `Email`:
  - `mekongtesol@gmail.com | info.mekongtesol.vn`
- `Zalo`:
  - `0939 808 769`

### Gửi đề xuất tài trợ
- Title: `Gửi đề xuất tài trợ`
- Body: `Quý Đối tác vui lòng gửi email với thông tin cơ bản: đơn vị, lĩnh vực, mức ngân sách dự kiến và hình thức đồng hành quan tâm.`
- Button: `Gửi email đề xuất tài trợ` (mailto subject: `Đề xuất tài trợ - Mekong TESOL 2026`)
- Note: `Ban Tổ chức sẽ chủ động liên hệ với Quý Đối tác sau 14 ngày kể từ ngày gửi Hồ sơ mời tài trợ.`

---

## Footer
**Nơi hiển thị**: chân trang

- `MEKONG TESOL 2026`
- `HỒ SƠ MỜI TÀI TRỢ`
- `Hội nghị Quốc tế MEKONG TESOL Lần 5 – 2026`
- `“Beyond Language: Re-Empowering Learners through Skills, Emotions, and Connections”`
- Đoạn mô tả:
  - `Một diễn đàn học thuật quy mô quốc tế tại Đồng bằng Sông Cửu Long, kết nối cộng đồng giáo viên, giảng viên, chuyên gia và tổ chức giáo dục. Chúng tôi trân trọng mời Quý Đối tác đồng hành để lan tỏa đổi mới và tạo dấu ấn thương hiệu bền vững.`

### Menu footer
- `Thư mời tài trợ`
- `Vì sao nên đồng hành`
- `Quy mô & đối tượng tham dự`
- `Gói tài trợ`
- `Timeline & chương trình`
- `Diễn giả chính`
- `Hình ảnh các kỳ trước`
- `Liên hệ`

### Liên hệ footer
- `Đầu mối phụ trách tài trợ`
- `Ms. Võ Lê Uyển Nhi`
- `Zalo: 085 3728350`
- `Website: mekongtesol.vn`
- `Fanpage: https://www.facebook.com/mekongtesol`
- `Email: info@mekongtesol.vn | mekongtesol@gmail.com`

### Copyright
- `© 2026 Mekong TESOL International Conference · Cần Thơ`
- `Đơn vị tổ chức: Trung tâm Anh ngữ Gia Việt · Sở GD&ĐT TP. Cần Thơ`
- `Ngày phát hành hồ sơ: 06/02/2026 · Phiên bản: v1.0`

---

## Ghi chú quan trọng
- Nội dung file này hiện được đồng bộ theo `components/DocumentPagePremium.jsx` (trang `/` — `http://localhost:3000/`).
- Nếu sau này bạn muốn file `.md` này làm nguồn riêng cho trang `/hosomoitaitro` (thư mời), nói mình biết để tách file hoặc đổi cấu trúc.
