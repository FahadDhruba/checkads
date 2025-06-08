import "./globals.css";

export const metadata = {
  title: "Check Ads",
  description: "Just another app to check google ads",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
