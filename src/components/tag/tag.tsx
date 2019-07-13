import React, { FC, ReactNode, HTMLAttributes } from "react";

export interface Props extends HTMLAttributes<HTMLElement> {
  /** Nodes within this component **/
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
