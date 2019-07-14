import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Text, Props } from "./text";

const testCases: Array<[string, Props]> = [
  [
    "Text with h1 topic and teaser",
    {
      topicTag: "h1",
      topic: "Hello Jest",
      teaser: "This is a teaser text.",
      text: "Let's write some tests"
    }
  ],
  [
    "Text with h2 topic",
    {
      topicTag: "h2",
      topic: "Hello Jest",
      text: "Let's write some tests"
    }
  ],
  [
    "Text null",
    {
      topicTag: "h3"
    }
  ],
  [
    "Text with only text",
    {
      text: "Let's write some tests"
    }
  ],
  [
    "Text with only teaser",
    {
      teaser: "This is a teaser text."
    }
  ]
];

describe("<Text>", () => {
  testCases.forEach(([item, options]) => {
    it(item, () => {
      expect(toJson(shallow(<Text {...options} />))).toMatchSnapshot();
    });
  });
});
