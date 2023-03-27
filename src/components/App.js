import React, { useState } from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

import "../styles/App.css";

// App Component
function App({ location, forecasts }) {
  const [selectedDate, setSelectedDate] = useState(forecasts[0].date);
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

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
        <ForecastDetails
          // forecast={forecasts[0]}
          date={forecasts[0].date}
          temperature={forecasts[0].temperature}
          humidity={forecasts[0].humidity}
          wind={forecasts[0].wind}
          forecast={selectedForecast}
        />
      </div>
    </div>
  );
}

export default App;

// from track, Walkthrough: Update State & Event Handlers (29)

//   return (
//     <div className="weather-app">
//       <LocationDetails city={location.city} country={location.country} />
//       <ForecastSummaries
//         forecasts={forecasts}
//         onForecastSelect={handleForecastSelect}
//       />
//       <ForecastDetails forecast={selectedForecast} />
//     </div>
//   );
// };
