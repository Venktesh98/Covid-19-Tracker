import React from "react";
import styles from "./App.module.css";
import Card from "./components/Cards/CardInfo";

function App() {
  return (
    <div className={styles.main}>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/covid.png"}
          className={styles.covidImage}
        />
      </div>
      <Card />
    </div>
  );
}

export default App;
