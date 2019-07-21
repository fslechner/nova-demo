import React, { FC, HTMLAttributes } from "react";
import * as d3 from "d3";

export interface Props extends HTMLAttributes<SVGPathElement> {
  data: any;
  x: any;
  y: any;
}

export const Line: FC<Props> = ({ data, x, y }) => {
  //line generator: each point is [x(d.a), y(d.b)] where d is a row in data
  // and x, y are scales (e.g. x(10) returns pixel value of 10 scaled by x)
  const line = d3
    .line()
    .x((d: any) => x(d.a))
    .y((d: any) => y(d.b))
    .curve(d3.curveCatmullRom.alpha(0.5));
  return <path d={line(data) || undefined} />;
};
