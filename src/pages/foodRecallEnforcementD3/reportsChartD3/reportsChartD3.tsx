import React, { PureComponent, HTMLAttributes } from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import moment from "moment";
import _ from "lodash";
import { AppState } from "../../../store/initalState";
import { fetchReportsD3 as fetchReportsD3Action } from "../../../store/actions";
import { LinebarChart, Error, Search } from "../../../components";

export interface StateProps {
  /** Is loading data */
  isLoading: boolean;
  /** Has an error */
  hasError: boolean;
  /** Fetched and formatted data**/
  data: any;
}

export interface DispatchProps {
  /** Action for fetching data. **/
  fetchReportsD3: (term?: string) => void;
}

export interface OwnProps {
  /** Title of the chart */
  title: string;
}

export type Props = StateProps &
  DispatchProps &
  OwnProps &
  HTMLAttributes<HTMLDivElement>;

export class ReportsChartD3 extends PureComponent<Props> {
  componentDidMount() {
    this.props.fetchReportsD3("");
  }

  render() {
    const {
      title,
      data,
      isLoading,
      hasError,
      fetchReportsD3,
      className
    } = this.props;

    if (!data) {
      return null;
    }

    const groupedByYear = _.groupBy(data, (item: any) =>
      moment(item.x, "YYYYMMDD").format("YYYY")
    );

    const countedByYears = Object.entries(groupedByYear).map((year: any) => {
      return {
        year: year[0],
        value: _.sumBy(year[1], (item: any) => item.y)
      };
    });

    let countedByMonthOfYears = {};
    Object.entries(groupedByYear).map(year => {
      const groupByMonth = _.groupBy(year[1], (item: any) =>
        moment(item.x, "YYYYMMDD").format("M")
      );
      const item = {
        [year[0]]: Object.entries(groupByMonth).map((month: any) => {
          return {
            month: parseInt(month[0]),
            value: _.sumBy(month[1], (item: any) => item.y)
          };
        })
      };
      countedByMonthOfYears = { ...countedByMonthOfYears, ...item };
    });

    console.log("countedByYears", countedByYears);
    console.log("countedByMonthOfYears", countedByMonthOfYears);

    return (
      <div className={classNames(className)}>
        <Search
          fetchData={fetchReportsD3}
          isLoading={isLoading}
          data-test="search"
        />
        <div>
          <h3 className="horizontal-center">{title}</h3>
          <div className="chart-wrapper">
            {!hasError ? (
              <LinebarChart
                linechartData={countedByYears}
                barchartData={countedByMonthOfYears}
              />
            ) : (
              <Error fetchData={fetchReportsD3} isLoading={isLoading} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export const ReportsChartD3Connected = connect(
  (state: AppState, ownProps: OwnProps): StateProps => ({
    isLoading: state.isLoading.REPORTS_D3,
    hasError: state.hasError.REPORTS_D3,
    data: state.data.REPORTS_D3
  }),
  {
    fetchReportsD3: fetchReportsD3Action
  }
)(ReportsChartD3);

export default ReportsChartD3;
