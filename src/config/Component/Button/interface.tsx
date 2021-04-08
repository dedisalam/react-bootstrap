import { BG, SIZE } from "./types";

interface IButton {
  as?: string;
  bg?: typeof BG[number];
  size?: boolean | typeof SIZE[number];
  outline?: boolean;
  block?: boolean;
  active?: boolean;
  href?: string;
  disabled?: boolean | undefined;
  ariaPressed?: string | undefined;
  ariaDisabled?: string | undefined;
  role?: string | undefined;
  tabIndex?: number | undefined;
  type?: string | undefined;
  dataToggle?: string | undefined;
}

export default IButton;
