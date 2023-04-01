/* eslint-disable no-console */
import axios from "axios";

const getForecast = async (
  searchText,
  setSelectedDate,
  setForecasts,
  setLocation,
  setErrorMessage,
) => {
  let endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";

  if (searchText) {
    endpoint += `?city=${(searchText)}`;
  }

  try {
    const response = await axios.get(endpoint);
    const { location, forecasts } = response.data;
    setLocation(location);

    if (Array.isArray(forecasts) && forecasts.length > 0) {
      setForecasts(forecasts);
      setSelectedDate(forecasts[0].date);
    } else {
      setForecasts([]);
      setSelectedDate(null);
    }
  } catch (error) {
    if (error.response) {
      const { status } = error.response;
      if (status === 404) {
        setErrorMessage("No such town/city, please try again!");
        console.error("Location is not valid", error);
      }
      if (status === 500) {
        setErrorMessage("Oops, erver error, try again later!");
        console.error("Server error", error);
      }
    } else {
      console.error("Error fetching weather data", error);
    }
  }
};

export default getForecast;
