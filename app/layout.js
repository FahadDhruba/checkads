import "./globals.css";

export const metadata = {
  title: "Check Ads",
  description: "Just another app to check google ads",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8627748653559278" crossorigin="anonymous"></script>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
