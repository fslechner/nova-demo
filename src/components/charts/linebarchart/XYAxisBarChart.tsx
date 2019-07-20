import React, { FC } from "react";
import { Axis } from "./axis";

export interface Props {
  scales: any;
  margins: any;
  svgDimensions: any;
}

export const XYAxisBarChart: FC<Props> = ({
  scales,
  margins,
  svgDimensions
}) => {
  const xAxisProps = {
    orient: "Bottom",
    translate: `translate(0,${svgDimensions.height - margins.bottom})`,
    scale: scales.xScaleMonth,
    tickSize: svgDimensions.height - margins.top - margins.bottom,
    ticks: 4,
    className: "axisBottom",
    padding: 10,
    format: null
  };
  const yAxisProps = {
    orient: "Left",
    translate: `translate(${margins.left},0)`,
    scale: scales.yScale,
    tickSize: svgDimensions.width - margins.left - margins.right,
    ticks: 5,
    className: "axisLeft",
    padding: 15,
    format: null
  };

  return (
    <g>
      <Axis {...xAxisProps} />
      <Axis {...yAxisProps} />
    </g>
  );
};
