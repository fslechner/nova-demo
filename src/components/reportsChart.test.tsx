import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { ReportsChart, Props } from "./reportsChart";

const testProps: Props = {
  isLoading: false,
  hasError: false,
  reportsData: [],
  fetchReports: jest.fn()
};

const testCases: Array<[string, Props]> = [
  [
    "renders with isLoading=true ",
    {
      isLoading: true,
      hasError: false,
      reportsData: [],
      fetchReports: jest.fn()
    }
  ],
  [
    "renders with hasError=true",
    {
      isLoading: false,
      hasError: true,
      reportsData: [],
      fetchReports: jest.fn()
    }
  ]
];

describe("<ReportsChart>", () => {
  it("renders without crashing", () => {
    shallow(<ReportsChart {...testProps} />);
  });

  testCases.forEach(([item, options]) => {
    it(item, () => {
      const mock = shallow(<ReportsChart {...options} />);
      expect(toJson(mock)).toMatchSnapshot();
    });
  });
});
