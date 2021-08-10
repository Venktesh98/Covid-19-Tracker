import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import axios from "axios";
import CardDisplay from "./CardDisplay";
import styles from "./CardInfo.module.css";
import { Row } from "antd";

function CardInfo({ covidStatus }) {
  console.log("covidStatus:", covidStatus);
  // object Destructuring
  const { confirmed, recovered, deaths } = covidStatus;

  // Old Way of Displaying Data
  // const displayCardByCriteria = () => {
  //   let keyNames = Object.keys(covidStatus);

  //   const totalActiveCases = {
  //     value: confirmed?.value - recovered?.value - deaths?.value,
  //   };

  //   let newKeyNames = [...keyNames, active];

  //   return newKeyNames.map((keyName, index) => {
  //     if (keyName === "confirmed") {
  //       return (
  //         <CardDisplay
  //           key={index}
  //           title="Infected"
  //           covidStatus={confirmed?.value}
  //           covidStatusClassName={keyName}
  //           message="Total Infected Cases of Covid-19 Currently"
  //         />
  //       );
  //     }

  //     if (keyName === "recovered") {
  //       return (
  //         <CardDisplay
  //           key={index}
  //           title="Recovered"
  //           covidStatus={recovered?.value}
  //           covidStatusClassName={keyName}
  //           message="Total Recovered Cases of Covid-19 Currently"
  //         />
  //       );
  //     }

  //     if (keyName === "deaths") {
  //       return (
  //         <CardDisplay
  //           key={index}
  //           title="Deaths"
  //           covidStatus={deaths?.value}
  //           covidStatusClassName={keyName}
  //           message="Total Deaths of Covid-19 Currently"
  //         />
  //       );
  //     }

  //     if (keyName === "active") {
  //       return (
  //         <CardDisplay
  //           key={index}
  //           title="Active"
  //           covidStatus={totalActiveCases?.value}
  //           covidStatusClassName={keyName}
  //           message="Total Active Cases of Covid-19 Currently"
  //         />
  //       );
  //     }
  //   });
  // };

  const displayCardByCriteria = () => {
    const totalActiveCases = {
      value: confirmed?.value - recovered?.value - deaths?.value,
    };

    return (
      <>
        <CardDisplay
          title="Infected"
          covidStatus={confirmed?.value}
          covidStatusClassName={styles.confirmed}
          message="Total Infected Cases of Covid-19 Currently"
        />
        ,
        <CardDisplay
          title="Recovered"
          covidStatus={recovered?.value}
          covidStatusClassName={"recovered"}
          message="Total Recovered Cases of Covid-19 Currently"
        />
        ,
        <CardDisplay
          title="Deaths"
          covidStatus={deaths?.value}
          covidStatusClassName={"deaths"}
          message="Total Deaths of Covid-19 Currently"
        />
        ,
        <CardDisplay
          title="Active"
          covidStatus={totalActiveCases?.value}
          covidStatusClassName={"active"}
          message="Total Active Cases of Covid-19 Currently"
        />
      </>
    );
  };

  return (
    <div className={styles.cardBgColor}>
      <Row justify="center">{displayCardByCriteria()}</Row>
    </div>
  );
}

export default CardInfo;
