import {
  DISPLAY,
  DISPLAYLG,
  DISPLAYMD,
  DISPLAYPRINT,
  DISPLAYSM,
  DISPLAYXL,
} from "./types";

interface IDisplay {
  display?: boolean | typeof DISPLAY[number];
  displaySM?: boolean | typeof DISPLAYSM[number];
  displayMD?: boolean | typeof DISPLAYMD[number];
  displayLG?: boolean | typeof DISPLAYLG[number];
  displayXL?: boolean | typeof DISPLAYXL[number];
  displayPrint?: boolean | typeof DISPLAYPRINT[number];
}

export default IDisplay;
