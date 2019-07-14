import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Error, Props } from "./error";
import { findByTestAttr } from "../../utils/tests";

const testCases: Array<[string, Props]> = [
  [
    "Error while loading",
    { location: "reports", isLoading: true, fetchData: jest.fn() }
  ],
  [
    "Error default",
    { location: "reports", isLoading: false, fetchData: jest.fn() }
  ]
];

describe("<Error>", () => {
  testCases.forEach(([item, options]) => {
    it(item, () => {
      expect(toJson(shallow(<Error {...options} />))).toMatchSnapshot();
    });
  });

  it("Button onClick", () => {
    const mockFunc = jest.fn();
    const wrapper = shallow(<Error location="reports" fetchData={mockFunc} />);
    const button = findByTestAttr(wrapper, "error-button");
    button.simulate("click");
    const callback = mockFunc.mock.calls.length;
    expect(callback).toBe(1);
  });
});
