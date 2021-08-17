import { Select, Typography } from "antd";
import React from "react";
import styles from "./Countries.module.css";

function Countries({ countries, setSelectedCountry }) {
  const { Title } = Typography;
  const { Option } = Select;

  const handleSelectedCountryName = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <Title level={4}>Select Country</Title>
      <Select
        defaultValue="Global"
        onChange={(data) => handleSelectedCountryName(data)}
        className={styles.antDropDown}
      >
        {countries.map((country, key) => (
          <Option value={country.name} key={key}>
            {country.name}
          </Option>
        ))}
      </Select>
    </div>
  );
}

export default Countries;
