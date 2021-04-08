import React, { FC } from "react";
import {
  BaseDefaultProps,
  ButtonDefaultProps,
  CreateBaseStyles,
  IBase,
  IButton,
} from "../../config";
import {
  CreateGlobalStyles,
  GlobalDefaultProps,
  IGlobal,
} from "../../config/Global";

interface Props extends IBase, IButton, IGlobal {}

const Button: FC<Props> = (props: Props): JSX.Element => {
  const {
    children,
    bg,
    size,
    outline,
    block,
    active,
    as,
    href,
    disabled,
    ariaPressed,
    ariaDisabled,
    role,
    tabIndex,
    type,
    dataToggle,
  } = props;
  const styles = [];
  const element = as !== undefined ? as : "button";

  styles.push(...CreateBaseStyles(props));
  styles.push("btn");
  styles.push(outline ? `btn-outline-${bg}` : `btn-${bg}`);
  styles.push(size ? `btn-${size}` : undefined);
  styles.push(block ? `btn-block` : undefined);
  styles.push(active ? "active" : undefined);
  styles.push(element === "a" && disabled ? "disabled" : undefined);
  styles.push(...CreateGlobalStyles(props));

  const attribute = {
    className: styles.filter((x) => x !== undefined).join(" "),
    type,
    href,
    role,
    "data-toggle": dataToggle,
    "aria-pressed": ariaPressed,
    "aria-disabled": ariaDisabled,
    disabled: element === "a" ? undefined : disabled,
    tabIndex,
  };

  return React.createElement(element, attribute, children);
};

Button.defaultProps = {
  ...BaseDefaultProps,
  ...ButtonDefaultProps,
  ...GlobalDefaultProps,
};

export default Button;
