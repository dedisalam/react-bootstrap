import React, { FC } from "react";
import { BaseDefaultProps, CreateBaseStyles, IBase } from "../../config";
import CreateAlertHeadingStyles from "../../config/Component/AlertHeading";
import {
  CreateGlobalStyles,
  GlobalDefaultProps,
  IGlobal,
} from "../../config/Global";

interface Props extends IBase, IGlobal {}

const AlertHeading: FC<Props> = (props: Props): JSX.Element => {
  const element = "h4";

  const { children } = props;
  const styles = [];

  styles.push(...CreateBaseStyles(props));
  styles.push(...CreateAlertHeadingStyles());
  styles.push(...CreateGlobalStyles(props));

  const attribute = {
    className: styles.join(" "),
  };

  return React.createElement(element, attribute, children);
};

AlertHeading.defaultProps = {
  ...BaseDefaultProps,
  ...GlobalDefaultProps,
};

export default AlertHeading;
