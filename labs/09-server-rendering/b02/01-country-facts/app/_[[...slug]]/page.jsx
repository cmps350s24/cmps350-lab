export default async function Page({ params }) {
  // fetch https://restcountries.com/v3.1/all

  // render region links
  if (region in params) {
    const region = params.region;
    // render subregion links

    if (subregion in params) {
      const subregion = params.subregion;
      // render country links

      if (country in params) {
        const country = params.country;
        // render facts table
      }
    }
  }
}
