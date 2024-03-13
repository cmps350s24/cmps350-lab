document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  console.log(response);
  let data = [];
  if (response.ok) {
    data = await response.json();
  }
  console.log(data);

  console.log(data.map((country) => country.name.common));

  // fetch("https://restcountries.com/v3.1/all")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data.map((country) => country.name.common));
  //   })
  //   .catch((e) => {})
  //   .finally();
});
