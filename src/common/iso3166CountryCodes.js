const countryList = require("country-list");

const COUNTRY_ISO_3166_CODES = countryList.getData().sort((a, b) => {
  const countryA = a.name;
  const countryB = b.name;
  return countryA < countryB ? -1 : countryA > countryB ? 1 : 0;
});

export default COUNTRY_ISO_3166_CODES;
