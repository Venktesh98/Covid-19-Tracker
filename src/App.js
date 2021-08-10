import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import {
  fetchAllCovidData,
  fetchAllCountries,
} from "./components/Services/useAxios";
import CardInfo from "./components/UI/Cards/CardInfo";
import Countries from "./components/UI/DropDown/Countries";

function App() {
  const [covidStatus, setCovidStatus] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // grabs all covid-19 Data worldwide
    fetchAllCovidData()
      .then((response) => {
        console.log("Response:", response.data);
        setCovidStatus(response?.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });

    // grabs all countries around worldwide
    fetchAllCountries()
      .then((response) => {
        console.log("Country:", response);
        setCountries(response.data.countries);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return (
    <div className={styles.main}>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/covid.png"}
          className={styles.covidImage}
        />
      </div>
      <CardInfo covidStatus={covidStatus} />
      <Countries countries={countries} />
    </div>
  );
}

export default App;
