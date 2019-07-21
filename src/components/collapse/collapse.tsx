import React, { PureComponent, HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import produce from "immer";
import { Icon } from "..";
import { IconRotateProps, IconNameProps, IconSizeProps } from "../icon/icon";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** Labeltext of the collapse component. */
  text: string;
  /** Define an icon as hide/show indicator. */
  iconName: IconNameProps;
  /** Define the size of hide/show indicator icon. */
  iconSize: IconSizeProps;
  /** Rotation of the hide/show icon. Default is no rotation. */
  iconRotateClosed?: IconRotateProps;
  /** Rotation of the hide/show icon. Default is 90 degrees. */
  iconRotateOpen: IconRotateProps;
  /** Define wether hide/shown icon toggle should be animated or not. */
  iconRotateAnimated: boolean;
  /** Pass an component as close button. If no one is passed no close button will be shown. */
  closeItem?: ReactNode;
  /** Postion of the passed close button.  */
  closePosition: "top-right" | "top-center" | "bottom-center";
}

export interface State {
  isOpen: boolean;
}

export class Collapse extends PureComponent<Props, State> {
  state: State = {
    isOpen: false
  };

  static defaultProps: Partial<Props> = {
    iconName: "arrow",
    iconSize: "m",
    iconRotateOpen: "90",
    iconRotateAnimated: true,
    closePosition: "bottom-center"
  };

  toggleIsOpen = () =>
    this.setState(
      produce((draft: State) => {
        draft.isOpen = !draft.isOpen;
      })
    );

  render() {
    const {
      text,
      iconName,
      iconSize,
      iconRotateClosed,
      iconRotateOpen,
      iconRotateAnimated,
      closeItem,
      closePosition,
      className,
      children,
      ...rest
    } = this.props;
    const { isOpen } = this.state;
    const rotate = isOpen ? iconRotateOpen : iconRotateClosed;
    const rootClasses = classNames("collapse", className);
    const labelClasses = classNames("collapse__label", {});
    const iconClasses = classNames("collapse__label__icon", {
      iconRotateAnimated,
      [`collapse__label__icon--animated`]: iconRotateAnimated
    });
    const contentClasses = classNames("collapse__content", {
      [`collapse__content--closed`]: !isOpen,
      [`collapse__content--open`]: isOpen
    });
    const closeClasses = classNames({
      [`collapse__close`]: !!closeItem,
      [`collapse__close--${closePosition}`]: closeItem && closePosition
    });

    return (
      <div className={rootClasses} onClick={this.toggleIsOpen} {...rest}>
        <div className={labelClasses}>
          <span className="label__text">{text}</span>
          <Icon
            className={iconClasses}
            name={iconName}
            size={iconSize}
            rotate={rotate}
          />
        </div>
        <div className={contentClasses}>
          {children}
          {closeItem && <span className={closeClasses}>{closeItem}</span>}
        </div>
      </div>
    );
  }
}
