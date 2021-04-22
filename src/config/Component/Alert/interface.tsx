import { BGCOLOR } from "./types";

interface IAlert {
  bg?: typeof BGCOLOR[number];
  dismissible?: boolean;
}

export default IAlert;
