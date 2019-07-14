import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Search, Props } from "./search";

const testCases: Array<[string, Props]> = [
  [
    "Search while loading",
    {
      isLoading: true,
      fetchData: jest.fn(),
      location: "reports"
    }
  ],
  [
    "Search default",
    {
      isLoading: false,
      fetchData: jest.fn(),
      location: "reports"
    }
  ]
];

describe("<Search>", () => {
  testCases.forEach(([item, options]) => {
    it(item, () => {
      expect(toJson(shallow(<Search {...options} />))).toMatchSnapshot();
    });
  });
});
