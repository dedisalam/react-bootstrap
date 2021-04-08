import React, { FC } from "react";
import { BaseDefaultProps, CreateBaseStyles, IBase } from "../../config";
import {
  CreateGlobalStyles,
  GlobalDefaultProps,
  IGlobal,
} from "../../config/Global";

interface Props extends IBase, IGlobal {
  active?: boolean;
}

const BreadcrumbItem: FC<Props> = (props: Props): JSX.Element => {
  const { children, active } = props;
  const styles = [];

  styles.push(...CreateBaseStyles(props));
  styles.push("breadcrumb-item");
  styles.push(active ? "active" : undefined);
  styles.push(...CreateGlobalStyles(props));

  const element = "li";
  const attribute = {
    className: styles.filter((x) => x !== undefined).join(" "),
    "aria-current": active ? "page" : undefined,
  };

  return React.createElement(element, attribute, children);
};

BreadcrumbItem.defaultProps = {
  ...BaseDefaultProps,
  active: false,
  ...GlobalDefaultProps,
};

export default BreadcrumbItem;
