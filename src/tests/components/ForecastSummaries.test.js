import React from "react";
import { render, screen } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = {
    forecasts: [
      {
        date: 1111111,
        description: "Stub description 1",
        icon: 800,
        temperature: {
          max: 22,
          min: 12,
        },
      },
      {
        date: 2222222,
        description: "Stub description 2",
        icon: 600,
        temperature: {
          max: 24,
          min: 13,
        },
      },
    ],
    onForecastSelect: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummaries
        forecasts={validProps.forecasts}
        onForecastSelect={validProps.onForecastSelect}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct number of ForecastSummary instances", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries forecasts={validProps.forecasts} />,
    );

    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});

describe("renders correct values for props", () => {
  const validProps = [
    {
      date: 1111111,
      description: "Stub description",
      icon: 800,
      temperature: {
        max: 22,
        min: 12,
      },
    },
  ];

  it("renders correctly", () => {
    const { getByText } = render(<ForecastSummaries forecasts={validProps} />);
    expect(getByText("Stub description")).toBeInTheDocument();
  });
});

describe("ForecastSummaries", () => {
  const forecasts = [
    {
      date: "2023-03-25",
      description: "Sunny",
      icon: 800,
      temperature: {
        max: 20,
        min: 10,
      },
    },
    {
      date: "2023-03-26",
      description: "Cloudy",
      icon: 600,
      temperature: {
        max: 18,
        min: 8,
      },
    },
  ];

  it("renders the correct number of ForecastSummary components", () => {
    render(<ForecastSummaries forecasts={forecasts} />);
    const forecastSummaryElements = screen.getAllByTestId("forecast-summary");
    expect(forecastSummaryElements.length).toEqual(2);
  });
});
