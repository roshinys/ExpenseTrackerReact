import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const values = props.dataPoints.map((datapoint) => {
    return datapoint.value;
  });
  const maxValue = Math.max(...values);
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => {
        return (
          <ChartBar
            key={datapoint.label}
            value={datapoint.value}
            maxValue={maxValue}
            label={datapoint.label}
          />
        );
      })}
    </div>
  );
}

export default Chart;
