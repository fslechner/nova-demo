import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Tag, Props } from "./tag";

const testProps: Props = {
  children: "Some text",
  type: "h1"
};

const testCases: Array<[string, Props]> = [
  [
    "renders h1 tag",
    {
      type: "h1",
      children: "some text"
    }
  ],
  [
    "renders h2 tag",
    {
      type: "h1",
      children: "some text"
    }
  ],
  [
    "renders h3 tag",
    {
      type: "h1",
      children: "some text"
    }
  ]
];

describe("<Tag>", () => {
  it("renders without crashing", () => {
    shallow(<Tag {...testProps}>Some text</Tag>);
  });

  testCases.forEach(([item, options]) => {
    it(item, () => {
      const mock = shallow(<Tag {...options}>Some text</Tag>);
      expect(toJson(mock)).toMatchSnapshot();
    });
  });
});
