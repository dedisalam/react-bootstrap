import {
  DisplayALL,
  DisplayLG,
  DisplayMD,
  DisplaySM,
  DisplayXS,
  DisplayXL,
} from "./types";

interface IDisplay {
  display?: boolean | typeof DisplayALL[number];
  displayXS?: boolean | typeof DisplayXS[number];
  displaySM?: boolean | typeof DisplaySM[number];
  displayMD?: boolean | typeof DisplayMD[number];
  displayLG?: boolean | typeof DisplayLG[number];
  displayXL?: boolean | typeof DisplayXL[number];
}

export default IDisplay;
