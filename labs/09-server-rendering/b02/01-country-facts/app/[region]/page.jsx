export default function Page() {
  return "Pick a subregion";
}

export async function generateStaticParams() {
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

  return regions.map((region) => ({
    region,
  }));
}
