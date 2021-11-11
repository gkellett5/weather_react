import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    console.log(response.data);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@4x.png`,
      description: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like,
      tempMin: response.data.main.temp_min,
      tempMax: response.data.main.temp_max,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="search for your city..."
        onChange={updateCity}
        className="search-bar"
      />
      <button type="Submit">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <h5>Today's weather in...</h5>
        <h1>{city}</h1>
        <ul className="column">
          <li>
            <img
              src={weather.icon}
              alt={weather.description}
              className="icon"
            />
          </li>
          <ul>
            <li className="description">{weather.description}</li>
            <li className="data">Humidity: {weather.humidity}%</li>
            <li className="data">Wind: {weather.wind}km/h</li>
          </ul>
          <ul>
            <li className="temperature">{Math.round(weather.temperature)}°</li>
            <li className="feels-like">
              Feels like {Math.round(weather.feelsLike)}°
            </li>
            <li className="high-low">
              <span> High {Math.round(weather.tempMax)}° </span> |{" "}
              <span className="low"> Low {Math.round(weather.tempMin)}°</span>
            </li>
          </ul>
        </ul>
        <hr />
      </div>
    );
  } else {
    return form;
  }
}
