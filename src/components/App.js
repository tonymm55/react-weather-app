/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import "../styles/App.css";
import LocationDetails from "./LocationDetails";

function App({ location }) {
  const { city, country } = location;
  return <LocationDetails city={city} country={country} />;
}

<div>
  <header className="App-header">
    <h1>Weather App</h1>
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      My Weather Application
    </a>
  </header>
</div>;

export default App;
