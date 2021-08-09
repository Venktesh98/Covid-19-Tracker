import React from "react";
import moment from "moment";
import { Card, Col, Row } from "antd";
import { Typography } from "antd";
import styles from "./CardDisplay.module.css";
import CountUp from "react-countup";

function CardDisplay({ title, covidStatus, covidStatusClassName, message }) {
  const { Title } = Typography;

  let format = "ddd MMM Do YYYY";
  let timeFormat = " h:mm:ss a";
  let formattedDate = moment().format(format, covidStatus?.lastUpdate);
  let formattedTime = moment().format(timeFormat, covidStatus?.lastUpdate);

  // conditional classNames
  let covidStatusLabel = "";
  if (covidStatusClassName === "confirmed") {
    covidStatusLabel = styles.confirmed;
  }

  if (covidStatusClassName === "recovered") {
    covidStatusLabel = styles.recovered;
  }

  if (covidStatusClassName === "deaths") {
    covidStatusLabel = styles.deaths;
  }

  if (covidStatusClassName === "active") {
    covidStatusLabel = styles.active;
  }

  return (
    <div className={styles["site-card-border-less-wrapper"]}>
      <Col span={8}>
        <Card
          title={title}
          bordered={false}
          style={{ width: 240 }}
          className={covidStatusLabel}
          hoverable
        >
          <div className={styles.cardContent}>
            <Title level={3} className={styles.covidStatusCount}>
              <CountUp duration={5} end={covidStatus} />
              {/* {covidStatus} */}
            </Title>
            <div className={styles.lastUpdated}>Last updated at : </div>
            <div className={styles.date}>{formattedDate}</div>
            <div>{formattedTime}</div>
            <Title level={5}>{message}</Title>
          </div>
        </Card>
      </Col>
    </div>
  );
}

export default CardDisplay;
