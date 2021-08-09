import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import axios from "axios";
import CardDisplay from "./CardDisplay";
import styles from "./CardInfo.module.css";
import { Row } from "antd";

function ShowCard() {
  const [covidStatus, setCovidStatus] = useState("");
  const [active, setActive] = useState("");

  useEffect(() => {
    axios
      .get("https://covid19.mathdro.id/api")
      .then((response) => {
        console.log("Response:", response.data);
        setCovidStatus(response?.data);
        setActive("active");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  // object Destructuring
  const { confirmed, recovered, deaths } = covidStatus;

  // const handleActiveCases = () => {
  //   const totalActiveCases =
  //     confirmed?.value - recovered?.value - deaths?.value;
  //   console.log("Totaal:", totalActiveCases);
  //   // setActiveCases(totalActiveCases);
  // };

  const displayCardByCriteria = () => {
    let keyNames = Object.keys(covidStatus);

    const totalActiveCases = {
      value: confirmed?.value - recovered?.value - deaths?.value,
    };

    let newKeyNames = [...keyNames, active];

    return newKeyNames.map((keyName, index) => {
      if (keyName === "confirmed") {
        return (
          <CardDisplay
            key={index}
            title="Infected"
            covidStatus={confirmed?.value}
            covidStatusClassName={keyName}
            message="Total Infected Cases of Covid-19 Currently"
          />
        );
      }

      if (keyName === "recovered") {
        return (
          <CardDisplay
            key={index}
            title="Recovered"
            covidStatus={recovered?.value}
            covidStatusClassName={keyName}
            message="Total Recovered Cases of Covid-19 Currently"
          />
        );
      }

      if (keyName === "deaths") {
        return (
          <CardDisplay
            key={index}
            title="Deaths"
            covidStatus={deaths?.value}
            covidStatusClassName={keyName}
            message="Total Deaths of Covid-19 Currently"
          />
        );
      }

      if (keyName === "active") {
        return (
          <CardDisplay
            key={index}
            title="Active"
            covidStatus={totalActiveCases?.value}
            covidStatusClassName={keyName}
            message="Total Active Cases of Covid-19 Currently"
          />
        );
      }
    });
  };

  // const returnTotalConfirmedData = () => {
  //   return confirmedData?.map((confirmedTotalCases, index) => {
  //     if (confirmedData.length - 1 === index) {
  //       console.log("In IF:", confirmedTotalCases.confirmed.total);
  //       return confirmedTotalCases.confirmed.total;
  //     }
  //     // console.log("Demo:",confirmedTotalCases.confirmed.total);
  //   });
  // };

  return (
    <div className={styles.cardBgColor}>
      <Row justify="center">{displayCardByCriteria()}</Row>
      {/* <CardDisplay infectedData={infectedData} /> */}
    </div>
  );
}

export default ShowCard;
