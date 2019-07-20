import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Collapse, Props } from "./collapse";

const testCases: Array<[string, Props]> = [
  ["Default", { text: "Collapse Label", children: "Collapse Content" }]
];

describe("<Collapse>", () => {
  testCases.forEach(([item, options]) => {
    it(item, () => {
      expect(toJson(shallow(<Collapse {...options} />))).toMatchSnapshot();
    });
  });
});
