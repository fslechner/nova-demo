import React, { PureComponent } from "react";
import { PiechartProps } from "./piechart";
import * as d3 from "d3";

export class Arc extends PureComponent<PiechartProps> {
  arc: any;
  outerArc: any;

  constructor(props: PiechartProps) {
    super(props);
    const { width, height } = this.props;
    this.arc = d3
      .arc()
      .innerRadius(this.getRadius(width, height) * 0.8)
      .outerRadius(this.getRadius(width, height) * 0.6);
    this.outerArc = d3
      .arc()
      .innerRadius(this.getRadius(width, height) * 0.9)
      .outerRadius(this.getRadius(width, height) * 0.9);
  }

  getMidAngle(d: any) {
    return d.startAngle + (d.endAngle - d.startAngle) / 2;
  }

  getRadius(width: number, height: number) {
    return Math.min(width, height) / 2;
  }

  getPolylinePoints(d: any, radius: number): string {
    var pos = this.outerArc.centroid(d);
    pos[0] = radius * 0.95 * (this.getMidAngle(d) < Math.PI ? 1 : -1);
    return [this.arc.centroid(d), this.outerArc.centroid(d), pos].join();
  }

  getTextAnchor(d: any) {
    return this.getMidAngle(d) < Math.PI ? "start" : "end";
  }

  getTextTransform(d: any, radius: number) {
    const pos = this.outerArc.centroid(d);
    pos[0] = radius * 0.95 * (this.getMidAngle(d) < Math.PI ? 1 : -1);
    return `translate(${pos})`;
  }

  render() {
    const { data, color } = this.props;
    return <path d={this.arc(data)} fill={color} />;
  }
}
