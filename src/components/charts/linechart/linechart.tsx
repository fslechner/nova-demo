import React, { HTMLAttributes, PureComponent, createRef } from "react";
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
  chart = createRef<any>();
  node: any = this.chart.current;
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

    if (!data || data === [] || !this.chart) {
      return <svg className="linechart" ref={this.chart} />;
    }

    const margin = 20;
    const h = height - 2 * margin;
    const w = width - 2 * (1.5 * margin);

    const xMin = d3.min(data, (d: any) => d.x);
    const xMax = d3.max(data, (d: any) => d.x);
    const yMax = d3.max(data, (d: any) => d.y);

    /** x scale */
    const x = d3
      .scaleTime()
      // @ts-ignore
      .domain([xMin, xMax])
      .range([margin * 2, w + 1.8 * margin]);

    /** y scale */
    const y = d3
      .scaleLinear()
      // @ts-ignore
      .domain([0, yMax])
      .range([h, margin]);

    const config = {
      x,
      y,
      margin,
      h,
      w
    };

    return (
      <svg className="linechart" ref={this.chart}>
        <Axis direction="x" config={config} />
        <AxisTicks direction="x" ticks={12} config={config} />
        <Axis direction="y" config={config} />
        <AxisTicks direction="y" ticks={6} config={config} />
        <Line data={data} x={x} y={y} />
      </svg>
    );
  }
}

export default Linechart;
