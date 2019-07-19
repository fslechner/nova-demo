import React, { FC, HTMLAttributes, PureComponent } from "react";
import produce from "immer";
import * as d3 from "d3";

type Data = any;

export interface Props extends HTMLAttributes<HTMLDivElement> {
  data: Data;
}

interface State {
  data: Data;
}

const margin = { top: 50, right: 50, bottom: 50, left: 50 };
const width = window.innerWidth - margin.left - margin.right; // Use the window's width
const height = window.innerHeight - margin.top - margin.bottom; // Use the window's height

export class Linechart extends PureComponent<Props, State> {
  n = 21;
  xScale = d3
    .scaleLinear()
    .domain([0, this.n - 1]) // input
    .range([0, width]); // output
  yScale = d3
    .scaleLinear()
    .domain([0, 1]) // input
    .range([height, 0]); // output
  line = d3
    .line()
    .x((d, i) => this.xScale(i)) // set the x values for the line generator
    .y((d: any) => this.yScale(d.y)) // set the y values for the line generator
    .curve(d3.curveMonotoneX); // apply smoothing to the line

  dataset = d3.range(this.n).map(function(d) {
    return { y: d3.randomUniform(1)() };
  });

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if (prevState.data !== nextProps.data) {
      return produce(prevState, (draft: State) => {
        draft.data = nextProps.data;
      });
    }
    return null;
  }

  render() {
    return (
      <svg
        width={width}
        height={height}
        transform={`${margin.left} ${margin.right}`}
      />
    );
  }
}

export default Linechart;
