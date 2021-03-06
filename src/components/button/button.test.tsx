import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { Button, Props } from "./button";

const testCases: Array<[string, Props]> = [
  ["Button returns null", {}],
  [
    "Button with only icon in size xl",
    {
      iconName: "refresh",
      iconSize: "xl"
    }
  ],
  [
    "Button with text left and icon right",
    {
      children: "Button text",
      iconName: "refresh",
      iconAlign: "after"
    }
  ],
  [
    "Button with text right and icon left",
    {
      children: "Button text",
      iconName: "refresh",
      iconAlign: "before"
    }
  ],
  [
    "Button disabled while loading",
    {
      children: "Button text",
      iconName: "refresh",
      iconAlign: "before",
      isLoading: true
    }
  ],
  [
    "Button with spinning icon while loading",
    {
      children: "Button text",
      iconName: "refresh",
      iconAlign: "after",
      isLoading: true,
      isLoadingSpin: true
    }
  ]
];

describe("<Button>", () => {
  testCases.forEach(([item, options]) => {
    it(item, () => {
      expect(
        toJson(shallow(<Button {...options}>Some text</Button>))
      ).toMatchSnapshot();
    });
  });

  it("renders null", () => {
    expect(shallow(<Button />)).toEqual({});
  });
});
