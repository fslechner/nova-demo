import React, { FC } from "react";
import * as d3 from "d3";

export interface Props {
  config: {
    margin: number;
    w: number;
    h: number;
    x: any;
    y: any;
  };
  direction: "x" | "y";
  ticks: number;
}
export const AxisTicks: FC<Props> = ({ direction, ticks, config }) => {
  const { margin, w, h, x, y } = config;

  const format = d3.format(".2");

  const xTicks = x.ticks(ticks).map((d: any) =>
    x(d) > margin && x(d) < w ? (
      <g transform={`translate(${x(d)},${h + margin})`}>
        <text>{format(d)}</text>
        <line x1="0" x2="0" y1={"0"} y2="5" transform="translate(0,-20)" />
      </g>
    ) : null
  );

  const yTicks = y.ticks(ticks).map((d: any, i: number) =>
    y(d) > 10 && y(d) < h ? (
      <g key="i" transform={`translate(${margin},${y(d)})`}>
        <text x={margin - 20} y="5">
          {format(d)}
        </text>
        <line
          x1={margin}
          x2={margin + 5}
          y1="0"
          y2="0"
          transform="translate(-5,0)"
        />
        <line
          className="gridline"
          x1={margin}
          x2={w + margin}
          y1="0"
          y2="0"
          transform="translate(-5,0)"
        />
      </g>
    ) : null
  );

  if (direction === "x") {
    return <g className="axis-labels">{xTicks}</g>;
  }
  if (direction === "y") {
    return <g className="axis-labels">{yTicks}</g>;
  }

  return null;
};
