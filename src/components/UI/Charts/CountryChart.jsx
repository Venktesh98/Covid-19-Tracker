import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Typography } from "antd";
import { colors } from "../../Services/colors";
import { fetchByCountryName } from "../../Services/useAxios";
import styles from "./CountryChart.module.css";

function CountryChart({ countryName, setCountryWiseData, countryWiseData }) {
  const { Title } = Typography;

  useEffect(() => {
    fetchByCountryName(countryName)
      .then((response) => {
        setCountryWiseData(response?.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
    return () => {};
  }, [countryName]);

  // destructuring according to the cases
  const { confirmed, recovered, deaths } = countryWiseData;
  const totalActiveCasesInCountry = {
    value: confirmed?.value - recovered?.value - deaths?.value,
  };

  const data = {
    labels: ["Infected", "Recovered", "Deaths", "Active"],
    datasets: [
      {
        label: "People",
        data: [
          confirmed?.value,
          recovered?.value,
          deaths?.value,
          totalActiveCasesInCountry.value,
        ],
        backgroundColor: colors.bgColors,
        borderColor: colors.borderColors,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={styles.countryMain}>
      <div className="header">
        <h1 className="title">Country wise Data</h1>
        <div className="links"></div>
      </div>
      <div className={styles.countryWiseData}>
        <Bar data={data} />
      </div>
      <Title level={5} className={styles.tagline}>
        Country Wise Covid-19 Data
      </Title>
    </div>
  );
}

export default CountryChart;
