import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Country Facts",
  description: "",
};

export default async function RootLayout({ children }) {
  const res = await fetch("https://restcountries.com/v3.1/all?fields=region");
  let data = [];
  if (res.ok) {
    data = await res.json();
  }
  const regions = data
    .map((obj) => obj.region)
    .sort()
    .filter((region, index, array) => array.indexOf(region) === index)
    .filter((region) => region !== "Antarctic");
  //restcountries.com/v3.1/all
  https: return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white dark:bg-black text-black dark:text-white transition-all`}
      >
        <main className="m-5">
          <div className="flex flex-wrap gap-x-2 text-lg">
            {regions.map((region) => (
              <Link key={region} href={`/${region}`}>
                {region}
              </Link>
            ))}
          </div>
          {/* <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Button
          </button> */}
          {children}
        </main>
      </body>
    </html>
  );
}
