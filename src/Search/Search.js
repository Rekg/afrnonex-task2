import clear_icon from "../Components/Assets/clear.png";
import cloud_icon from "../Components/Assets/cloud.png";
import drizzle_icon from "../Components/Assets/drizzle.png";
import rain_icon from "../Components/Assets/rain.png";
import snow_icon from "../Components/Assets/snow.png";

const search = async (setWicon, setWdata, searchInput) => {
  if (searchInput === "") {
    return 0;
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${process.env.REACT_APP_API_KEY}`;
  let response = await fetch(url);
  let data = await response.json();
  setWdata(data);

  if (data.weather) {
    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWicon(clear_icon);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWicon(cloud_icon);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setWicon(drizzle_icon);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setWicon(drizzle_icon);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWicon(rain_icon);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10d"
    ) {
      setWicon(rain_icon);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13d"
    ) {
      setWicon(snow_icon);
    } else {
      setWicon(clear_icon);
    }
  }
};
export default search;
