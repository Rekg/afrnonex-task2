import React from "react";
import "./Temperature.css";
function Temperature({ data }) {
  return (
    <div className="weather-temp">
      <div>{(data.main.temp - 273.15).toFixed(2)} ℃</div>
    </div>
  );
}

export default Temperature;
