import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Search, Props } from "./search";

const testCases: Array<[string, Props]> = [
  [
    "renders with isLoading=true",
    {
      isLoading: true,
      fetchData: jest.fn(),
      location: "reports"
    }
  ],
  [
    "renders with isLoading=false",
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
