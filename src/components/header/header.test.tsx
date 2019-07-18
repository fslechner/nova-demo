import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Header, Props } from "./header";
import { findByTestAttr } from "../../utils/tests";
import { navLinks } from "../../utils/data/navLinks";

const testCases: Array<[string, Props]> = [
  ["navLinks default left", { navLinks }],
  ["navLinks center", { navLinks, navLinksAlign: "center" }],
  ["navLinks right", { navLinks, navLinksAlign: "right" }]
];

describe("<Header>", () => {
  testCases.forEach(([item, options]) => {
    it(item, () => {
      expect(toJson(shallow(<Header {...options} />))).toMatchSnapshot();
    });
  });
});
