import "./globals.css";

export const metadata = {
  title: "Posts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-5 dark:bg-black dark:text-white">{children}</body>
    </html>
  );
}
