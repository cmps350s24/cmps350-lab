import Link from "next/link";
export default async function Layout({ params, children }) {
  const region = decodeURI(params.region);
  const subregion = decodeURI(params.subregion);

  const res = await fetch(
    `https://restcountries.com/v3.1/all?fields=region,subregion,name`
  );
  let data = [];
  if (res.ok) {
    data = await res.json();
  }

  const countries = data
    .filter((obj) => obj.region === region && obj.subregion === subregion)
    .map((obj) => obj.name.common)
    .filter((str, ind, arr) => arr.indexOf(str) === ind)
    .sort();

  return (
    <>
      <nav>
        <ul className="flex flex-wrap gap-x-2 text">
          {countries.map((country) => (
            <Link
              className="hover:underline"
              key={country}
              href={`/${region}/${subregion}/${country}`}
            >
              {country}
            </Link>
          ))}
        </ul>
      </nav>
      {children}
    </>
  );
}

export async function generateStaticParams() {
  const res = await fetch(
    `https://restcountries.com/v3.1/all?fields=region,subregion`
  );
  let data = [];
  if (res.ok) {
    data = await res.json();
  }

  return data.filter((obj) => obj.region !== "Antarctic");
}
