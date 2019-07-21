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
    .y((d: any) => yScale(d.value))
    .curve(d3.curveMonotoneX);

  const path = (
    <path
      d={line(data) || undefined}
      stroke="#FFF056"
      strokeWidth="3px"
      fill="none"
    />
  );
  return <g>{path}</g>;
};
