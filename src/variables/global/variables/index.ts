import ALIGN from './align';
import BG_COLOR from './bgColor';
import BORDER from './border';
import BORDER_RADIUS from './borderRadius';
import DISPLAY from './display';
import FLEX from './flex';
import FLOAT from './float';
import INTERACTION from './interaction';
import OPACITY from './opacity';
import OVERFLOW from './overflow';
import POSITION from './position';
import SHADOW from './shadow';
import SIZING from './sizing';
import SPACING from './spacing';
import TEXT from './text';
import VISIBILITY from './visibility';

const GLOBAL = {
  ...ALIGN,
  ...FLOAT,
  ...OPACITY,
  ...OVERFLOW,
  ...DISPLAY,
  ...SHADOW,
  ...POSITION,
  ...BORDER,
  ...SIZING,
  ...FLEX,
  ...SPACING,
  ...TEXT,
  ...BG_COLOR,
  ...INTERACTION,
  ...BORDER_RADIUS,
  ...VISIBILITY,
};
// eslint-disable-next-line no-console
console.log(GLOBAL);

export default GLOBAL;
