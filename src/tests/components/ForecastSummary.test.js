import React from "react";
import { getAllByDisplayValue, getQueriesForElement, render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: 1111111,
    description: "Stub description",
    icon: "stubIcon",
    temperature: {
      min: 12,
      max: 22,
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getAllByText, getByTestId } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />
    );

    expect(
      getAllByText(
        (content, element) =>
          element.classList.contains("forecast-summary__date") &&
          content.startsWith("Thu Jan 01")
      )[0]
    ).toBeInTheDocument();

    expect(getAllByText("Stub description")[0]).toHaveClass(
      "forecast-summary__description"
    );
    expect(getByTestId("forecast-icon")).toHaveClass("forecast-summary__icon");
    expect(getAllByText("22°C")[0]).toHaveClass("forecast-summary__temperature");
    expect(getAllByText("Thu Jan 01 1970")[0]).toHaveClass("forecast-summary__date");
  });
});