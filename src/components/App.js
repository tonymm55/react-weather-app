/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import "../styles/App.css";
import React from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";

function App({ location, forecasts }) {
  return (
    <div className="forecast">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries forecasts={forecasts} />
    </div>
  );
}

<div>
  <header className="App-header">
    <h1>Weather App</h1>
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      My Weather Application
    </a>
  </header>
</div>;

export default App;
