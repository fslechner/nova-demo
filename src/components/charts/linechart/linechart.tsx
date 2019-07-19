import React, { FC, HTMLAttributes, PureComponent } from "react";
import produce from "immer";
import * as d3 from "d3";

type Data = any;

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /*   width: number;
  height: number;*/
  data?: Data;
}

interface State {
  data: Data;
}

export class Linechart extends PureComponent<Props, State> {
  n = 21;
  width = 500;
  height = 350;
  margin = 20;

  mockData = [
    { a: 1, b: 3 },
    { a: 2, b: 6 },
    { a: 3, b: 2 },
    { a: 4, b: 12 },
    { a: 5, b: 8 }
  ];

  h = this.height - 2 * this.margin;
  w = this.width - 2 * this.margin;

  //number formatter
  xFormat = d3.format(".2");
  //x scale
  x = d3
    .scaleLinear()
    .domain([0, 20]) //domain: [min,max] of a
    .range([this.margin, this.w]);

  //y scale
  y = d3
    .scaleLinear()
    .domain([0, 20]) // domain [0,max] of b (start from 0)
    .range([this.h, this.margin]);

  //line generator: each point is [x(d.a), y(d.b)] where d is a row in data
  // and x, y are scales (e.g. x(10) returns pixel value of 10 scaled by x)
  line = d3
    .line()
    .x((d: any) => this.x(d.a))
    .y((d: any) => this.y(d.b))
    .curve(d3.curveCatmullRom.alpha(0.5)); //curve line

  xTicks = this.x.ticks(6).map(d =>
    this.x(d) > this.margin && this.x(d) < this.w ? (
      <g transform={`translate(${this.x(d)},${this.h + this.margin})`}>
        <text>{this.xFormat(d)}</text>
        <line x1="0" x2="0" y1="0" y2="5" transform="translate(0,-20)" />
      </g>
    ) : null
  );

  yTicks = this.y.ticks(5).map((d: any) =>
    this.y(d) > 10 && this.y(d) < this.h ? (
      <g transform={`translate(${this.margin},${this.y(d)})`}>
        <text x="-12" y="5">
          {this.xFormat(d)}
        </text>
        <line x1="0" x2="5" y1="0" y2="0" transform="translate(-5,0)" />
        <line
          className="gridline"
          x1="0"
          x2={this.w - this.margin}
          y1="0"
          y2="0"
          transform="translate(-5,0)"
        />
      </g>
    ) : null
  );

  render() {
    return (
      <svg className="linegraph" width={this.width} height={this.height}>
        <line
          className="axis"
          x1={this.margin}
          x2={this.w}
          y1={this.h}
          y2={this.h}
        />
        <line
          className="axis"
          x1={this.margin}
          x2={this.margin}
          y1={this.margin}
          y2={this.h}
        />
        // @ts-ignore
        <path d={this.line(this.mockData)} />
        <g className="axis-labels">{this.xTicks}</g>
        <g className="axis-labels">{this.yTicks}</g>
      </svg>
    );
  }
}

/* 
ReactDOM.render(<LineChart data={data} width={width} height={height} />, document.getElementById('app')) */

export default Linechart;
