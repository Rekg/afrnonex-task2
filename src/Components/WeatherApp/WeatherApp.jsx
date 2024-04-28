import React, { useState } from "react";
import search from "../../Search/Search";
import "./WeatherApp.css";
import search_icon from "../Assets/search.png";

import cloud_icon from "../Assets/cloud.png";

import Humidity from "../Humidity/Humidity";
import Windspeed from "../Windspeed/Windspeed";
import Location from "../Location/Location";
import Temperature from "../Temperature/Temperature";
import Errormessage from "../Error/Errormessage";
const WeatherApp = () => {
  const [wicon, setWicon] = useState(cloud_icon);
  const [wdata, setWdata] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const enterkeyPress = (e) => {
    if (e.key == "Enter") search(setWicon, setWdata, searchInput);
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          className="cityInput"
          placeholder="Search a city..."
          onKeyDown={enterkeyPress}
          onChange={handleChange}
        />
        <div
          className="search-icon"
          onClick={() => {
            search(setWicon, setWdata, searchInput);
          }}
        >
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt="" />
      </div>
      {wdata !== null && wdata.cod == "404" ? (
        <Errormessage data={wdata} />
      ) : (
        <>
          {wdata && <Temperature data={wdata} />}

          {wdata && <Location data={wdata} />}

          <div className="data-container">
            {wdata && <Humidity data={wdata} />}

            {wdata && <Windspeed data={wdata} />}
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherApp;
