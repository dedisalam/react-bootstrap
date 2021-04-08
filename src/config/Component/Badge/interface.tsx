import { BG } from "./types";

interface IBadge {
  bg?: typeof BG[number];
  pill?: boolean;
  as?: string;
}

export default IBadge;
