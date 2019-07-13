import React, { FC, HTMLAttributes } from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import { Text, Search, ChartHighstock } from "../../../components";
import { AppState } from "../../../typings";
import { fetchReports } from "../../../store/actions";
import text from "../../../static/data/text.json";

export interface StateProps {
  /** Is loading data. */
  isLoading: boolean;
  /** Has an error. */
  hasError: boolean;
  /** Options and Data of the chart */
  chartOptions: Highcharts.Options;
}

export interface DispatchProps {
  /** Action for fetching data. **/
  fetchReports: () => void;
}

export interface OwnProps {}

export type Props = StateProps &
  DispatchProps &
  OwnProps &
  HTMLAttributes<HTMLDivElement>;

export const Reports: FC<Props> = ({
  isLoading,
  hasError,
  chartOptions,
  fetchReports,
  className
}) => (
  <div className={classNames(className)}>
    <Text topicTag="h1" topic={text.reports.topic} text={text.reports.text} />
    <Search fetchData={fetchReports} isLoading={isLoading} />
    <div>
      <h3 className="horizontal-center">Enforcement reports over time</h3>
      <ChartHighstock
        className="chart-wrapper"
        isLoading={isLoading}
        hasError={hasError}
        chartOptions={chartOptions}
        fetchHandler={fetchReports}
      />
    </div>
  </div>
);

export const ReportsConnected = connect(
  (state: AppState): StateProps => ({
    isLoading: state.reports.isLoading,
    hasError: state.reports.hasError,
    chartOptions: state.reports.chartOptions
  }),
  {
    fetchReports
  }
)(Reports);
