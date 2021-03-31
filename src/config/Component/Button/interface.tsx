import { BG, SIZE } from "./types";

interface IButton {
  bg?: typeof BG[number];
  size?: boolean | typeof SIZE[number];
  outline?: boolean;
  block?: boolean;
}

export default IButton;
