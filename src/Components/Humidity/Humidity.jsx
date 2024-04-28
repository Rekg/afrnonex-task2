import React from "react";
import humidity_icon from "../Assets/humidity.png";
import "./Humidity.css";
function Humidity({ data }) {
  return (
    <div className="element">
      <img src={humidity_icon} alt="" className="icon" />
      <div className="data">
        <div className="humidity-percent">
          <div>{data.main.humidity} %</div>
          <div className="text">Humidity</div>
        </div>
      </div>
    </div>
  );
}

export default Humidity;
