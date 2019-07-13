import React, { HTMLAttributes } from "react";
import { connect } from "react-redux";
import produce from "immer";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import classNames from "classnames";
import { Error } from "..";
import { fetchInitiator } from "../../actions";
import { AppState } from "../../typings";
require("highcharts-no-data-to-display")(Highcharts);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** Is loading data */
  isLoading: boolean;
  /** Has an error */
  hasError: boolean;
  /** Fetched and formatted data**/
  initiatorData: [];
  /** Action for fetching data **/
  fetchInitiator: () => void;
}

interface State {
  chartOptions: Highcharts.Options;
}

export class InitiatorChart extends React.PureComponent<Props, State> {
  private chartInstance: any;

  constructor(props: Props) {
    super(props);

    this.afterChartCreated = this.afterChartCreated.bind(this);
    this.state = {
      chartOptions: {
        title: {
          text: ""
        },
        chart: {
          style: {
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen"
          },
          width: 400,
          height: 350
        },
        credits: {
          enabled: false
        },
        loading: {
          hideDuration: 500,
          showDuration: 300
        },
        series: [{ type: "pie", data: [] }]
      }
    };
  }

  afterChartCreated(chart: any) {
    this.chartInstance = chart;
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if (prevState.chartOptions.series![0].data !== nextProps.initiatorData) {
      return produce(prevState, draft => {
        draft.chartOptions.series![0].data = nextProps.initiatorData.map(
          (i: { term: string; count: number }) => [i.term, i.count]
        );
      });
    }
    return null;
  }

  componentDidMount() {
    this.props.fetchInitiator();
  }

  render() {
    const { isLoading, hasError, fetchInitiator, className } = this.props;

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
              options={this.state.chartOptions}
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
    initiatorData: state.initiator.data
  }),
  {
    fetchInitiator
  }
)(InitiatorChart);

export default InitiatorChart;
