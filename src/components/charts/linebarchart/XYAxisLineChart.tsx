import React, { FC } from "react";
import * as d3 from "d3";
import { Axis } from "./axis";

export interface Props {
  scales: any;
  margins: any;
  svgDimensions: any;
}

export const XYAxisLineChart: FC<Props> = ({
  scales,
  margins,
  svgDimensions
}) => {
  const xAxisProps = {
    orient: "Bottom",
    translate: `translate(0,${svgDimensions.height - margins.bottom})`,
    scale: scales.xScale,
    tickSize: svgDimensions.height - margins.top - margins.bottom + 20,
    ticks: 5,
    className: "axisBottom",
    padding: 10,
    format: d3.format("")
  };
  const yAxisProps = {
    orient: "Left",
    translate: `translate(${margins.left},0)`,
    scale: scales.yScale,
    tickSize: svgDimensions.width - margins.left - margins.right + 50,
    ticks: 3,
    className: "axisLeft",
    padding: 10,
    format: null
  };

  return (
    <g>
      <Axis {...xAxisProps} />
      <Axis {...yAxisProps} />
    </g>
  );
};
