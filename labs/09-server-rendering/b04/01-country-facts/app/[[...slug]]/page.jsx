import Link from "next/link";

export default async function Page({ params }) {
  const { slug } = params;
  const region = slug && slug[0] ? decodeURI(slug[0]) : null;
  const subregion = slug && slug[1] ? decodeURI(slug[1]) : null;
  const country = slug && slug[2] ? decodeURI(slug[2]) : null;

  const res = await fetch(`https://restcountries.com/v3.1/all`);
  let data = [];
  if (res.ok) {
    data = await res.json();
  }

  const regions = data
    .filter((obj) => obj.region !== "Antarctic")
    .map((obj) => obj.region)
    .filter((str, ind, arr) => arr.indexOf(str) === ind)
    .sort();

  const subregions = data
    .filter((obj) => obj.region !== "Antarctic")
    .filter((obj) => obj.region === region)
    .map((obj) => obj.subregion)
    .filter((str, ind, arr) => arr.indexOf(str) === ind)
    .sort();

  const countries = data
    .filter((obj) => obj.region !== "Antarctic")
    .filter((obj) => obj.region === region && obj.subregion === subregion)
    .map((obj) => obj.name.common)
    .filter((str, ind, arr) => arr.indexOf(str) === ind)
    .sort();

  const facts = data.filter((obj) => obj.name.common === country)[0];

  return (
    <>
      {/* {JSON.stringify(params)} */}
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
          {region && (
            <ul className="flex flex-wrap gap-x-2 text-lg">
              {subregions.map((subregion) => (
                <li key={subregion}>
                  <Link
                    className="hover:underline"
                    href={`/${region}/${subregion}`}
                  >
                    {subregion}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {subregion && (
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
          )}
        </nav>
        {country && (
          <div className="mt-6 flex flex-col gap-y-6">
            <h2 className="text-2xl font-medium">
              Facts about {country} {facts.flag}
            </h2>
            <img className="max-w-[400px]" src={facts.flags.svg} />
            <table className="[&_th]:font-semibold [&_*]:text-left">
              <tbody>
                <tr>
                  <th>Official Name</th>
                  <td>{facts.name.official}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </main>
      <footer></footer>
    </>
  );
}

export async function generateStaticParams() {
  const res = await fetch(
    `https://restcountries.com/v3.1/all?fields=region,subregion,name`
  );
  let data = [];
  if (res.ok) {
    data = await res.json();
  }
  return data
    .filter((obj) => obj.region !== "Antarctic")
    .map((obj) => ({
      region: obj.region,
      // subregion: obj.subregion,
      // country: obj.name.common,
    }));
}
