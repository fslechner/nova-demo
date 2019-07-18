import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { FoodRecallEnforcementD3 } from "./foodRecallEnforcementD3";

it("renders toMatchSnapshot", () => {
  const mock = shallow(<FoodRecallEnforcementD3 />);
  expect(toJson(mock)).toMatchSnapshot();
});
