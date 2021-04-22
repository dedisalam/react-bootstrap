import React, { FC } from "react";
import { BaseDefaultProps, CreateBaseStyles, IBase } from "../../config";
import {
  CreateGlobalStyles,
  GlobalDefaultProps,
  IGlobal,
} from "../../config/Global";

interface Props extends IBase, IGlobal {}

const CardBody: FC<Props> = (props: Props): JSX.Element => {
  const { children } = props;
  const styles = [];
  const element = "div";

  styles.push(...CreateBaseStyles(props));
  styles.push("card-body");
  styles.push(...CreateGlobalStyles(props));

  const attribute = {
    className: styles.filter((x) => x !== undefined).join(" "),
  };

  return React.createElement(element, attribute, children);
};

CardBody.defaultProps = {
  ...BaseDefaultProps,
  ...GlobalDefaultProps,
};

export default CardBody;
