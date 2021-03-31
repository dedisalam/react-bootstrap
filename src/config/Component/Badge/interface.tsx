import { BG } from "./types";

interface IBadge {
  bg?: typeof BG[number];
  pill?: boolean;
  link?: boolean;
}

export default IBadge;
