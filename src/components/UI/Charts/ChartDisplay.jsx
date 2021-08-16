import React from "react";
import styles from "./ChartDisplay.module.css";
import { Doughnut } from "react-chartjs-2";
import { colors } from "../../Services/colors";
import { Typography } from "antd";
import CountryChart from "./CountryChart";

function ChartDisplay({ covidStatus, activeCasesData, selectedCountry }) {
  const { Title } = Typography;
  console.log("In Chart");
  const { confirmed, recovered, deaths } = covidStatus;

  const data = {
    labels: ["Infected", "Recovered", "Deaths", "Active"],
    datasets: [
      {
        label: "Globally",
        data: [
          confirmed?.value,
          recovered?.value,
          deaths?.value,
          activeCasesData,
        ],
        backgroundColor: colors.bgColors,
        borderColor: colors.borderColors,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={styles.doughnutContainer}>
      {selectedCountry ? (
        <CountryChart countryName={selectedCountry} />
      ) : (
        <div className={styles.doughnut}>
          <Doughnut
            data={data}
            options={{
              responsive: true,
              maintainAspectRatio: true,
            }}
          />
          <Title level={5}>Worldwide Covid-19 Data</Title>
          {/* <div className={styles.coronaImageContainer}>
          <img src={process.env.PUBLIC_URL + "/corona.jpg"} className={styles.coronaImage} />
        </div> */}
        </div>
      )}
    </div>
  );
}

export default ChartDisplay;
