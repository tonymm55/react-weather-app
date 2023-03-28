import React, { useState, useEffect } from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import getForecast from "../requests/getForecast";

import "../styles/App.css";

// App Component changed from the track default
function App() {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate,
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };
  console.log("selectedDate", selectedForecast);

  useEffect(() => {
    getForecast(setSelectedDate, setForecasts, setLocation);
  }, []);

  return (
    <div className="weather-app">
      <div className="location-details">
        <LocationDetails city={location.city} country={location.country} />
      </div>
      <div className="foreast-summaries">
        <ForecastSummaries
          forecasts={forecasts}
          onForecastSelect={handleForecastSelect}
        />
      </div>
      <div className="forecast-details">
        {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
      </div>
    </div>
  );
}

export default App;
