import React from "react";
import "./Location.css";
function Location({ data }) {
  return (
    <div className="weather-location">
      <div>{data.name}</div>
    </div>
  );
}

export default Location;
