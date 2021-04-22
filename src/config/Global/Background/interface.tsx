import { BACKGROUND } from "./types";

interface IBackground {
  background?: boolean | typeof BACKGROUND[number];
}

export default IBackground;
