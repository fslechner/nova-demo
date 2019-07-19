import React, { PureComponent, HTMLAttributes } from "react";

export interface Props extends HTMLAttributes<HTMLDivElement> {}

export class Linechart extends PureComponent<Props> {
  /*   constructor(props: Props) {
    super(props);
  }
 */
  render() {
    return <svg />;
  }
}

export default Linechart;
