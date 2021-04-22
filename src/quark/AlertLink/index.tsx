import React, { FC } from "react";
import { BaseDefaultProps, CreateBaseStyles, IBase } from "../../config";
import CreateAlertLinkStyles from "../../config/Component/AlertLink";
import {
  CreateGlobalStyles,
  GlobalDefaultProps,
  IGlobal,
} from "../../config/Global";

interface Props extends IBase, IGlobal {
  href?: string;
}

const AlertLink: FC<Props> = (props: Props): JSX.Element => {
  const element = "a";
  const { children, href } = props;
  const styles = [];

  styles.push(...CreateBaseStyles(props));
  styles.push(...CreateAlertLinkStyles());
  styles.push(...CreateGlobalStyles(props));

  const attribute = {
    href,
    className: styles.join(" "),
  };

  return React.createElement(element, attribute, children);
};

AlertLink.defaultProps = {
  ...BaseDefaultProps,
  href: "index.html",
  ...GlobalDefaultProps,
};

export default AlertLink;
