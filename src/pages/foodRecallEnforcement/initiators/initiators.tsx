import React, { FC, HTMLAttributes } from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import { Text, ChartHighcharts } from "../../../components";
import { AppState } from "../../../store/initialState";
import { fetchInitiators } from "../../../store/actions/actions";
import text from "../../../utils/data/text.json";

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
  fetchInitiators: () => void;
}

export interface OwnProps {}

export type Props = StateProps &
  DispatchProps &
  OwnProps &
  HTMLAttributes<HTMLDivElement>;

export const Initiators: FC<Props> = ({
  isLoading,
  hasError,
  chartOptions,
  fetchInitiators,
  className
}) => (
  <div className={classNames(className, "flex-two-column")}>
    <Text
      className="item"
      topicTag="h2"
      topic={text.initiators.topic}
      text={text.initiators.text}
      data-test="text"
    />
    <div className="item">
      <h3 className="horizontal-center">{text.initiators.chartTitle}</h3>
      <ChartHighcharts
        className="chart-wrapper horizontal-center"
        location="initiators"
        isLoading={isLoading}
        hasError={hasError}
        chartOptions={chartOptions}
        fetchHandler={fetchInitiators}
        data-test="chart"
      />
    </div>
  </div>
);

export const InitiatorsConnected = connect(
  (state: AppState, ownProps: OwnProps): StateProps => ({
    isLoading: state.initiators.isLoading,
    hasError: state.initiators.hasError,
    chartOptions: state.initiators.chartOptions
  }),
  {
    fetchInitiators
  }
)(Initiators);
