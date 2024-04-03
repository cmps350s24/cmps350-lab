import Link from "next/link";

export default async function Layout({ params, children }) {
  const region = decodeURI(params.region);

  const res = await fetch(
    `https://restcountries.com/v3.1/all?fields=region,subregion`
  );
  let data = [];
  if (res.ok) {
    data = await res.json();
  }

  const subregions = data
    .filter((obj) => obj.region === region)
    .map((obj) => obj.subregion)
    .filter((str, ind, arr) => arr.indexOf(str) === ind)
    .sort();

  return (
    <>
      <nav>
        <ul className="flex flex-wrap gap-x-2 text-lg">
          {subregions.map((sub) => (
            <Link
              key={sub}
              className="hover:underline"
              href={`/${region}/${sub}`}
            >
              {sub}
            </Link>
          ))}
        </ul>
      </nav>
      {children}
    </>
  );
}

export async function generateStaticParams() {
  const res = await fetch(`https://restcountries.com/v3.1/all?fields=region`);
  let data = [];
  if (res.ok) {
    data = await res.json();
  }

  return data
    .map((obj) => obj.region)
    .filter((obj) => obj !== "Antarctic")
    .filter((str, ind, arr) => arr.indexOf(str) === ind)
    .sort()
    .map((region) => ({ region }));
}
