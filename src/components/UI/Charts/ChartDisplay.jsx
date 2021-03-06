import React from "react";
import styles from "./ChartDisplay.module.css";
import { Doughnut } from "react-chartjs-2";
import { colors } from "../../helpers/colors";
import { Typography } from "antd";
import CountryChart from "./CountryChart";

function ChartDisplay({
  covidStatus,
  activeCasesData,
  selectedCountry,
  setCountryWiseData,
  countryWiseData,
}) {
  const { Title } = Typography;
  console.log("In Chart", covidStatus);
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
    <div className={styles.graphContainer}>
      {selectedCountry ? (
        <CountryChart
          countryName={selectedCountry}
          setCountryWiseData={setCountryWiseData}
          countryWiseData={countryWiseData}
        />
      ) : (
        <div className={styles.doughnut}>
          <Doughnut
            data={data}
            options={{
              responsive: true,
              maintainAspectRatio: true,
            }}
          />
          <Title level={5} /* style={{ marginBottom: "-40%" }} */>
            Worldwide Covid-19 Data
          </Title>
          <div className={styles.coronaImageContainer}>
            <img
              src={process.env.PUBLIC_URL + "/corona.png"}
              className={styles.coronaImage}
              alt="corona img"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ChartDisplay;
