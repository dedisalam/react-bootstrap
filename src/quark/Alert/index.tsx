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
  if (bg) {
    styles.push(`alert-${bg}`);
  }
  if (dismissible) {
    styles.push("alert-dismissible");
    styles.push("fade");
    styles.push("show");
  }
  styles.push(...CreateGlobalStyles(props));

  return (
    <div className={styles.join(" ")} role="alert">
      {children}
    </div>
  );
};

Alert.defaultProps = {
  ...BaseDefaultProps,
  ...AlertDefaultProps,
  ...GlobalDefaultProps,
};

export default Alert;
