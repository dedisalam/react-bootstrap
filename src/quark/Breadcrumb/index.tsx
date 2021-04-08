import React, { FC } from "react";
import { BaseDefaultProps, CreateBaseStyles, IBase } from "../../config";
import {
  CreateGlobalStyles,
  GlobalDefaultProps,
  IGlobal,
} from "../../config/Global";

interface Props extends IBase, IGlobal {}

const Breadcrumb: FC<Props> = (props: Props): JSX.Element => {
  const { children } = props;
  const styles = [];

  styles.push(...CreateBaseStyles(props));
  styles.push("breadcrumb");
  styles.push(...CreateGlobalStyles(props));

  const element = "ol";
  const attribute = {
    className: styles.filter((x) => x !== undefined).join(" "),
  };

  const element2 = "nav";
  const attribute2 = {
    "aria-label": "breadcrumb",
  };
  const children2 = React.createElement(element, attribute, children);

  return React.createElement(element2, attribute2, children2);
};

Breadcrumb.defaultProps = {
  ...BaseDefaultProps,
  ...GlobalDefaultProps,
};

export default Breadcrumb;
