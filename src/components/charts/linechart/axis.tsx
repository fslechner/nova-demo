import React, { FC } from "react";

interface Props {
  config: {
    margin: number;
    w: number;
    h: number;
    x: any;
    y: any;
  };
  direction: "x" | "y";
}

export const Axis: FC<Props> = ({ direction, config }) => {
  const { margin, w, h } = config;

  if (direction === "x") {
    return <line className="axis" x1={margin} x2={w} y1={h} y2={h} />;
  }
  if (direction === "y") {
    return <line className="axis" x1={margin} x2={margin} y1={margin} y2={h} />;
  }

  return null;
};
