import React, { PureComponent, HTMLAttributes } from "react";
import classNames from "classnames";

export interface Props extends HTMLAttributes<HTMLDivElement> {}

export class ReportsChartD3 extends PureComponent<Props> {
  render() {
    const { className } = this.props;
    return <div className={classNames(className)}>ReportsChartD3</div>;
  }
}
