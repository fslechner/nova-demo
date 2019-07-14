import React, { FC, HTMLAttributes } from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import { Text, Search, ChartHighstock } from "../../../components";
import { AppState } from "../../../store/initialState";
import { fetchData } from "../../../store/actions/actions";
import text from "../../../utils/data/text.json";

export interface StateProps {
  /** Is loading data. */
  isLoading?: boolean;
  /** Has an error. */
  hasError?: boolean;
  /** Options and Data of the chart */
  chartOptions: Highcharts.Options;
}

export interface DispatchProps {
  /** Action for fetching data. **/
  fetchData: (location: string, term?: string) => void;
}

export interface OwnProps {
  term: string;
  location: string;
}

export type Props = StateProps &
  DispatchProps &
  OwnProps &
  HTMLAttributes<HTMLDivElement>;

export const Reports: FC<Props> = ({
  location,
  isLoading,
  hasError,
  chartOptions,
  fetchData,
  className
}) => (
  <div className={classNames(className)} data-test="Reports">
    <Text topicTag="h1" topic={text.reports.topic} text={text.reports.text} />
    <Search location="reports" fetchData={fetchData} isLoading={isLoading} />
    <div>
      <h3 className="horizontal-center">{text.reports.ChartTitle}</h3>
      <ChartHighstock
        location="reports"
        className="chart-wrapper"
        isLoading={isLoading}
        hasError={hasError}
        chartOptions={chartOptions}
        fetchHandler={fetchData}
      />
    </div>
  </div>
);

export const ReportsConnected = connect(
  (state: AppState, ownProps: OwnProps): StateProps => ({
    isLoading: state[ownProps.location].isLoading,
    hasError: state[ownProps.location].hasError,
    chartOptions: state[ownProps.location].chartOptions
  }),
  {
    fetchData
  }
)(Reports);
