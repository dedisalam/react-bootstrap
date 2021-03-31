import React, { FC } from "react";
import { BaseDefaultProps, CreateBaseStyles, IBase } from "../../config";
import {
  CreateGlobalStyles,
  GlobalDefaultProps,
  IGlobal,
} from "../../config/Global";

interface Props extends IBase, IGlobal {
  href?: string;
}

const AlertLink: FC<Props> = (props: Props): JSX.Element => {
  const { children, href } = props;
  const styles = [];

  styles.push(...CreateBaseStyles(props));
  styles.push("alert-link");
  styles.push(...CreateGlobalStyles(props));

  return (
    <a href={href} className={styles.join(" ")}>
      {children}
    </a>
  );
};

AlertLink.defaultProps = {
  ...BaseDefaultProps,
  href: "index.html",
  ...GlobalDefaultProps,
};

export default AlertLink;
