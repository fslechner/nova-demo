import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Text, Props } from "./text";

const testCases: Array<[string, Props]> = [
  [
    "renders all tags with content",
    {
      topicTag: "h1",
      topic: "Hello Jest",
      teaser: "This is a teaser text.",
      text: "Let's write some tests"
    }
  ],
  [
    "renders all but no teaser text within strong tags",
    {
      topicTag: "h2",
      topic: "Hello Jest",
      text: "Let's write some tests"
    }
  ],
  [
    "renders nothing",
    {
      topicTag: "h3"
    }
  ],
  [
    "renders only text within p tags",
    {
      text: "Let's write some tests"
    }
  ],
  [
    "renders only teaser text within strong tag",
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
