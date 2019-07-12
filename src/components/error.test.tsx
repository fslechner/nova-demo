import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Error, Props } from "./error";

const testProps: Props = {
  isLoading: false,
  fetchData: jest.fn()
};

const testCases: Array<[string, Props]> = [
  [
    "renders with isLoading=true ",
    {
      isLoading: true,
      fetchData: jest.fn()
    }
  ],
  [
    "renders with isLoading=fasle",
    {
      isLoading: false,
      fetchData: jest.fn()
    }
  ]
];

describe("<Error>", () => {
  it("renders without crashing", () => {
    shallow(<Error {...testProps} />);
  });

  testCases.forEach(([item, options]) => {
    it(item, () => {
      const mock = shallow(<Error {...options} />);
      expect(toJson(mock)).toMatchSnapshot();
    });
  });
});
