import React, { FC } from "react";
import { BaseDefaultProps, CreateBaseStyles, IBase } from "../../config";
import { BadgeDefaultProps, IBadge } from "../../config/Component/Badge";
import {
  CreateGlobalStyles,
  GlobalDefaultProps,
  IGlobal,
} from "../../config/Global";

interface Props extends IBase, IBadge, IGlobal {
  href?: string | undefined;
}

const Badge: FC<Props> = (props: Props): JSX.Element => {
  const { children, bg, pill, as, href } = props;

  const styles = [];

  styles.push(...CreateBaseStyles(props));
  styles.push("badge");
  styles.push(pill ? "badge-pill" : undefined);
  styles.push(bg ? `badge-${bg}` : undefined);
  styles.push(...CreateGlobalStyles(props));

  const element = as !== undefined ? as : "span";
  const attribute = {
    className: styles.filter((x) => x !== undefined).join(" "),
    href: as === "a" ? href : undefined,
  };

  return React.createElement(element, attribute, children);
};

Badge.defaultProps = {
  ...BaseDefaultProps,
  ...BadgeDefaultProps,
  ...GlobalDefaultProps,
};

export default Badge;
