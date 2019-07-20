import React, { FC, HTMLAttributes, PureComponent, createRef } from "react";
import produce from "immer";
import * as d3 from "d3";
import { Axis } from "./axis";
import { Line } from "./line";
import { AxisTicks } from "./axisTicks";

type Data = any;

export interface LinechartProps extends HTMLAttributes<HTMLOrSVGElement> {
  data: Data;
  xAxis?: boolean;
  yAxis?: boolean;
  xTicks?: number;
  yTicks?: number;
}

interface State {
  data: Data;
  height: number;
  width: number;
}

export class Linechart extends PureComponent<LinechartProps, State> {
  chart = React.createRef<any>();
  node: any;
  state: State = {
    width: 0,
    height: 0,
    data: []
  };

  static defaultProps = {
    xAxis: true,
    yAxis: true,
    xTicks: true,
    yTicks: true
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.node = this.chart.current!;
    const dimensions: DOMRect = this.node.getBoundingClientRect();
    if (dimensions.width !== this.state.width) {
      this.updateDimensions();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    if (this.node) {
      const dimensions: DOMRect = this.node.getBoundingClientRect();
      this.setState(
        produce((draft: State) => {
          draft.width = dimensions.width;
          draft.height = dimensions.height;
        })
      );
    }
  };

  static getDerivedStateFromProps(nextProps: LinechartProps, prevState: State) {
    if (prevState.data !== nextProps.data) {
      return produce(prevState, (draft: State) => {
        draft.data = nextProps.data;
      });
    }
    return null;
  }

  render() {
    const { xTicks, yTicks, xAxis, yAxis } = this.props;
    const { data, width, height } = this.state;
    const margin = 20;
    const h = this.state.height - 2 * margin;
    const w = this.state.width - 2 * margin;

    const mockData = [
      { a: 1, b: 3 },
      { a: 2, b: 6 },
      { a: 3, b: 2 },
      { a: 4, b: 12 },
      { a: 5, b: 8 }
    ];

    const xMin = d3.min(mockData, (d: any) => d.a);
    const xMax = d3.max(mockData, (d: any) => d.a);
    const yMax = d3.max(mockData, (d: any) => d.b);

    /** x scale */
    const x = d3
      .scaleLinear()
      .domain([xMin, xMax])
      .range([margin, w]);

    /** y scale */
    const y = d3
      .scaleLinear()
      .domain([0, yMax])
      .range([h, margin]);

    const config = {
      x,
      y,
      margin,
      h,
      w
    };
    console.log("xTicks", xTicks);
    return (
      <svg className="linegraph" ref={this.chart}>
        <text y="100">{this.state.width}</text>
        <Axis direction="x" config={config} />
        {xTicks && <AxisTicks direction="x" ticks={xTicks} config={config} />}
        <Axis direction="y" config={config} />
        {yTicks && <AxisTicks direction="y" ticks={yTicks} config={config} />}
        <Line data={this.state.data} x={x} y={y} />
      </svg>
    );
  }
}

export default Linechart;
