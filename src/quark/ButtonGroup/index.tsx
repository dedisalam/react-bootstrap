import React, { FC } from "react";
import {
  BaseDefaultProps,
  ButtonGroupDefaultProps,
  CreateBaseStyles,
  IBase,
  IButtonGroup,
} from "../../config";
import {
  CreateGlobalStyles,
  GlobalDefaultProps,
  IGlobal,
} from "../../config/Global";

interface Props extends IBase, IButtonGroup, IGlobal {}

const ButtonGroup: FC<Props> = (props: Props): JSX.Element => {
  const { children, role, ariaLabel, size, vertical } = props;
  const styles = [];
  const element = "div";

  styles.push(...CreateBaseStyles(props));
  styles.push(vertical ? "btn-group-vertical" : "btn-group");
  styles.push(size ? `btn-group-${size}` : undefined);
  styles.push(...CreateGlobalStyles(props));

  const attribute = {
    className: styles.filter((x) => x !== undefined).join(" "),
    role,
    "aria-label": ariaLabel,
  };

  return React.createElement(element, attribute, children);
};

ButtonGroup.defaultProps = {
  ...BaseDefaultProps,
  ...ButtonGroupDefaultProps,
  ...GlobalDefaultProps,
};

export default ButtonGroup;
