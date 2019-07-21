import React, { PureComponent, HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import produce from "immer";
import { Icon } from "..";
import { IconRotateProps, IconNameProps, IconSizeProps } from "../icon/icon";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  // Wether the component should be expanded as default. */
  isOpen?: boolean;
  /** Labeltext of the closed collapse. */
  text: string;
  /** Labeltext of the opened collapse. */
  textOpen?: string;
  /** LabelText and LabelIcon left aling e.g as show more text button. */
  textInline: boolean;
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
  closePosition: "bottom-center" | "bottom-right";
  /** Define a label for screenreader */
  ariaLabel?: string;
}

export interface State {
  isOpen: boolean;
}

export class Collapse extends PureComponent<Props, State> {
  state: State = {
    isOpen: this.props.isOpen || false
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

  disableIsOpen = () => {
    this.setState(
      produce((draft: State) => {
        draft.isOpen = false;
      })
    );
  };

  render() {
    const {
      text,
      textOpen,
      textInline,
      iconName,
      iconSize,
      iconRotateClosed,
      iconRotateOpen,
      iconRotateAnimated,
      closeItem,
      closePosition,
      className,
      ariaLabel,
      children,
      ...rest
    } = this.props;
    const { isOpen } = this.state;
    const rotate = isOpen ? iconRotateOpen : iconRotateClosed;
    const rootClasses = classNames("collapse", className);
    const labelClasses = classNames("collapse__label", {
      [`collapse__label--text`]: textInline
    });
    const iconClasses = classNames("collapse__label__icon", {
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
    console.log("###", isOpen);
    return (
      <div className={rootClasses} {...rest}>
        <button
          onClick={this.toggleIsOpen}
          aria-label={ariaLabel}
          aria-expanded="false"
          className={labelClasses}
        >
          <div className="label__text">
            {isOpen && textOpen ? textOpen : text}
          </div>
          <Icon
            className={iconClasses}
            name={iconName}
            size={iconSize}
            rotate={rotate}
          />
        </button>
        <div className={contentClasses}>
          {children}
          {closeItem && (
            <span onClick={this.disableIsOpen} className={closeClasses}>
              {closeItem}
            </span>
          )}
        </div>
      </div>
    );
  }
}
