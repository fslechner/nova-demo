import React, { PureComponent, ReactNode, HTMLAttributes } from "react";
import classNames from "classnames";
import { Icon } from "..";
import { IconNameProps, IconSizeProps, IconRotateProps } from "../icon/icon";

export type AlignProps = "before" | "after";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode | ReactNode[];
  /** IconName of the icon used before or after the text. */
  iconName?: IconNameProps;
  /** Alignment of the icon. Default is before. */
  iconAlign?: AlignProps;
  /** Size of the icon. */
  iconSize?: IconSizeProps;
  /** While isLoading is true the button is disabled */
  isLoading?: boolean;
  /** Should the icon spinning while isLoading is active? */
  isLoadingSpin?: boolean;
}

export class Button extends PureComponent<Props> {
  render() {
    const {
      iconName,
      iconSize,
      iconAlign,
      isLoading,
      isLoadingSpin,
      children,
      className,
      ...rest
    } = this.props;

    if (!children && !iconName) {
      return null;
    }

    const rootClasses = classNames("fs-btn", className, {
      [`fs-btn--${iconAlign}`]: !!iconAlign
    });

    return (
      <button disabled={isLoading} className={rootClasses} {...rest}>
        <Icon
          name={iconName}
          spin={isLoadingSpin && isLoading}
          size={iconSize}
        />
        {children && <span>{children}</span>}
      </button>
    );
  }
}

export default Button;
