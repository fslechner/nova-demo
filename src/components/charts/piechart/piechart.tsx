import React, { FC, HTMLAttributes, PureComponent } from "react";
import * as d3 from "d3";

export interface PiechartProps extends HTMLAttributes<HTMLOrSVGElement> {
  x: number;
  y: number;
  innerRadius: number;
  outerRadius: number;
  data: any;
}

export const Piechart: FC<PiechartProps> = ({
  x,
  y,
  innerRadius,
  outerRadius,
  data
}) => {
  let pie = d3.pie().value((d: any) => d.value)(data),
    translate = `translate(${x / 2}, ${y / 2})`,
    colors = d3.scaleOrdinal(d3.schemeCategory10);

  return (
    <svg width={x} height={y}>
      <g transform={translate}>
        {pie.map((d: any, i: any) => {
          console.log(d);
          return (
            <ArcLabel
              x={x}
              y={y}
              key={`arc-${i}`}
              data={d}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              color={colors(i)}
            />
          );
        })}
      </g>
    </svg>
  );
};

export default Piechart;

export class Arc extends PureComponent<PiechartProps> {
  arc: any;
  outerArc: any;

  constructor(props: PiechartProps) {
    super(props);
    this.arc = d3.arc();
    this.outerArc = d3.arc();
  }

  componentWillMount() {
    this.updateD3(this.props);
  }

  componentWillReceiveProps(newProps: PiechartProps) {
    this.updateD3(newProps);
  }

  updateD3(newProps: PiechartProps) {
    this.arc.innerRadius(newProps.innerRadius);
    this.arc.outerRadius(newProps.outerRadius);
    this.outerArc.innerRadius(newProps.innerRadius * 1.2);
    this.outerArc.outerRadius(newProps.outerRadius * 1.2);
  }

  midAngle(d: any) {
    return d.startAngle + (d.endAngle - d.startAngle) / 2;
  }

  render() {
    const { data, color } = this.props;
    return <path d={this.arc(data)} style={{ fill: color }} />;
  }
}

export class ArcLabel extends Arc {
  render() {
    const { data, outerRadius } = this.props;
    const radius = 40;
    const labelTranslate = `translate(${(outerRadius + radius) *
      Math.sin((data.endAngle - data.startAngle) / 2 + data.startAngle)}, ${-1 *
      (outerRadius + radius) *
      Math.cos((data.endAngle - data.startAngle) / 2 + data.startAngle)})`;

    const points = () => {
      var pos = this.outerArc.centroid(data);
      pos[0] = radius * 0.95 * (this.midAngle(data) < Math.PI ? 1 : -1);
      return [this.arc.centroid(data), this.outerArc.centroid(data), pos];
    };

    console.log(points());

    return (
      <>
        {super.render()}
        <g>
          <text transform={labelTranslate} textAnchor="middle">
            {data.data.label}
          </text>
        </g>
        <g>
          <polyline points="50,0 21,90 98,35 " stroke="black" fill="none" />
        </g>
      </>
    );
  }
}
