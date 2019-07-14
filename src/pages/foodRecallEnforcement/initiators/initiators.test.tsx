import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Initiators, Props } from "./initiators";

const testProps: AnyARecord = {
  location: "reports",
  fetchData: jest.fn(),
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

it("renders toMatchSnapshot", () => {
  expect(toJson(shallow(<Initiators {...testProps} />))).toMatchSnapshot();
});
