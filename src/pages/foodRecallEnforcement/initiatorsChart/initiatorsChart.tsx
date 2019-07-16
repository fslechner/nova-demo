import React, { HTMLAttributes } from "react";
import { connect } from "react-redux";
import produce from "immer";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import classNames from "classnames";
import { Error } from "../../../components";
import { fetchInitiators } from "../../../store/actions";
import { AppState } from "../../../store";
import { hcGlobal } from "../../../utils/charts/hcGlobal";
import { hcEnforcementInitiators } from "../../../utils/charts/hcEnforcementInitiators";

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
  fetchInitiators: () => void;
}

export interface OwnProps {}

export type Props = StateProps &
  DispatchProps &
  OwnProps &
  HTMLAttributes<HTMLDivElement>;

interface State {
  chartOptions: Highcharts.Options;
}

export class InitiatorsChart extends React.PureComponent<Props, State> {
  private chartInstance: any;

  constructor(props: Props) {
    super(props);

    this.afterChartCreated = this.afterChartCreated.bind(this);
    this.state = {
      chartOptions: { ...hcGlobal, ...hcEnforcementInitiators }
    };
  }

  afterChartCreated(chart: any) {
    this.chartInstance = chart;
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if (prevState.chartOptions.series![0].data !== nextProps.data) {
      return produce(prevState, draft => {
        draft.chartOptions.series![0].data = nextProps.data;
      });
    }
    return null;
  }

  componentDidMount() {
    this.props.fetchInitiators();
  }

  render() {
    const { isLoading, hasError, fetchInitiators, className } = this.props;

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
            <Error fetchData={fetchInitiators} isLoading={isLoading} />
          )}
        </div>
      </div>
    );
  }
}

export const InitiatorsChartConnected = connect(
  (state: AppState, ownProps: OwnProps): StateProps => ({
    isLoading: state.isLoading.INITIATORS,
    hasError: state.hasError.INITIATORS,
    data: state.data.INITIATORS
  }),
  {
    fetchInitiators
  }
)(InitiatorsChart);

export default InitiatorsChart;
