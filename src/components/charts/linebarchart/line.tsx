import React, { FC } from "react";
import * as d3 from "d3";

interface Props {
  scales: any;
  data: any;
}
// Line Component
export const Line: FC<Props> = ({ scales, data }) => {
  const { xScale, yScale } = scales;
  const line = d3
    .line()
    .x((d: any) => xScale(d.year))
    .y((d: any) => yScale(d.income))
    .curve(d3.curveMonotoneX);

  const path = (
    // @ts-ignore
    <path d={line(data)} stroke="#FFF056" strokeWidth="3px" fill="none" />
  );
  return <g>{path}</g>;
};
