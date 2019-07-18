import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { ReportsChartD3 } from "./reportsChartD3";

it("renders toMatchSnapshot", () => {
  const mock = shallow(<ReportsChartD3 />);
  expect(toJson(mock)).toMatchSnapshot();
});
