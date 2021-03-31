import React, { FC } from "react";
import { BaseDefaultProps, CreateBaseStyles, IBase } from "../../config";
import { BadgeDefaultProps, IBadge } from "../../config/Component/Badge";
import {
  CreateGlobalStyles,
  GlobalDefaultProps,
  IGlobal,
} from "../../config/Global";

interface Props extends IBase, IBadge, IGlobal {
  href?: string;
}

const Badge: FC<Props> = (props: Props): JSX.Element => {
  const { children, bg, pill, link, href } = props;

  const styles = [];

  styles.push(...CreateBaseStyles(props));
  styles.push("badge");
  if (pill) {
    styles.push("badge-pill");
  }
  if (bg) {
    styles.push(`badge-${bg}`);
  }
  styles.push(...CreateGlobalStyles(props));

  if (link) {
    return React.createElement(
      "a",
      {
        className: styles.join(" "),
        href,
      },
      children
    );
  }
  return React.createElement(
    "span",
    {
      className: styles.join(" "),
    },
    children
  );
};

Badge.defaultProps = {
  ...BaseDefaultProps,
  ...BadgeDefaultProps,
  href: "index.html",
  ...GlobalDefaultProps,
};

export default Badge;
