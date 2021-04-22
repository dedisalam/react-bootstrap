import { BORDERCOLOR, BORDERRADIUS } from "./types";

interface IBorder {
  border?: boolean;
  borderTop?: boolean;
  borderRight?: boolean;
  borderBottom?: boolean;
  borderLeft?: boolean;
  border0?: boolean;
  borderTop0?: boolean;
  borderRight0?: boolean;
  borderBottom0?: boolean;
  borderLeft0?: boolean;
  borderRadius?: boolean | typeof BORDERRADIUS[number];
  borderColor?: boolean | typeof BORDERCOLOR[number];
}

export default IBorder;
