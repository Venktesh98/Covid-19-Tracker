import React from "react";
import styles from "./ChartDisplay.module.css";
import { Doughnut } from "react-chartjs-2";
import { colors } from "../../Services/colors";

function ChartDisplay({ covidStatus, activeCasesData }) {
  console.log("In Chart");
  const { confirmed, recovered, deaths } = covidStatus;

  const data = {
    labels: ["Infected", "Recovered", "Deaths", "Active"],
    datasets: [
      {
        // label: "# of Votes",
        data: [
          confirmed?.value,
          recovered?.value,
          deaths?.value,
          activeCasesData,
        ],
        backgroundColor: colors.bgColors,
        borderColor: colors.borderColors,
      },
    ],
  };

  return (
    <div className={styles.doughnutContainer}>
      <div className={styles.doughnut}>
        <Doughnut
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: true,
          }}
        />
        {/* <div className={styles.coronaImageContainer}>
          <img src={process.env.PUBLIC_URL + "/corona.jpg"} className={styles.coronaImage} />
        </div> */}
      </div>
    </div>
  );
}

export default ChartDisplay;
