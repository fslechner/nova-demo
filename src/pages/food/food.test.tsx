import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Food } from "./food";

it("renders without crashing", () => {
  shallow(<Food />);
});

it("renders toMatchSnapshot", () => {
  const mock = shallow(<Food />);
  expect(toJson(mock)).toMatchSnapshot();
});
