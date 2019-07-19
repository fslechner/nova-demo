import React from "react";
import { Arc } from "./arc";

export class ArcLabel extends Arc {
  render() {
    const { data, width, height } = this.props;
    const radius = this.getRadius(width, height);
    return (
      <g>
        {super.render()}
        <text
          transform={this.getTextTransform(data, radius)}
          textAnchor={this.getTextAnchor(data)}
          dy="0.4em"
        >
          {`${data.data[0]}`}
        </text>

        <polyline
          points={this.getPolylinePoints(data, radius)}
          stroke="black"
          fill="none"
        />
      </g>
    );
  }
}
