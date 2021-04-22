import React, { FC } from "react";
import { BaseDefaultProps, CreateBaseStyles, IBase } from "../../config";
import {
  CreateGlobalStyles,
  GlobalDefaultProps,
  IGlobal,
} from "../../config/Global";

interface Props extends IBase, IGlobal {}

const CardTitle: FC<Props> = (props: Props): JSX.Element => {
  const { children } = props;
  const styles = [];
  const element = "h5";

  styles.push(...CreateBaseStyles(props));
  styles.push("card-title");
  styles.push(...CreateGlobalStyles(props));

  const attribute = {
    className: styles.filter((x) => x !== undefined).join(" "),
  };

  return React.createElement(element, attribute, children);
};

CardTitle.defaultProps = {
  ...BaseDefaultProps,
  ...GlobalDefaultProps,
};

export default CardTitle;
