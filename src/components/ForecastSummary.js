/* eslint-disable no-console */
import React from "react";
import iconData from "../data/iconData.json";

// forecast summary component
function ForecastSummary({
  date, icon, temperature, description, onSelect,
}) {
  // const { date, icon, temperature, description, onSelect } = props;
  // console.log(icon, description);
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">{formattedDate}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <img src={iconData[icon]} alt="icon" />
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-summary__description">{description}</div>
      <button type="button" onClick={() => onSelect(date)}>
        Click for details
      </button>
    </div>
  );
}

export default ForecastSummary;
