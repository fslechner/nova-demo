import React, { PureComponent, HTMLAttributes } from "react";
import classNames from "classnames";
import { Piechart } from "../../../components";

export interface AppState extends HTMLAttributes<HTMLOrSVGElement> {}

export class InitiatorsChartD3 extends PureComponent<AppState> {
  render() {
    const { className } = this.props;

    const data = [
      { label: "part 1", value: "75" },
      { label: "part 2", value: "50" },
      { label: "part 3", value: "25" }
    ];

    return (
      <div className={classNames(className)}>
        <Piechart
          innerRadius={90}
          outerRadius={100}
          data={data}
          x={400}
          y={400}
        />
      </div>
    );
  }
}

/* export const InitiatorsChartD3Connected = connect(
  (state: AppState, ownProps: OwnProps): StateProps => ({
    isLoading: state.isLoading.INITIATORS,
    hasError: state.hasError.INITIATORS,
    data: state.data.INITIATORS
  }),
  {
    fetchInitiators
  }
)(InitiatorsChartD3);

export default InitiatorsChartD3; */
