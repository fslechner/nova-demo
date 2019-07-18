import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { NotFound } from "./notFound";

it("renders toMatchSnapshot", () => {
  const mock = shallow(<NotFound />);
  expect(toJson(mock)).toMatchSnapshot();
});
