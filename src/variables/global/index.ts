import {
  GridBreakpoints_, Obj_, GlobalComp_, GlobalVar_,
} from './types';

const SEPARATOR = '-';
const GRID_BREAKPOINTS = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'xxl',
];

const BACKGROUND = 'bg';
const BACKGROUND_COLOR = {
  primary: `${BACKGROUND}${SEPARATOR}primary`,
  secondary: `${BACKGROUND}${SEPARATOR}secondary`,
  success: `${BACKGROUND}${SEPARATOR}success`,
  info: `${BACKGROUND}${SEPARATOR}info`,
  warning: `${BACKGROUND}${SEPARATOR}warning`,
  danger: `${BACKGROUND}${SEPARATOR}danger`,
  light: `${BACKGROUND}${SEPARATOR}light`,
  dark: `${BACKGROUND}${SEPARATOR}dark`,
  black: `${BACKGROUND}${SEPARATOR}black`,
  white: `${BACKGROUND}${SEPARATOR}white`,
  body: `${BACKGROUND}${SEPARATOR}body`,
  transparent: `${BACKGROUND}${SEPARATOR}transparent`,
};

const GLOBAL:GlobalVar_ = {
  'background-color': BACKGROUND_COLOR,
};

export {
  SEPARATOR,
  GRID_BREAKPOINTS,
  GLOBAL,
  type GridBreakpoints_,
  type Obj_,
  type GlobalVar_,
  type GlobalComp_,
};
