import { Select } from "antd";
import React from "react";
import styles from "./Countries.module.css";

function Countries({ countries, setSelectedCountry }) {
  const { Option } = Select;

  const handleMenuClick = (country) => {
    console.log("country:", country);
    setSelectedCountry(country);
  };

  return (
    <div>
      <Select
        defaultValue="Global"
        onChange={(data) => handleMenuClick(data)}
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
