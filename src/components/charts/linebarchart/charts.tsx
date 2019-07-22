import React, { PureComponent } from "react";
import produce from "immer";
import { Linechart } from "./linechart";
import { Barchart } from "./barchart";

interface Props {
  linechartData: any;
  barchartData: any;
}
interface State {
  linechartData: { year: number; value: number }[] | undefined;
  barchartData: { month: number; value: number }[] | undefined;
}

// Charts Component
export class Charts extends PureComponent<Props, State> {
  state: State = {
    linechartData: [],
    barchartData: []
  };

  componentWillMount() {
    this.setState(
      produce((draft: State) => {
        draft.barchartData = this.props.barchartData;
        draft.linechartData = this.props.linechartData;
      })
    );
  }

  handleChangeYear = (year: string) =>
    this.setState(
      produce((draft: State) => {
        draft.barchartData = this.props.barchartData[year];
      })
    );

  render() {
    const margins = { top: 50, right: 100, bottom: 50, left: 100 },
      svgDimensions = {
        height: window.screen.height / 2,
        width: window.screen.width / 2
      };
    console.log("#############", this.state.barchartData);
    return (
      <div className="chart">
        <div className="lineChart">
          <Linechart
            margins={margins}
            svgDimensions={svgDimensions}
            data={this.state.linechartData}
            onChangeYear={this.handleChangeYear.bind(this)}
          />
        </div>
        <div className="barChart">
          <Barchart
            margins={margins}
            svgDimensions={svgDimensions}
            data={this.state.barchartData}
          />
        </div>
      </div>
    );
  }
}
