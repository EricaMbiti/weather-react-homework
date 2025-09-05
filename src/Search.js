import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});
  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: "",
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "667d9f573c8af4c33457be5d561a9148";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value); //Will update the city variable
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Please Enter City"
        onChange={updateCity}
      />
      <input type="submit" value="Search" />
    </form>
  );
 let credit = (
    <p>
      Coded by Erica Mbiti,&nbsp;
      <a
        href="https://github.com/EricaMbiti/weather-react-homework"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </p>
  );







  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li> Humidity:{weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
        </ul>
        {credit}
      </div>
    );

  } else {return( 
    <div>
{form}
{credit} </div>
  );
  }
}