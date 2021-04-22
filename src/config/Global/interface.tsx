import { IAlign } from "./Align";
import { IBackground } from "./Background";
import { IBorder } from "./Border";
import { IDisplay } from "./Display";
import { ISpacing } from "./Spacing";

interface IGlobal extends IDisplay, ISpacing, IAlign, IBackground, IBorder {}

export default IGlobal;
