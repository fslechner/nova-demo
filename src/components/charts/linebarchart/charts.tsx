import React, { PureComponent } from "react";
import { Linechart } from "./linechart";
import { Barchart } from "./barchart";

interface State {
  linechartData: { year: number; income: number }[] | undefined;
  barchartData: { month: number; income: number }[] | undefined;
}

// Charts Component
export class Charts extends PureComponent<{}, State> {
  state: State = {
    linechartData: [],
    barchartData: []
  };

  componentWillMount() {
    this.setState({
      linechartData: [
        { year: 2012, income: 40 },
        { year: 2013, income: 80 },
        { year: 2014, income: 50 },
        { year: 2015, income: 100 },
        { year: 2016, income: 20 },
        { year: 2017, income: 120 }
      ],
      barchartData: [
        { month: 1, income: 20 },
        { month: 2, income: 30 },
        { month: 3, income: 100 },
        { month: 4, income: 50 },
        { month: 5, income: 60 },
        { month: 6, income: 80 },
        { month: 7, income: 30 },
        { month: 8, income: 90 },
        { month: 9, income: 5 },
        { month: 10, income: 23 },
        { month: 11, income: 76 },
        { month: 12, income: 49 }
      ]
    });
  }
  handleChangeYear(year: string) {
    let getData;
    if (year === "2012") {
      getData = [
        { month: 1, income: 30 },
        { month: 2, income: 40 },
        { month: 3, income: 10 },
        { month: 4, income: 60 },
        { month: 5, income: 70 },
        { month: 6, income: 90 },
        { month: 7, income: 40 },
        { month: 8, income: 100 },
        { month: 9, income: 15 },
        { month: 10, income: 33 },
        { month: 11, income: 86 },
        { month: 12, income: 59 }
      ];
    } else if (year === "2013") {
      getData = [
        { month: 1, income: 20 },
        { month: 2, income: 30 },
        { month: 3, income: 100 },
        { month: 4, income: 50 },
        { month: 5, income: 60 },
        { month: 6, income: 80 },
        { month: 7, income: 30 },
        { month: 8, income: 90 },
        { month: 9, income: 5 },
        { month: 10, income: 23 },
        { month: 11, income: 76 },
        { month: 12, income: 49 }
      ];
    } else if (year === "2014") {
      getData = [
        { month: 1, income: 10 },
        { month: 2, income: 20 },
        { month: 3, income: 30 },
        { month: 4, income: 40 },
        { month: 5, income: 50 },
        { month: 6, income: 70 },
        { month: 7, income: 20 },
        { month: 8, income: 80 },
        { month: 9, income: 25 },
        { month: 10, income: 13 },
        { month: 11, income: 66 },
        { month: 12, income: 39 }
      ];
    } else if (year === "2015") {
      getData = [
        { month: 1, income: 35 },
        { month: 2, income: 16 },
        { month: 3, income: 67 },
        { month: 4, income: 13 },
        { month: 5, income: 44 },
        { month: 6, income: 20 },
        { month: 7, income: 39 },
        { month: 8, income: 120 },
        { month: 9, income: 55 },
        { month: 10, income: 93 },
        { month: 11, income: 16 },
        { month: 12, income: 59 }
      ];
    } else if (year === "2016") {
      getData = [
        { month: 1, income: 20 },
        { month: 2, income: 30 },
        { month: 3, income: 100 },
        { month: 4, income: 50 },
        { month: 5, income: 60 },
        { month: 6, income: 80 },
        { month: 7, income: 30 },
        { month: 8, income: 90 },
        { month: 9, income: 5 },
        { month: 10, income: 23 },
        { month: 11, income: 76 },
        { month: 12, income: 49 }
      ];
    } else if (year === "2017") {
      getData = [
        { month: 1, income: 120 },
        { month: 2, income: 60 },
        { month: 3, income: 110 },
        { month: 4, income: 55 },
        { month: 5, income: 20 },
        { month: 6, income: 60 },
        { month: 7, income: 60 },
        { month: 8, income: 50 },
        { month: 9, income: 52 },
        { month: 10, income: 63 },
        { month: 11, income: 36 },
        { month: 12, income: 19 }
      ];
    }
    this.setState({
      barchartData: getData
    });
  }
  render() {
    const margins = { top: 50, right: 100, bottom: 50, left: 100 },
      svgDimensions = {
        height: window.screen.height / 2,
        width: window.screen.width / 2
      };
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
