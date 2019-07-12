import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Search, Props } from "./search";

const testProps: Props = {
  isLoading: false,
  fetchData: jest.fn()
};

const testCases: Array<[string, Props]> = [
  [
    "renders with isLoading=true",
    {
      isLoading: true,
      fetchData: jest.fn()
    }
  ],
  [
    "renders with isLoading=false",
    {
      isLoading: false,
      fetchData: jest.fn()
    }
  ]
];

describe("<Search>", () => {
  it("renders without crashing", () => {
    shallow(<Search {...testProps} />);
  });

  testCases.forEach(([item, options]) => {
    it(item, () => {
      const mock = shallow(<Search {...options} />);
      expect(toJson(mock)).toMatchSnapshot();
    });
  });
});
