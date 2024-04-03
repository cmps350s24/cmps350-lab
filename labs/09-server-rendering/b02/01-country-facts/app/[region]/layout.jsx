import Link from "next/link";
export default async function Layout({ children, params }) {
  const region = decodeURI(params.region);
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=subregion,region"
  );
  let data = [];
  if (res.ok) {
    data = await res.json();
  }
  const subregions = data
    .filter((obj) => obj.region === region)
    .map((obj) => (obj.subregion ? obj.subregion : "..."))
    .sort()
    .filter((subregion, index, array) => array.indexOf(subregion) === index);

  return (
    <section>
      <div className="mt-1 flex flex-wrap gap-x-2 text">
        {subregions.map((subregion) => (
          <Link key={subregions} href={`/${region}/${subregion}`}>
            {subregion}
          </Link>
        ))}
      </div>
      {children}
    </section>
  );
}
