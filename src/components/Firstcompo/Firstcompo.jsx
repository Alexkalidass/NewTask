import React from "react";
import { Chart } from "react-google-charts";
import "./Firstcompo.css";

const data = [
  ["day", "Sales", "Expenses"],
  ["Sat", 4000, 3990],
  ["Sun", 4999, 4100],
  ["Mon", 4600, 2500],
  ["Tues", 3100, 3100],
];

const options = {
  title: "Saving Summary",
  hAxis: { title: "", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "50%", height: "70%" },
};

const Firstcompo = () => {
  return (
    <div className="map-container">
      <div className="box">
        <Chart
          chartType="AreaChart"
          width="100%"
          height="300px"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default Firstcompo;
