import { BG } from "./types";

interface IAlert {
  bg?: typeof BG[number];
  dismissible?: boolean;
}

export default IAlert;
