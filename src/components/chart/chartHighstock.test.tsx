import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { ChartHighstock, Props } from "./chartHighstock";
import moment from "moment";

const testProps: Props = {
  location: "reports",
  fetchHandler: jest.fn(),
  chartOptions: {
    chart: {
      height: 350,
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
    yAxis: {
      title: {
        text: null
      }
    },
    xAxis: {
      type: "datetime",
      labels: {
        formatter: function() {
          return moment(this.value).format("MMM YYYY");
        }
      },
      minTickInterval: moment.duration(1, "month").asMilliseconds()
    },
    series: [{ type: "line", data: [null] }]
  }
};

describe("<ChartHighstock>", () => {
  it("renders without crashing", () => {
    shallow(<ChartHighstock {...testProps} />);
  });

  it("renders with error", () => {
    const newTestProps = { ...testProps, hasError: true };
    const mock = shallow(<ChartHighstock {...newTestProps} />);
    expect(toJson(mock)).toMatchSnapshot();
  });
});
