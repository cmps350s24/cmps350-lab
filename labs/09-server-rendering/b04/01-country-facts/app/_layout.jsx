import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Country Facts",
  description: "",
};

export default async function RootLayout({ children }) {
  const res = await fetch(`https://restcountries.com/v3.1/all?fields=region`);
  let data = [];
  if (res.ok) {
    data = await res.json();
  }

  const regions = data
    .map((obj) => obj.region)
    .filter((obj) => obj !== "Antarctic")
    .filter((str, ind, arr) => arr.indexOf(str) === ind)
    .sort();

  return (
    <html lang="en">
      <body className="p-5  dark:bg-black  dark:text-white">
        <header>
          <Link href="/">🏠</Link>
        </header>
        <main>
          <nav>
            <ul className="flex gap-x-2 text-xl">
              {regions.map((region) => (
                <li key={region}>
                  <Link className="hover:underline" href={`/${region}`}>
                    {region}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {children}
        </main>
        <footer></footer>
      </body>
    </html>
  );
}
