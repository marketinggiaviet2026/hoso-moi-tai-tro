# Hồ sơ mời tài trợ Mekong TESOL 2026

Package chứa toàn bộ file liên quan đến trang web hồ sơ mời tài trợ hội nghị Mekong TESOL lần thứ 5 - 2026.

## Cấu trúc thư mục

```
HoSoMoiTaiTro_Package/
├── app/                          # Next.js app router
│   ├── page.jsx                   # Trang chủ (landing page)
│   ├── hosomoitaitro/            # Trang thư mời tài trợ
│   │   └── page.jsx
│   └── layout.jsx                # Layout chính (nếu có)
├── components/                    # React components
│   ├── DocumentPagePremium.jsx   # Component trang chính
│   └── InvitationPage.jsx        # Component thư mời tài trợ
├── public/                       # Static assets
│   ├── images/                   # Hình ảnh
│   │   ├── logo-*.png           # Logos
│   │   ├── gallery/             # Hình ảnh các kỳ trước
│   │   ├── keynote/             # Diễn giả chính
│   │   └── sponsors/            # Logo nhà tài trợ
│   └── styles.css               # Styles (nếu có)
├── package.json                  # Dependencies
├── tailwind.config.js           # Tailwind CSS config
├── next.config.js               # Next.js config
├── postcss.config.js            # PostCSS config
└── Hosomoitaitro_landingpage.md # Nội dung text cho trang
```

## Các trang chính

1. **Trang chủ** (`/`) - Hiển thị đầy đủ thông tin hồ sơ mời tài trợ
2. **Trang thư mời** (`/hosomoitaitro`) - Thư mời tài trợ chi tiết

## Cài đặt và chạy

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Export static
npm run build:export
```

## Nội dung chính

- Thông tin hội nghị Mekong TESOL 2026
- Chủ đề: "Beyond Language: Re-Empowering Learners through Skills, Emotions, and Connections"
- Thời gian: Chủ Nhật, 19/7/2026 (07:30 – 17:30)
- Địa điểm: Hội trường Cửu Long, Đại học Y Dược, Cần Thơ
- Các gói tài trợ: Gold, Silver, Bronze, Đồng hành, Học thuật
- Lịch sử các kỳ hội nghị trước đó

## Chú ý

- File `Hosomoitaitro_landingpage.md` chứa nội dung text đang được sử dụng trên trang
- Các hình ảnh nằm trong thư mục `public/images/`
- Sử dụng Tailwind CSS cho styling
- Framework: Next.js 14 với React 18
