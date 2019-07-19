import React, { PureComponent, HTMLAttributes } from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import { AppState } from "../../../store/initalState";
import { fetchReports } from "../../../store/actions";
import { Linechart, Error, Search } from "../../../components";

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

export interface OwnProps {
  /** Title of the chart */
  title: string;
}

export type Props = StateProps &
  DispatchProps &
  OwnProps &
  HTMLAttributes<HTMLDivElement>;

export class ReportsChartD3 extends PureComponent<Props> {
  render() {
    const { title, data, isLoading, hasError, className } = this.props;
    return (
      <div className={classNames(className)}>
        <Search
          fetchData={fetchReports}
          isLoading={isLoading}
          data-test="search"
        />
        <div>
          <h3 className="horizontal-center">{title}</h3>
          <div className="chart-wrapper">
            {!hasError ? (
              <Linechart />
            ) : (
              <Error fetchData={fetchReports} isLoading={isLoading} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export const ReportsChartD3Connected = connect(
  (state: AppState, ownProps: OwnProps): StateProps => ({
    isLoading: state.isLoading.REPORTS,
    hasError: state.hasError.REPORTS,
    data: state.data.REPORTS
  }),
  {
    fetchReports
  }
)(ReportsChartD3);

export default ReportsChartD3;
