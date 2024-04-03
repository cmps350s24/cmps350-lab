export default async function Home({ params }) {
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
      subregion: obj.subregion,
      country: obj.name.common,
    }));
}
