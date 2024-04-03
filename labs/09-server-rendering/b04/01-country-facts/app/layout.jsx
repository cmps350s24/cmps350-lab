import "./globals.css";

export const metadata = {
  title: "Country Facts",
  description: "",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-5 dark:bg-black dark:text-white">{children}</body>
    </html>
  );
}
