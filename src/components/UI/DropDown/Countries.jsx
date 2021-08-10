import { Button, Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import styles from "./Countries.module.css";

function Countries({ countries }) {
  console.log("countries:", countries);
  const handleMenuClick = (data) => {
    console.log("Data:", data);
  };

  const menu = (
    <Menu className={styles.menuItem}>
      {countries.map((country, key) => (
        <Menu.Item key={key} onClick={() => handleMenuClick(country.name)}>
          {country.name}
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <div>
      <Dropdown overlay={menu} className={styles.antDropDown}>
        <Button>
          Global <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
}

export default Countries;
