document.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  let data;
  if (res.ok) {
    data = await res.json();
  }
  console.log(data);

  data.forEach((country) => {
    const countryDiv = document.createElement("div");
    countryDiv.innerHTML = country.cca3;
    document.querySelector("#facts").appendChild(countryDiv);
  });
});
