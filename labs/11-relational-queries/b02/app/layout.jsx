import "./globals.css";

export const metadata = {
  title: "SuperBank",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
