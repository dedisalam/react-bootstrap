import React, { FC } from "react";
import { BaseDefaultProps, CreateBaseStyles, IBase } from "../../config";
import {
  AlertDefaultProps,
  CreateAlertStyles,
  IAlert,
} from "../../config/Component/Alert";
import {
  CreateGlobalStyles,
  GlobalDefaultProps,
  IGlobal,
} from "../../config/Global";

interface Props extends IBase, IAlert, IGlobal {}

const Alert: FC<Props> = (props: Props): JSX.Element => {
  const { children } = props;

  const element = "div";

  const styles = [];
  styles.push(...CreateBaseStyles(props));
  styles.push(...CreateAlertStyles(props));
  styles.push(...CreateGlobalStyles(props));

  const attribute = {
    className: styles.join(" "),
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
