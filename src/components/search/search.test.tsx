import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import toJson from "enzyme-to-json";
import { Search, Props } from "./search";
import { findByTestAttr } from "../../utils/tests";

const testCases: Array<[string, Props]> = [
  [
    "Search while loading",
    {
      isLoading: true,
      fetchData: jest.fn()
    }
  ],
  [
    "Search default",
    {
      isLoading: false,
      fetchData: jest.fn()
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
    const wrapper: ShallowWrapper<Props> = shallow(
      <Search fetchData={mockFunc} />
    );
    const button = findByTestAttr(wrapper, "search-button");
    button.simulate("click");
    const callback = mockFunc.mock.calls.length;
    expect(callback).toBe(1);
  });
});
