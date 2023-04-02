import { render, screen, waitFor } from "@testing-library/react";
import App from "../../components/App";
import forecast from "../../data/forecast.json";

describe("App", () => {
  it("renders without errors", () => {
    expect(() => render(<App location={forecast.location} forecasts={forecast.forecasts} />)).not.toThrow();
  });
});

describe("App", () => {
  it("renders correctly", () => {
    const { container } = render(<App />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("App", () => {
  it("renders the app components", () => {
    render(<App location={forecast.location} forecasts={forecast.forecasts} />);
    const locationDetails = screen.getByTestId("location-details");
    const searchForm = screen.getByTestId("search-form");
    const forecastSummaries = screen.getByTestId("forecast-summaries");
    const forecastDetails = screen.getByTestId("forecast-details");
    expect(locationDetails).toBeInTheDocument();
    expect(searchForm).toBeInTheDocument();
    expect(forecastSummaries).toBeInTheDocument();
    expect(forecastDetails).toBeInTheDocument();
  });

  it("renders the correct number of ForecastSummaries components", () => {
    render(<App location={forecast.location} forecasts={forecast.forecasts} />);
    const forecastSummaries = screen.getAllByTestId("forecast-summaries");
    expect(forecastSummaries).toHaveLength(1);
  });
});

describe("SearchForm", () => {
  it("matches snapshot", () => {
    const { searchForm } = render(<App />);
    expect(searchForm).toMatchSnapshot();
  });

  it("renders the correct text for the search button", () => {
    render(<App location={forecast.location} forecasts={forecast.forecasts} />);
    const searchButton = screen.getByRole("button");
    expect(searchButton).toHaveTextContent("Search Location");
  });
});
