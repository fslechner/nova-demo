import React, { HTMLAttributes, createRef } from "react";
import * as d3 from "d3";
import produce from "immer";
import { ArcLabel } from "./arcLabel";

type Data = any;

export interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  data: Data;
}

interface State {
  data: Data;
  height: number;
  width: number;
}

// TODO: Inner and outer radius currently unused. Enable it to change chart/label dimensions and spacings!
// TODO: Label overlap. Fix it for readability! One TextAnchor should switch to end...
export class Piechart extends React.Component<Props, State> {
  chart = createRef<any>();
  node: any;
  state: State = {
    width: 0,
    height: 0,
    data: []
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

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if (prevState.data !== nextProps.data) {
      return produce(prevState, (draft: State) => {
        draft.data = nextProps.data;
      });
    }
    return null;
  }

  render() {
    const { data, width, height } = this.state;
    if (!data || !this.chart) {
      return <svg className="piechart" ref={this.chart} />;
    }
    const pie = d3.pie().value((d: Data) => d[1])(data);
    const translate = `translate(${width / 2}, ${height / 2})`;
    const radius = Math.min(width, height) / 2;
    const colors = d3.scaleOrdinal(d3.schemeCategory10);
    return (
      <svg className="piechart" ref={this.chart}>
        <g transform={translate}>
          {pie.map((d: Data, i: number) => (
            <ArcLabel
              key={i}
              data={d}
              color={colors(i.toString())}
              radius={radius}
            />
          ))}
        </g>
      </svg>
    );
  }
}

export default Piechart;
