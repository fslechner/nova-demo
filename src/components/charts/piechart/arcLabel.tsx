import React from "react";
import { Arc } from "./arc";

export class ArcLabel extends Arc {
  render() {
    const { data, radius } = this.props;

    return (
      <g>
        {super.render()}
        <text
          transform={this.getTextTransform(data, radius / 10 + 5)}
          textAnchor={this.getTextAnchor(data)}
          dy="0.4em"
        >
          {`${data.data[0]}`}
        </text>

        <polyline
          points={this.getPolylinePoints(data, radius / 10)}
          stroke="black"
          fill="none"
        />
      </g>
    );
  }
}
