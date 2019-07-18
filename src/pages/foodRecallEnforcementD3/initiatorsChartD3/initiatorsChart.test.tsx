import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { InitiatorsChartD3 } from "./initiatorsChartD3";

it("renders toMatchSnapshot", () => {
  const mock = shallow(<InitiatorsChartD3 />);
  expect(toJson(mock)).toMatchSnapshot();
});
