import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Icon, Props } from "./icon";

const testCases: Array<[string, Props]> = [
  ["icon returns null", {}],
  [
    "icon refresh default",
    {
      name: "refresh"
    }
  ],
  [
    "icon refresh size xl",
    {
      name: "refresh",
      size: "xl"
    }
  ],
  [
    "icon search rotation 180",
    {
      name: "search",
      rotate: "180"
    }
  ],
  [
    "icon search rotation 180 size xl",
    {
      name: "search",
      rotate: "180",
      size: "xl"
    }
  ]
];

describe("<Icon>", () => {
  testCases.forEach(([item, options]) => {
    it(item, () => {
      expect(toJson(shallow(<Icon {...options} />))).toMatchSnapshot();
    });
  });
});
