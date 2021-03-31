import { IAlign } from "./Align";
import { IBackground } from "./Background";
import { IBorder } from "./Border";
import { IBorderRadius } from "./BorderRadius";
import { IClearfix } from "./Clearfix";
import { IDisplay } from "./Display";
import { IMargin } from "./Margin";
import { IPadding } from "./Padding";

interface IGlobal
  extends IDisplay,
    IMargin,
    IPadding,
    IAlign,
    IBackground,
    IBorder,
    IBorderRadius,
    IClearfix {}

export default IGlobal;
