import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import moment from "moment";
import { Reports, Props } from "./reports";

const testProps: any = {
  fetchData: jest.fn(),
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

      minTickInterval: moment.duration(1, "month").asMilliseconds()
    },
    series: [{ type: "line", data: [null] }]
  }
};

it("renders toMatchSnapshot", () => {
  expect(toJson(shallow(<Reports {...testProps} />))).toMatchSnapshot();
});
