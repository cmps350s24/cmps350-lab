import "./globals.css";

export const metadata = {
  title: "Super Bank",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
