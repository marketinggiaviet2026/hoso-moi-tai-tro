import './globals.css';

export const metadata = {
  title: 'Hồ sơ mời tài trợ - Mekong TESOL lần 5 (2026)',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/assets/print-compact.css" media="print" />
      </head>
      <body>
        {children}
        {/* Temporarily disable app.js to fix hydration error */}
        {/* <script src="/assets/app.js" defer /> */}
      </body>
    </html>
  );
}
