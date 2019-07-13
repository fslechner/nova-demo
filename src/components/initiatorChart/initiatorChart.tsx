import React, { HTMLAttributes, PureComponent } from "react";
import { connect } from "react-redux";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import classNames from "classnames";
import { Error } from "..";
import { fetchInitiator } from "../../actions";
import { AppState } from "../../typings";
require("highcharts-no-data-to-display")(Highcharts);

export interface Props extends HTMLAttributes<HTMLDivElement>, DispatchProps {
  /** Is loading data. */
  isLoading: boolean;
  /** Has an error. */
  hasError: boolean;
  /** Options and Data of the chart */
  chartOptions: Highcharts.Options;
}

export interface DispatchProps {
  /** Action for fetching data. **/
  fetchInitiator: () => void;
}

export class InitiatorChart extends PureComponent<Props> {
  private chartInstance: any;

  constructor(props: Props) {
    super(props);

    this.afterChartCreated = this.afterChartCreated.bind(this);
  }

  afterChartCreated(chart: any) {
    this.chartInstance = chart;
  }

  componentDidMount() {
    this.props.fetchInitiator();
  }

  render() {
    const {
      isLoading,
      hasError,
      chartOptions,
      fetchInitiator,
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
        <h3 className="horizontal-center">Enforcement initiators</h3>
        <div className="chart-wrapper horizontal-center">
          {!hasError ? (
            <HighchartsReact
              highcharts={Highcharts}
              options={chartOptions}
              callback={this.afterChartCreated}
            />
          ) : (
            <Error fetchData={fetchInitiator} isLoading={isLoading} />
          )}
        </div>
      </div>
    );
  }
}

export const InitiatorChartConnected = connect(
  (state: AppState) => ({
    isLoading: state.initiator.isLoading,
    hasError: state.initiator.hasError,
    chartOptions: state.initiator.chartOptions
  }),
  {
    fetchInitiator
  }
)(InitiatorChart);

export default InitiatorChart;
