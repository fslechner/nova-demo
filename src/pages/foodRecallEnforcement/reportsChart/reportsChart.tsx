import React, { PureComponent, HTMLAttributes } from "react";
import { connect } from "react-redux";
import produce from "immer";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import classNames from "classnames";
import { Search, Error } from "../../../components";
import { fetchReports } from "../../../store/actions";
import { AppState } from "../../../store/initalState";
import { hcGlobal } from "../../../utils/charts/hcGlobal";
import { hcEnforcementReports } from "../../../utils/charts/hcEnforcementReports";

require("highcharts-no-data-to-display")(Highcharts);

export interface StateProps {
  /** Is loading data */
  isLoading: boolean;
  /** Has an error */
  hasError: boolean;
  /** Fetched and formatted data**/
  data: Array<(string | number)[]>;
}

export interface DispatchProps {
  /** Action for fetching data. **/
  fetchReports: (term?: string) => void;
}

export interface OwnProps {}

export type Props = StateProps &
  DispatchProps &
  OwnProps &
  HTMLAttributes<HTMLDivElement>;

interface State {
  chartOptions: Highcharts.Options;
}

export class ReportsChart extends PureComponent<Props, State> {
  private chartInstance: any;

  constructor(props: Props) {
    super(props);

    this.afterChartCreated = this.afterChartCreated.bind(this);
    this.state = {
      chartOptions: { ...hcGlobal, ...hcEnforcementReports }
    };
  }

  afterChartCreated(chart: any) {
    this.chartInstance = chart;
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if (prevState.chartOptions.series![0].data !== nextProps.data) {
      return produce(prevState, (draft: State) => {
        draft.chartOptions.series![0].data = nextProps.data;
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
            {!hasError ? (
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
  (state: AppState, ownProps: OwnProps): StateProps => ({
    isLoading: state.isLoading.REPORTS,
    hasError: state.hasError.REPORTS,
    data: state.data.REPORTS
  }),
  {
    fetchReports
  }
)(ReportsChart);

export default ReportsChart;
