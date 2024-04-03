import Link from "next/link";
export default async function Layout({ children, params }) {
  const region = decodeURI(params.region);
  const subregion = decodeURI(params.subregion);
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,subregion,region"
  );
  let data = [];
  if (res.ok) {
    data = await res.json();
  }

  const countries = data
    .filter((obj) => obj.region === region && obj.subregion === subregion)
    .map((obj) => obj.name.common)
    .sort()
    .filter((country, index, array) => array.indexOf(country) === index);

  return (
    <section>
      <div className="mt-1 flex flex-wrap gap-x-2 text-sm">
        {countries.map((country) => (
          <Link key={country} href={`/${region}/${subregion}/${country}`}>
            {country}
          </Link>
        ))}
      </div>
      {children}
    </section>
  );
}
