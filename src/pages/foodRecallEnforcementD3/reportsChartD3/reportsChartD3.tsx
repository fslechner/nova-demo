import React, { PureComponent, HTMLAttributes } from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import { AppState } from "../../../store/initalState";
import { fetchReportsD3 as fetchReportsD3Action } from "../../../store/actions";
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

/* const mockData = [
  { a: 1, b: 3 },
  { a: 2, b: 6 },
  { a: 3, b: 2 },
  { a: 4, b: 12 },
  { a: 5, b: 8 }
]; */

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
              <Linechart data={data} />
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
