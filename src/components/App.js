/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

import "../styles/App.css";

function App({ location, forecasts }) {
  return (
    <div className="weather-app">
      <div className="forecast">
        <LocationDetails city={location.city} country={location.country} />
        <ForecastSummaries forecasts={forecasts} />
      </div>
      <div className="forecast-details">
        <ForecastDetails
          date={forecasts[0].date}
          temperature={forecasts[0].temperature}
          humidity={forecasts[0].humidity}
          wind={forecasts[0].wind}
        />
      </div>
    </div>
  );
}

export default App;
