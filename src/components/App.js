/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable  no-unused-vars */
import React, { useState } from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

import "../styles/App.css";

// App Component
function App({ location, forecasts }) {
  const [selectedDate, setSelectedDate] = useState(forecasts[0].date);
  const selectedForecast = forecasts.find(forecast => forecasts.date === selectedDate);
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

function handleForecastSelect(date) {
  setSelectedDate(date);
}

export default App;
