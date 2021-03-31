import React, { FC } from "react";
import {
  BaseDefaultProps,
  ButtonDefaultProps,
  CreateBaseStyles,
  IBase,
  IButton,
} from "../../config";
import {
  CreateGlobalStyles,
  GlobalDefaultProps,
  IGlobal,
} from "../../config/Global";

interface Props extends IBase, IButton, IGlobal {}

const Button: FC<Props> = (props: Props): JSX.Element => {
  const { children, bg, size, outline, block } = props;
  const styles = [];

  styles.push(...CreateBaseStyles(props));
  styles.push("btn");
  if (outline) {
    styles.push(`btn-outline-${bg}`);
  } else {
    styles.push(`btn-${bg}`);
  }
  if (size) {
    styles.push(`btn-${size}`);
  }
  if (block) {
    styles.push(`btn-block`);
  }
  styles.push(...CreateGlobalStyles(props));

  return (
    <button type="button" className={styles.join(" ")}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  ...BaseDefaultProps,
  ...ButtonDefaultProps,
  ...GlobalDefaultProps,
};

export default Button;
