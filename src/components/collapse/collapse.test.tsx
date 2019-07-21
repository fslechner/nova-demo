import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Collapse, Props } from "./collapse";
import { Button } from "..";

const testCases: Array<[string, Props]> = [
  [
    "Default",
    {
      text: "Collapse Label",
      iconName: "arrow",
      iconSize: "m",
      textInline: false,
      iconRotateOpen: "90",
      iconRotateAnimated: true,
      closePosition: "bottom-center",
      children: "Collapse Content"
    }
  ],
  [
    "textInline",
    {
      text: "Collapse Label",
      iconName: "arrow",
      iconSize: "m",
      textInline: true,
      iconRotateOpen: "90",
      iconRotateAnimated: true,
      closePosition: "bottom-center",
      children: "Collapse Content"
    }
  ],
  [
    "without icon animation",
    {
      text: "Collapse Label",
      iconName: "arrow",
      iconSize: "m",
      textInline: true,
      iconRotateOpen: "90",
      iconRotateAnimated: false,
      closePosition: "bottom-center",
      children: "Collapse Content"
    }
  ],
  [
    "bigger icon size and other icon",
    {
      text: "Collapse Label",
      iconName: "close",
      iconSize: "xl",
      textInline: false,
      iconRotateOpen: "90",
      iconRotateAnimated: true,
      closePosition: "bottom-center",
      children: "Collapse Content"
    }
  ],
  [
    "width bottom-center positioned close icon button within collapsed content",
    {
      text: "Collapse Label",
      iconName: "close",
      iconSize: "xl",
      textInline: false,
      iconRotateClosed: "45",
      iconRotateOpen: "180",
      iconRotateAnimated: false,
      closeItem: <Button iconName="close" iconSize="l" />,
      closePosition: "bottom-center",
      children: "Collapse Content"
    }
  ]
];

describe("<Collapse>", () => {
  testCases.forEach(([item, options]) => {
    it(item, () => {
      expect(toJson(shallow(<Collapse {...options} />))).toMatchSnapshot();
    });
  });
});
