import React, { PureComponent, HTMLAttributes } from "react";
import classNames from "classnames";
import sprite from "./spritemap.svg";

export type IconSizeProps = "xs" | "s" | "m" | "l" | "xl";

export type IconRotateProps = null | "90" | "180" | "270";

export type IconNameProps = "search" | "refresh" | "arrow" | "close";

export interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  size: IconSizeProps;
  /** This component does not support custom children. Use the `icon` prop. */
  children?: never;
  /** Name of the icon to show. */
  name?: IconNameProps;
  /** Rotation of the icon e.g. to use one Arrow-Icon for all directions. */
  rotate?: IconRotateProps;
  /** Spin of the icon. If set to true the icon works as a spinner. */
  spin?: boolean;
}

export class Icon extends PureComponent<Props> {
  static defaultProps: Partial<Props> = {
    size: "s"
  };

  render() {
    const { name, rotate, size, spin, className, ...rest } = this.props;

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
        data-test="Icon"
        {...rest}
      >
        {<use xlinkHref={`${sprite}#sprite-${name}`} />}
      </svg>
    );
  }
}

export default Icon;
