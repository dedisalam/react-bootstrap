import React, { FC } from "react";
import { BaseDefaultProps, CreateBaseStyles, IBase } from "../../config";
import {
  CreateGlobalStyles,
  GlobalDefaultProps,
  IGlobal,
} from "../../config/Global";

interface Props extends IBase, IGlobal {}

const CardText: FC<Props> = (props: Props): JSX.Element => {
  const { children } = props;
  const styles = [];
  const element = "p";

  styles.push(...CreateBaseStyles(props));
  styles.push("card-text");
  styles.push(...CreateGlobalStyles(props));

  const attribute = {
    className: styles.filter((x) => x !== undefined).join(" "),
  };

  return React.createElement(element, attribute, children);
};

CardText.defaultProps = {
  ...BaseDefaultProps,
  ...GlobalDefaultProps,
};

export default CardText;
