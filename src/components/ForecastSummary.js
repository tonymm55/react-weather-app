import React from "react";

function ForecastSummary(props) {
  const { date, description, icon, temperature } = props;
  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date">{date}</div>;
      <div className="forecast-summary__description">{description}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        {icon}
      </div>
      <div className="forecast-summary__temperature">{temperature}</div>
    </div>
  );
}

export default ForecastSummary;
