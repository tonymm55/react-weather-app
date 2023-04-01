import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: '2022-04-01T00:00:00.000Z',
    temperature: {
      max: 18,
      min: 12,
    },
    humidity: 75,
    wind: {
      speed: 20,
      direction: 'ne',
    },
  };

  it('displays the date correctly', () => {
    const { getByText } = render(<ForecastDetails
      date={validProps.date}
      humidity={validProps.humidity}
      wind={validProps.wind}
      temperature={validProps.temperature}
    />);
    const dateElement = getByText("Fri Apr 01 2022");
    expect(dateElement).toBeInTheDocument();
  });

  it("renders correct values for props", () => {
    const { getAllByText, getByText } = render(
      <ForecastDetails
        date={validProps.date}
        humidity={validProps.humidity}
        wind={validProps.wind}
        temperature={validProps.temperature}
      />,
    );

    expect(
      getAllByText(
        (content, element) => element.classList.contains("forecast-details__date")
        && content.startsWith("Fri Apr 01 2022"),
      )[0],
    ).toBeInTheDocument();

    expect(getByText(/18/)).toHaveClass(
      "forecast-details__maxTemperature",
    );
    expect(getAllByText("Fri Apr 01 2022")[0]).toHaveClass(
      "forecast-details__date",
    );
  });
});
