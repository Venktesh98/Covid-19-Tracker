import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import CardDisplay from "./CardDisplay";
import { Row } from "antd";

function CardInfo({ covidStatus, setActiveData, countryWiseData }) {
  console.log("covidStatus Fatat:", covidStatus);

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
    // global active cases
    const totalActiveCases = {
      value: confirmed?.value - recovered?.value - deaths?.value,
    };
    setActiveData(totalActiveCases?.value);

    // country wise active cases
    const totalActiveCasesInCountry = {
      value:
        countryWiseData?.confirmed?.value -
        countryWiseData?.recovered?.value -
        countryWiseData?.deaths?.value,
    };

    return (
      <>
        <CardDisplay
          title="Infected"
          covidStatus={
            countryWiseData
              ? countryWiseData?.confirmed?.value
              : confirmed?.value
          }
          message="Total Infected Cases of Covid-19 Currently"
        />
        ,
        <CardDisplay
          title="Recovered"
          covidStatus={
            countryWiseData
              ? countryWiseData?.recovered?.value
              : recovered?.value
          }
          message="Total Recovered Cases of Covid-19 Currently"
        />
        ,
        <CardDisplay
          title="Deaths"
          covidStatus={
            countryWiseData ? countryWiseData?.deaths?.value : deaths?.value
          }
          message="Total Deaths of Covid-19 Currently"
        />
        ,
        <CardDisplay
          title="Active"
          covidStatus={
            countryWiseData
              ? totalActiveCasesInCountry?.value
              : totalActiveCases?.value
          }
          message="Total Active Cases of Covid-19 Currently"
        />
      </>
    );
  };

  return (
    <div>
      <Row justify="center">{displayCardByCriteria()}</Row>
    </div>
  );
}

export default CardInfo;
