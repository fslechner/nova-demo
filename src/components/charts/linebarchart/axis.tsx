import React, { FC, HTMLAttributes, PureComponent, createRef } from "react";
import * as d3 from "d3";

interface Props extends HTMLAttributes<SVGElement> {
  orient: any;
  scale: any;
  ticks: any;
  tickSize: any;
  padding: any;
  format: any;
  translate: any;
  className: string;
}

/***************** Axis Start ****************/
export class Axis extends PureComponent<Props> {
  chart = createRef<any>();
  axisElement: any = this.chart!;

  componentDidMount() {
    this.renderAxis();
  }
  componentDidUpdate() {
    this.renderAxis();
  }
  renderAxis() {
    // @ts-ignore
    const axis = d3[`axis${this.props.orient}`]()
      .scale(this.props.scale)
      .tickSize(-this.props.tickSize)
      .tickPadding(this.props.padding)
      .ticks(this.props.ticks)
      .tickFormat(this.props.format);

    d3.select(this.axisElement).call(axis);
  }
  render() {
    return (
      <g
        className={this.props.className}
        ref={el => (this.axisElement = el)}
        transform={this.props.translate}
      />
    );
  }
}
