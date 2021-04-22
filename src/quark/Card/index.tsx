import React, { FC } from "react";
import {
  BaseDefaultProps,
  CardDefaultProps,
  CreateBaseStyles,
  IBase,
  ICard,
} from "../../config";
import {
  CreateGlobalStyles,
  GlobalDefaultProps,
  IGlobal,
} from "../../config/Global";

interface Props extends IBase, ICard, IGlobal {}

const Card: FC<Props> = (props: Props): JSX.Element => {
  const { children, style } = props;
  const styles = [];
  const element = "div";

  styles.push(...CreateBaseStyles(props));
  styles.push("card");
  styles.push(...CreateGlobalStyles(props));

  const attribute = {
    className: styles.filter((x) => x !== undefined).join(" "),
    style,
  };

  return React.createElement(element, attribute, children);
};

Card.defaultProps = {
  ...BaseDefaultProps,
  ...CardDefaultProps,
  ...GlobalDefaultProps,
};

export default Card;
