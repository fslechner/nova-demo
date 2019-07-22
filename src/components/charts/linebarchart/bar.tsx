import React, { PureComponent, createRef } from "react";
import * as d3 from "d3";

interface Props {
  yMaxValue: any;
  scales: any;
  margins: any;
  svgDimensions: any;
  data: any;
}

export class Bar extends PureComponent<Props> {
  element = createRef<any>();
  node = this.element.current!;

  colorScale = d3
    .scaleLinear()
    .domain([0, this.props.yMaxValue])
    .range([10, 100]);

  componentDidMount() {
    this.renderBar();
  }

  renderBar = () => {
    const { scales, margins, svgDimensions, data } = this.props;
    const { xScale, yScale } = scales;
    const { height } = svgDimensions;
    const bar = d3.select(this.node).append("g");

    bar
      .attr("class", "rect-group")
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d: any) => xScale(d.month))
      .attr("y", height - margins.bottom)
      .transition()
      .duration(300)
      .ease(d3.easePolyInOut)
      .attr("x", (d: any) => xScale(d.month))
      .attr("y", (d: any) => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", (d: any) => height - yScale(d.value) - margins.bottom)
      .style("fill", (d: any) => this.colorScale(d.value));

    bar
      .attr("class", "text-group")
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("x", (d: any) => xScale(d.month))
      .attr("y", (d: any) => height - margins.bottom)
      .transition()
      .duration(300)
      .ease(d3.easePolyInOut)
      .text((d: any) => d.value)
      .attr("x", (d: any) => xScale(d.month) + xScale.bandwidth() / 4)
      .attr("y", (d: any) => yScale(d.value) - 5)
      .style("fill", "#333333")
      .style("font-size", "12px");
  };

  componentWillReceiveProps(nextProps: Props) {
    const { scales, margins, svgDimensions, data } = nextProps;
    const { xScale, yScale } = scales;
    const { height } = svgDimensions;
    const bar = d3.select(this.node).append("g");

    d3.select(".rect-group").remove();
    bar
      .attr("class", "rect-group")
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d: any) => xScale(d.month))
      .attr("y", (d: any) => height - margins.bottom)
      .transition()
      .duration(300)
      .ease(d3.easePolyInOut)
      .attr("x", (d: any) => xScale(d.month))
      .attr("y", (d: any) => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", (d: any) => height - yScale(d.value) - margins.bottom)
      .style("fill", (d: any) => this.colorScale(d.value));

    d3.select(".text-group").remove();
    bar
      .append("g")
      .attr("class", "text-group")
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("x", (d: any) => xScale(d.month))
      .attr("y", (d: any) => height - margins.bottom)
      .transition()
      .duration(300)
      .ease(d3.easePolyInOut)
      .text((d: any) => d.value)
      .attr("x", (d: any) => xScale(d.month) + xScale.bandwidth() / 4)
      .attr("y", (d: any) => yScale(d.value) - 5)
      .style("fill", "#333333")
      .style("font-size", "14px");
  }

  render() {
    return <g ref={el => (this.node = el)} />;
  }
}
