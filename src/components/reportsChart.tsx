import React, { PureComponent, HTMLAttributes } from "react";
import { connect } from "react-redux";
import produce from "immer";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import moment from "moment";
import classNames from "classnames";
import { Search } from "./search";
import { Error } from "./error";
import { fetchReports } from "../actions";
import { AppState } from "../typings";

require("highcharts-no-data-to-display")(Highcharts);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** Is loading data */
  isLoading: boolean;
  /** Has an error */
  hasError: boolean;
  /** Fetched and formatted data**/
  reportsData: [];
  /** Action for fetching data **/
  fetchReports: (term?: string) => void;
}

interface State {
  chartOptions: Highcharts.Options;
}

export class ReportsChart extends PureComponent<Props, State> {
  private chartInstance: any;

  constructor(props: Props) {
    super(props);

    this.afterChartCreated = this.afterChartCreated.bind(this);
    this.state = {
      chartOptions: {
        chart: {
          height: 350,
          style: {
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen"
          }
        },

        credits: {
          enabled: false
        },
        loading: {
          hideDuration: 500,
          showDuration: 300
        },
        yAxis: {
          title: {
            text: null
          }
        },
        xAxis: {
          type: "datetime",
          labels: {
            formatter: function() {
              return moment(this.value).format("MMM YYYY");
            }
          },
          minTickInterval: moment.duration(1, "month").asMilliseconds()
        },
        series: [{ type: "line", data: [] }]
      }
    };
  }

  afterChartCreated(chart: any) {
    this.chartInstance = chart;
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if (prevState.chartOptions.series![0].data !== nextProps.reportsData) {
      return produce(prevState, draft => {
        draft.chartOptions.series![0].data = nextProps.reportsData.map(
          (i: { time: number; count: number }) => [
            moment(i.time, "YYYY-MM-DD").valueOf(),
            i.count
          ]
        );
      });
    }
    return null;
  }

  componentDidMount() {
    this.props.fetchReports("");
  }

  render() {
    const { isLoading, hasError, fetchReports, className } = this.props;

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
            {hasError ? (
              <HighchartsReact
                highcharts={Highcharts}
                options={this.state.chartOptions}
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
    reportsData: state.reports.data
  }),
  {
    fetchReports
  }
)(ReportsChart);

export default ReportsChart;
