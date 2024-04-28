import React, { useState } from "react";
import search from "../../Search/Search";
import "./WeatherApp.css";
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";
import Humidity from "../Humidity/Humidity";
import Windspeed from "../Windspeed/Windspeed";
import Location from "../Location/Location";
import Temperature from "../Temperature/Temperature";
import Errormessage from "../Error/Errormessage";
const WeatherApp = () => {
  // let api_key = "9c87ad109a27039d01f550bc901ddce8";
  const [wicon, setWicon] = useState(cloud_icon);
  const [wdata, setWdata] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  // const search = async () => {
  //   const element = document.getElementsByClassName("cityInput");
  //   if (element[0].value === "") {
  //     return 0;
  //   }
  //   let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}`;
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   setWdata(data);
  //   // const humidity = document.getElementsByClassName("humidity-percent");
  //   // console.log(data);

  //   // const wind = document.getElementsByClassName("wind-rate");
  //   // const temprature = document.getElementsByClassName("weather-temp");
  //   // const location = document.getElementsByClassName("weather-location");
  //   // humidity[0].innerHTML = data.main.humidity + "%";

  //   //wind[0].innerHTML = data.wind.speed + "km/hr";
  //   //temprature[0].innerHTML = data.main.temp - 273.15 + "c";
  //   //console.log("temp: " + Number(temprature[0].innerHTML).toFixed(2));
  //   //location[0].innerHTML = data.name;
  //   if (data.weather) {
  //     if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
  //       setWicon(clear_icon);
  //     } else if (
  //       data.weather[0].icon === "02d" ||
  //       data.weather[0].icon === "02n"
  //     ) {
  //       setWicon(cloud_icon);
  //     } else if (
  //       data.weather[0].icon === "03d" ||
  //       data.weather[0].icon === "03n"
  //     ) {
  //       setWicon(drizzle_icon);
  //     } else if (
  //       data.weather[0].icon === "04d" ||
  //       data.weather[0].icon === "04n"
  //     ) {
  //       setWicon(drizzle_icon);
  //     } else if (
  //       data.weather[0].icon === "09d" ||
  //       data.weather[0].icon === "09n"
  //     ) {
  //       setWicon(rain_icon);
  //     } else if (
  //       data.weather[0].icon === "10d" ||
  //       data.weather[0].icon === "10d"
  //     ) {
  //       setWicon(rain_icon);
  //     } else if (
  //       data.weather[0].icon === "13d" ||
  //       data.weather[0].icon === "13d"
  //     ) {
  //       setWicon(snow_icon);
  //     } else {
  //       setWicon(clear_icon);
  //     }
  //   }
  // };

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
          {/* <div className="weather-temp">
        {wdata && <Temperature data={wdata} />}
      </div> */}
          {wdata && <Temperature data={wdata} />}
          {/* <div className="weather-location"> */}
          {wdata && <Location data={wdata} />}
          {/* </div> */}
          <div className="data-container">
            {/* <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent"> */}
            {wdata && <Humidity data={wdata} />}
            {/* </div>
            <div className="text">Humidity</div>
          </div>
        </div> */}
            {/* <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate"> */}
            {wdata && <Windspeed data={wdata} />}
            {/* </div>
            <div className="text">Wind Speed</div>
          </div>
        </div> */}
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherApp;
