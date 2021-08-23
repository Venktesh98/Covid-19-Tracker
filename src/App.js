import { Typography } from "antd";
import { Footer } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import { HeartFilled } from "@ant-design/icons";
import {
  fetchAllCovidData,
  fetchAllCountries,
} from "./components/Services/useAxios";
import CardInfo from "./components/UI/Cards/CardInfo";
import ChartDisplay from "./components/UI/Charts/ChartDisplay";
import Countries from "./components/UI/DropDown/Countries";

function App() {
  const [covidStatus, setCovidStatus] = useState("");
  const [countries, setCountries] = useState([]);
  const [activeCases, setActiveCases] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryWiseData, setCountryWiseData] = useState("");

  const { Title } = Typography;

  useEffect(() => {
    // grabs all covid-19 Data worldwide
    fetchAllCovidData()
      .then((response) => {
        setCovidStatus(response?.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });

    // grabs all countries around worldwide
    fetchAllCountries()
      .then((response) => {
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
          alt="Corona banner img"
        />
      </div>
      <CardInfo
        covidStatus={covidStatus}
        setActiveData={setActiveCases}
        countryWiseData={countryWiseData}
      />
      <Countries
        countries={countries}
        setSelectedCountry={setSelectedCountry}
      />
      <ChartDisplay
        covidStatus={covidStatus}
        activeCasesData={activeCases}
        selectedCountry={selectedCountry}
        setCountryWiseData={setCountryWiseData}
        countryWiseData={countryWiseData}
      />
      <div className={styles.creatorTagline}>
        <div>Created with <HeartFilled style={{ color: "red", margin: "0 2px" }} /> by</div>
        <span className={styles.name}>Venktesh Soma</span>
      </div>
      <Footer style={{ backgroundColor: "rgba(249,255,227,1)" }}>
        <Title level={5}>
          Data Provided by
          <a href="https://covid19.mathdro.id/api">@Mathdroid</a>
        </Title>
      </Footer>
    </div>
  );
}

export default App;
