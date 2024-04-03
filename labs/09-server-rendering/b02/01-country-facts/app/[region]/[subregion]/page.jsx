export default function Page() {
  return "Pick a country";
}

export async function generateStaticParams() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=subregion,region"
  );
  let data = [];
  if (res.ok) {
    data = await res.json();
  }
  const subregions = data.filter((obj) => obj.region !== "Antarctic");

  return subregions;
}
