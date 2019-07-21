import React, { PureComponent, HTMLAttributes } from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import { AppState } from "../../../store/initalState";
import { fetchInitiators } from "../../../store/actions";
import { Piechart, Error } from "../../../components";

export interface StateProps {
  /** Is loading data */
  isLoading: boolean;
  /** Has an error */
  hasError: boolean;
  /** Fetched and formatted data of the chart */
  data: Array<(string | number)[]>;
}

export interface DispatchProps {
  /** Action for fetching data. **/
  fetchInitiators: () => void;
}

export interface OwnProps {
  /** Title of the chart */
  title: string;
}

export type Props = StateProps &
  DispatchProps &
  OwnProps &
  HTMLAttributes<HTMLOrSVGElement>;

export class InitiatorsChartD3 extends PureComponent<Props> {
  componentDidMount() {
    this.props.fetchInitiators();
  }

  render() {
    const {
      data,
      title,
      isLoading,
      hasError,
      fetchInitiators,
      className
    } = this.props;
    return (
      <div className={classNames(className)}>
        <h3 className="horizontal-center">{title}</h3>
        <div className="chart-wrapper">
          {!hasError ? (
            <Piechart data={data} />
          ) : (
            <Error fetchData={fetchInitiators} isLoading={isLoading} />
          )}
        </div>
      </div>
    );
  }
}

export const InitiatorsChartD3Connected = connect(
  (state: AppState, ownProps: OwnProps): StateProps => ({
    isLoading: state.isLoading.INITIATORS,
    hasError: state.hasError.INITIATORS,
    data: state.data.INITIATORS
  }),
  {
    fetchInitiators
  }
)(InitiatorsChartD3);

export default InitiatorsChartD3;
