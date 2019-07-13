import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Text, Props } from "./text";

const testProps: Props = {
  topicTag: "h1",
  topic: "Hello Jest",
  teaser: "This is a teaser text to test.",
  text: "Let's write some more tests."
};

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
  it("renders without crashing", () => {
    shallow(<Text {...testProps} />);
  });

  testCases.forEach(([item, options]) => {
    it(item, () => {
      const mock = shallow(<Text {...options} />);
      expect(toJson(mock)).toMatchSnapshot();
    });
  });
});
