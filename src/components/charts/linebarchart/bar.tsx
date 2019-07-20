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
  node = this.element.current;
  colorScale: any;

  constructor(props: Props) {
    super(props);
    this.colorScale = d3
      .scaleLinear()
      .domain([0, this.props.yMaxValue])
      // @ts-ignore
      .range(["#999999", "#333333"]);
  }
  componentDidMount() {
    this.renderBar();
  }
  renderBar = () => {
    const { scales, margins, svgDimensions, data } = this.props;
    const { xScale, yScale } = scales;
    const { height } = svgDimensions;
    // @ts-ignore
    let bar = d3.select(this.node).append("g");
    bar
      .attr("class", "rect-group")
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d: any) => xScale(d.month))
      .attr("y", height - margins.bottom)
      .transition()
      .duration(1500)
      .ease(d3.easeElastic)
      .attr("x", (d: any) => xScale(d.month))
      .attr("y", (d: any) => yScale(d.income))
      .attr("width", xScale.bandwidth())
      .attr("height", (d: any) => height - yScale(d.income) - margins.bottom)
      .style("fill", (d: any) => this.colorScale(d.income));

    bar
      .attr("class", "text-group")
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("x", (d: any) => xScale(d.month))
      .attr("y", (d: any) => height - margins.bottom)
      .transition()
      .duration(1500)
      .ease(d3.easeElastic)
      .text((d: any) => d.income)
      .attr("x", (d: any) => xScale(d.month) + xScale.bandwidth() / 4)
      .attr("y", (d: any) => yScale(d.income) - 5)
      .style("fill", "#333333")
      .style("font-size", "12px");
  };

  componentWillReceiveProps(nextProps: Props) {
    const { scales, margins, svgDimensions, data } = nextProps;
    const { xScale, yScale } = scales;
    const { height } = svgDimensions;
    // @ts-ignore
    let bar = d3.select(this.node).append("g");

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
      .duration(2500)
      .ease(d3.easeElastic)
      .attr("x", (d: any) => xScale(d.month))
      .attr("y", (d: any) => yScale(d.income))
      .attr("width", xScale.bandwidth())
      .attr("height", (d: any) => height - yScale(d.income) - margins.bottom)
      .style("fill", (d: any) => this.colorScale(d.income));

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
      .duration(2500)
      .ease(d3.easeElastic)
      .text((d: any) => d.income)
      .attr("x", (d: any) => xScale(d.month) + xScale.bandwidth() / 4)
      .attr("y", (d: any) => yScale(d.income) - 5)
      .style("fill", "#333333")
      .style("font-size", "12px");
  }
  render() {
    return <g ref={this.element} />;
  }
}
