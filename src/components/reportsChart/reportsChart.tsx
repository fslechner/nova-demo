import React, { PureComponent, HTMLAttributes } from "react";
import { connect } from "react-redux";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import classNames from "classnames";
import { Error, Search } from "..";
import { fetchReports } from "../../actions";
import { AppState } from "../../typings";

require("highcharts-no-data-to-display")(Highcharts);

export interface Props extends HTMLAttributes<HTMLDivElement>, DispatchProps {
  /** Is loading data */
  isLoading: boolean;
  /** Has an error */
  hasError: boolean;
  /** Options and Data of the chart */
  chartOptions: Highcharts.Options;
}

export interface DispatchProps {
  /** Action for fetching data */
  fetchReports: (term?: string) => void;
}

export class ReportsChart extends PureComponent<Props> {
  private chartInstance: any;

  constructor(props: Props) {
    super(props);
    this.afterChartCreated = this.afterChartCreated.bind(this);
  }

  afterChartCreated(chart: any) {
    this.chartInstance = chart;
  }

  componentDidMount() {
    this.props.fetchReports("");
  }

  render() {
    const {
      isLoading,
      hasError,
      fetchReports,
      chartOptions,
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
        <Search fetchData={fetchReports} isLoading={isLoading} />
        <div>
          <h3 className="horizontal-center">Enforcement reports over time</h3>
          <div className="chart-wrapper">
            {!hasError ? (
              <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
                constructorType={"stockChart"}
                callback={this.afterChartCreated}
              />
            ) : (
              <Error fetchData={fetchReports} isLoading={isLoading} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export const ReportsChartConnected = connect(
  (state: AppState) => ({
    isLoading: state.reports.isLoading,
    hasError: state.reports.hasError,
    chartOptions: state.reports.chartOptions
  }),
  {
    fetchReports
  }
)(ReportsChart);

export default ReportsChart;
