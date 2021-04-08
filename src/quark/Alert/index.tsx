import React, { FC } from "react";
import { BaseDefaultProps, CreateBaseStyles, IBase } from "../../config";
import { AlertDefaultProps, IAlert } from "../../config/Component/Alert";
import {
  CreateGlobalStyles,
  GlobalDefaultProps,
  IGlobal,
} from "../../config/Global";

interface Props extends IBase, IAlert, IGlobal {}

const Alert: FC<Props> = (props: Props): JSX.Element => {
  const { children, bg, dismissible } = props;
  const styles = [];

  styles.push(...CreateBaseStyles(props));
  styles.push("alert");
  styles.push(bg ? `alert-${bg}` : undefined);
  styles.push(dismissible ? "alert-dismissible" : undefined);
  styles.push(dismissible ? "fade" : undefined);
  styles.push(dismissible ? "show" : undefined);
  styles.push(...CreateGlobalStyles(props));

  const element = "div";
  const attribute = {
    className: styles.filter((x) => x !== undefined).join(" "),
    role: "alert",
  };

  return React.createElement(element, attribute, children);
};

Alert.defaultProps = {
  ...BaseDefaultProps,
  ...AlertDefaultProps,
  ...GlobalDefaultProps,
};

export default Alert;
