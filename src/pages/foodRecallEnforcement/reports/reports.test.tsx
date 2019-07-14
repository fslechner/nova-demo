import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import moment from "moment";
import { Reports, Props } from "./reports";
import { findByTestAttr } from "../../../utils/tests";

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
describe("<Text>", () => {
  it("renders toMatchSnapshot", () => {
    expect(toJson(shallow(<Reports {...testProps} />))).toMatchSnapshot();
  });
});

describe("<Components>", () => {
  let wrapper: any;
  let mockFunc: any;

  beforeEach(() => {
    mockFunc = jest.fn();
    const testProp: any = {
      fetchData: mockFunc,
      fetchStart: mockFunc,
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
    wrapper = shallow(<Reports {...testProp} />);
  });

  it("Render Search", () => {
    const search = findByTestAttr(wrapper, "search");
    expect(search.length).toBe(1);
  });

  it("Render Text", () => {
    const text = findByTestAttr(wrapper, "text");
    expect(text.length).toBe(1);
  });

  it("Render ChartHighstock", () => {
    const chart = findByTestAttr(wrapper, "chart");
    expect(chart.length).toBe(1);
  });
});
