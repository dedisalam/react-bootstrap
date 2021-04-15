import { SIZE } from "./types";

interface IButtonGroup {
  role?: string | undefined;
  ariaLabel?: string | undefined;
  size?: boolean | typeof SIZE[number];
  vertical?: boolean;
}

export default IButtonGroup;
