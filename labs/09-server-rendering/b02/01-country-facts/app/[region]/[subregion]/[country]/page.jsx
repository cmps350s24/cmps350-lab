export default async function Page({ children, params }) {
  const region = decodeURI(params.region);
  const subregion = decodeURI(params.subregion);
  const country = decodeURI(params.country);
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  let data = [];
  if (res.ok) {
    data = await res.json();
  }

  const facts = data[0];

  return (
    <section className="mt-6">
      <img
        className="mb-6 max-w-[400px]"
        src={facts.flags.svg}
        alt={`Flag of ${country}`}
      />
      <table>
        <tbody>
          <tr>
            <th>Official Name</th>
            <td>{facts.name.common}</td>
          </tr>
          <tr>
            <th>Population</th>
            <td>{facts.population}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export async function generateStaticParams() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,subregion,region"
  );
  let data = [];
  if (res.ok) {
    data = await res.json();
  }

  const countries = data
    .map((obj) => ({
      region: obj.region,
      subregion: obj.subregion,
      country: obj.name.common,
    }))
    .filter((obj) => obj.region !== "Antarctic");
  return countries;
}
