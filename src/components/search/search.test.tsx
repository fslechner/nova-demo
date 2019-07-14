import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Search, Props } from "./search";
import { findByTestAttr } from "../../utils/tests";

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

  it("Button onClick", () => {
    const mockFunc = jest.fn();
    const wrapper = shallow(<Search location="reports" fetchData={mockFunc} />);
    const button = findByTestAttr(wrapper, "search-button");
    button.simulate("click");
    const callback = mockFunc.mock.calls.length;
    expect(callback).toBe(1);
  });

  // TODO: find reason why this is not working
  /*   it("last", () => {
    const mockFunc = jest.fn();
    const wrapper = shallow(<Search location="reports" fetchData={mockFunc} />);
    const input = wrapper.find("input");
    input.simulate("keypress", { keyCode: 13 });
    const callback = mockFunc.mock.calls.length;
    expect(callback).toBe(1);
  }); */
});
