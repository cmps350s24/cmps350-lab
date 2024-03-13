document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  let data = [];
  if (response.ok) {
    data = await response.json();
  }
  console.log(data);
});
