import "./globals.css";

export const metadata = {
  title: "Project Tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
