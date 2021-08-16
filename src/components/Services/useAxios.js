import axios from "axios";

export const fetchAllCovidData = () => {
  let covidResponse = axios.get("https://covid19.mathdro.id/api");
  return covidResponse;
};

export const fetchAllCountries = () => {
  let countryCovidResponse = axios.get(
    "https://covid19.mathdro.id/api/countries"
  );
  return countryCovidResponse;
};

export const fetchByCountryName = (countryName) => {
  console.log("Frtch:",countryName);
  let countryNameResponse = axios.get(
    `https://covid19.mathdro.id/api/countries/${countryName}`
  );
  return countryNameResponse;
};
