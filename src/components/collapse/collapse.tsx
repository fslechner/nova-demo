import React, { PureComponent, HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import produce from "immer";
import { Icon } from "..";
import { IconRotateProps, IconNameProps } from "../icon/icon";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** Labeltext of the collapse component. */
  text: string;
  /** Define an icon as hide/show indicator. Default is arrow. */
  iconName: IconNameProps;
  /** Rotation of the hide/show icon. Default is no rotation. */
  iconRotateClosed?: IconRotateProps;
  /** Rotation of the hide/show icon. Default is 90 degrees. */
  iconRotateOpen?: IconRotateProps;
  /** Define wether hide/shown icon toggle should be animated or not. */
  iconRotateAnimated?: boolean;
  /** Pass an component as close button. If no one is passed no close button will be shown. */
  closeItem?: ReactNode;
  /** Postion of the passed close button. Default is bottom-center */
  closePosition?: "top-right" | "top-center" | "bottom-center";
}

export interface State {
  isOpen: boolean;
}

export class Collapse extends PureComponent<Props, State> {
  state: State = {
    isOpen: false
  };

  toggleIsOpen = () =>
    this.setState(
      produce((draft: State) => {
        draft.isOpen = !draft.isOpen;
      })
    );

  render() {
    const { text, className, children, ...rest } = this.props;
    const { isOpen } = this.state;
    const rotate = isOpen ? "90" : "270";
    const rootClasses = classNames("collapse", className);
    const contentClasses = classNames("collapse__content", {
      [`collapse__content--closed`]: !isOpen,
      [`collapse__content--open`]: isOpen
    });

    return (
      <div className={rootClasses} onClick={this.toggleIsOpen} {...rest}>
        <div className="collapse__label">
          <div>{text}</div>
          <Icon name="arrow" size="m" rotate={rotate} />
        </div>
        <div className={contentClasses}>{children}</div>
      </div>
    );
  }
}
