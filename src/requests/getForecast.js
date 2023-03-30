import axios from "axios";

const getForecast = async (
  searchText,
  setSelectedDate,
  setForecasts,
  setLocation,
) => {
  let endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";

  if (searchText) {
    endpoint += `?city=${encodeURIComponent(searchText)}`;
  }

  try {
    const response = await axios.get(endpoint);
    setSelectedDate(response.data.forecasts.date);
    setForecasts(response.data.forecasts);
    setLocation(response.data.location);
  } catch (error) {
    console.error("Error fetching weather data", error);
  }
};

export default getForecast;
