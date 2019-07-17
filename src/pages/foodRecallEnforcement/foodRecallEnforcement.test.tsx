import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { FoodRecallEnforcement } from "./foodRecallEnforcement";

it("renders toMatchSnapshot", () => {
  expect(toJson(shallow(<FoodRecallEnforcement />))).toMatchSnapshot();
});
