/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";

import "../styles/App.css";

function App({ location, forecasts }) {
  return (
    <div className="weather-app">
      <div className="forecast">
        <LocationDetails city={location.city} country={location.country} />
        <ForecastSummaries forecasts={forecasts} />
      </div>
    </div>
  );
}

export default App;
