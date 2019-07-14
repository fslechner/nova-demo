import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Tag, Props } from "./tag";

const testCases: Array<[string, Props]> = [
  [
    "Tag h1",
    {
      type: "h1",
      children: "some text"
    }
  ],
  [
    "Tag strong",
    {
      type: "strong",
      children: "some text"
    }
  ],
  [
    "Tag em tag",
    {
      type: "em",
      children: "some text"
    }
  ]
];

describe("<Tag>", () => {
  testCases.forEach(([item, options]) => {
    it(item, () => {
      expect(
        toJson(shallow(<Tag {...options}>Some text</Tag>))
      ).toMatchSnapshot();
    });
  });
});
