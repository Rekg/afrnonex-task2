import React from "react";
import wind_icon from "../Assets/wind.png";
import "./Windspeed.css";
function Windspeed({ data, wind_icon }) {
  return (
    <div className="element">
      <img src={wind_icon} alt="" className="icon" />
      <div className="data">
        <div className="wind-rate">
          <div>{data.wind.speed} km/hr</div>
        </div>
        <div className="text">Wind Speed</div>
      </div>
    </div>
  );
}

export default Windspeed;
