import React, { FC, ReactNode } from "react";
import { SharedProps } from "../typings";

export interface Props extends SharedProps {
  /** Nodes between this component **/
  children: ReactNode | ReactNode[];
  /** Type of a HTML-Tag this component will use as root tag**/
  type: keyof JSX.IntrinsicElements;
}

export const Tag: FC<Props> = ({ type, className, children, ...rest }) =>
  React.createElement(type, {
    dangerouslySetInnerHTML: { __html: children },
    className,
    ...rest
  });

export default Tag;
