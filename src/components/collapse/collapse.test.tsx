import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Collapse, Props } from "./collapse";
import { findByTestAttr } from "../../utils/tests";

const testCases: Array<[string, Props]> = [
  ["Default", { isLoading: true, children: "Collapse Example" }]
];

describe("<Collapse>", () => {
  testCases.forEach(([item, options]) => {
    it(item, () => {
      expect(toJson(shallow(<Collapse {...options} />))).toMatchSnapshot();
    });
  });
});
