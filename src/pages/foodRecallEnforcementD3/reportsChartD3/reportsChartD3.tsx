import React, { PureComponent, HTMLAttributes } from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import moment from "moment";
import _ from "lodash";
import { AppState } from "../../../store/initalState";
import { fetchReportsD3 as fetchReportsD3Action } from "../../../store/actions";
import { LinebarChart, Error, Search } from "../../../components";
import { number } from "prop-types";

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

    let countedByMonthOfYears: any = {};
    Object.entries(groupedByYear).forEach(year => {
      const groupByMonth = _.groupBy(year[1], (item: any) =>
        moment(item.x, "YYYYMMDD").format("M")
      );
      let dataMonthofYear: any = [];
      let i: number;
      for (i = 1; i < 13; i++) {
        dataMonthofYear.push({
          month: i,
          value: groupByMonth[i]
            ? _.sumBy(groupByMonth[i], (item: any) => item.y)
            : 0
        });
      }

      countedByMonthOfYears = {
        ...countedByMonthOfYears,
        [year[0]]: dataMonthofYear
      };
    });

    return (
      <div className={classNames(className)}>
        <div className="align-space-between">
          <h3 className="">{title}</h3>
          <Search
            className=""
            fetchData={fetchReportsD3}
            isLoading={isLoading}
            data-test="search"
          />
        </div>
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
