import React, { FC } from "react";
import { BaseDefaultProps, CreateBaseStyles, IBase } from "../../config";
import {
  CreateGlobalStyles,
  GlobalDefaultProps,
  IGlobal,
} from "../../config/Global";

interface Props extends IBase, IGlobal {}

const AlertHeading: FC<Props> = (props: Props): JSX.Element => {
  const { children } = props;
  const styles = [];

  styles.push(...CreateBaseStyles(props));
  styles.push("alert-heading");
  styles.push(...CreateGlobalStyles(props));

  return <h4 className={styles.join(" ")}>{children}</h4>;
};

AlertHeading.defaultProps = {
  ...BaseDefaultProps,
  ...GlobalDefaultProps,
};

export default AlertHeading;
