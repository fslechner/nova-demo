import React, { PureComponent, HTMLAttributes } from "react";
import classNames from "classnames";
import sprite from "./spritemap.svg";

export type SizeProps = "xs" | "s" | "m" | "l" | "xl";

export type RotateProps = "90" | "180" | "270";

export type IconNameProps = "search" | "refresh";

export interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  size: SizeProps;
  /** This component does not support custom children. Use the `icon` prop. */
  children?: never;
  /** Name of the icon to show. */
  name?: IconNameProps;
  /** Title of the icon if you may set the `<title>` element as a tooltip. */
  title?: string;
  /** Rotation of the icon e.g. to use one Arrow-Icon for all directions. */
  rotate?: RotateProps;
  /** Spin of the icon. If set to true the icon works as a spinner. */
  spin?: boolean;
}

export class Icon extends PureComponent<Props> {
  static defaultProps: Props = {
    size: "s"
  };

  render() {
    const { name, rotate, size, title, spin, className, ...rest } = this.props;

    if (!name) {
      return null;
    }

    const rootClasses = classNames("fs-icon", className, {
      [`fs-icon--${size}`]: !!size,
      [`fs-icon--${rotate}`]: !!rotate,
      "fs-icon--spin": spin
    });

    return (
      <svg
        role="presentation"
        focusable="false"
        className={rootClasses}
        {...rest}
      >
        {title && <title>{title}</title>}
        {<use xlinkHref={`${sprite}#sprite-${name}`} />}
      </svg>
    );
  }
}

export default Icon;
