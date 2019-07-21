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
    // https://stackoverflow.com/questions/43715179/group-array-of-object-by-dates
    const groupedByMonth = _.groupBy(data, (item: any) =>
      moment(item.x, "YYYYMMDD").format("MMM")
    );
    const groupedByYear = _.groupBy(data, (item: any) =>
      moment(item.x, "YYYYMMDD").format("YYYY")
    );
    console.log("goupedByMonth", groupedByMonth);
    console.log("goupedByYear", groupedByYear);

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
                linechartData={groupedByYear}
                barchartData={groupedByMonth}
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
