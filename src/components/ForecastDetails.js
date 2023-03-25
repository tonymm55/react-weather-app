import React from "react";

function ForecastDetails(props) {
  const { date, temperature, humidity, wind } = props;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__maxTemperature">
        Max Temperature: {temperature.max} &deg;C
      </div>
      <div className="forecast-details__minTemperature">
        Min Temperature: {temperature.min}&deg;C
      </div>
      <div className="forecast-details__humidity">Humidity: {humidity}%</div>
      <div className="forecast-details__wind">
        Wind Speed: {wind.speed}mph {wind.direction}
      </div>
    </div>
  );
}

export default ForecastDetails;
