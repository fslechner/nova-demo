import React, { HTMLAttributes, PureComponent } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import classNames from "classnames";
import { Error } from "..";
require("highcharts-no-data-to-display")(Highcharts);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  location: string;
  /** Is loading data. */
  isLoading?: boolean;
  /** Has an error. */
  hasError?: boolean;
  /** Options and Data of the chart */
  chartOptions: Highcharts.Options;
  /** Action for fetching data. */
  fetchHandler: (location: string) => void;
}

export class ChartHighcharts extends PureComponent<Props> {
  private chartInstance: any;

  constructor(props: Props) {
    super(props);

    this.afterChartCreated = this.afterChartCreated.bind(this);
  }

  afterChartCreated(chart: any) {
    this.chartInstance = chart;
  }

  componentDidMount() {
    this.props.fetchHandler(this.props.location);
  }

  render() {
    const {
      location,
      isLoading,
      hasError,
      chartOptions,
      fetchHandler,
      className
    } = this.props;

    if (!hasError && this.chartInstance && isLoading) {
      this.chartInstance.showLoading();
    }
    if (!hasError && this.chartInstance && !isLoading) {
      this.chartInstance.hideLoading();
    }

    return (
      <div className={classNames(className)}>
        {!hasError ? (
          <HighchartsReact
            highcharts={Highcharts}
            options={chartOptions}
            callback={this.afterChartCreated}
          />
        ) : (
          <Error
            location={location}
            fetchData={fetchHandler}
            isLoading={isLoading}
          />
        )}
      </div>
    );
  }
}

export default ChartHighcharts;
