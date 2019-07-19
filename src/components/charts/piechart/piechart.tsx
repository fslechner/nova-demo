import React, { FC, HTMLAttributes } from "react";
import * as d3 from "d3";
import { ArcLabel } from "./arcLabel";

type Data = any;

export interface PiechartProps extends HTMLAttributes<HTMLOrSVGElement> {
  width: number;
  height: number;
  innerRadius: number;
  outerRadius: number;
  data: Data;
}
// TODO: Inner and outer radius currently unused. Enable it to change chart/label dimensions and spacings!
// TODO: Label overlap. Fix it for readability! One TextAnchor should switch to end...
export const Piechart: FC<PiechartProps> = ({
  width,
  height,
  innerRadius,
  outerRadius,
  data
}) => {
  const pie = d3.pie().value((d: Data) => d[1])(data);
  const translate = `translate(${width / 2}, ${height / 2})`;
  const colors = d3.scaleOrdinal(d3.schemeCategory10);

  return (
    <svg width={width} height={height}>
      <g transform={translate}>
        {pie.map((d: Data, i: number) => (
          <ArcLabel
            width={width}
            height={height}
            key={i}
            data={d}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            color={colors(i.toString())}
          />
        ))}
      </g>
    </svg>
  );
};

export default Piechart;
