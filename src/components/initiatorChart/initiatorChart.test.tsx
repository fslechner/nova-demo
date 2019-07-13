import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import InitiatorChart, { Props } from "./initiatorChart";

const testProps: Props = {
  isLoading: false,
  hasError: false,
  initiatorData: [],
  fetchInitiator: jest.fn()
};

const testCases: Array<[string, Props]> = [
  [
    "renders with isLoading=true ",
    {
      isLoading: true,
      hasError: false,
      initiatorData: [],
      fetchInitiator: jest.fn()
    }
  ],
  [
    "renders with hasError=true",
    {
      isLoading: false,
      hasError: true,
      initiatorData: [],
      fetchInitiator: jest.fn()
    }
  ]
];

describe("<InitiatorChart>", () => {
  it("renders without crashing", () => {
    shallow(<InitiatorChart {...testProps} />);
  });

  testCases.forEach(([item, options]) => {
    it(item, () => {
      const mock = shallow(<InitiatorChart {...options} />);
      expect(toJson(mock)).toMatchSnapshot();
    });
  });
});
