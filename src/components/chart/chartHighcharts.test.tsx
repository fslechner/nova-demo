import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { ChartHighcharts, Props } from "./chartHighcharts";

const testProps: Props = {
  location: "reports",
  fetchHandler: jest.fn(),
  chartOptions: {
    chart: {
      height: 350,
      width: 350,
      style: {
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen"
      }
    },
    credits: {
      enabled: false
    },
    loading: {
      hideDuration: 500,
      showDuration: 300
    },
    title: {
      text: ""
    },
    series: [{ type: "pie", data: [null] }]
  }
};

describe("<ChartHighcharts>", () => {
  it("renders without crashing", () => {
    shallow(<ChartHighcharts {...testProps} />);
  });

  it("renders with error", () => {
    const newTestProps = { ...testProps, hasError: true };
    const mock = shallow(<ChartHighcharts {...newTestProps} />);
    expect(toJson(mock)).toMatchSnapshot();
  });
});
