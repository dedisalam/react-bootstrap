import { GlobalVar_, Obj_ } from './types';

const BACKGROUND = 'bg';
const SEPARATOR = '-';

const THEME_COLOR = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'danger',
  'light',
  'dark',
];

const UTILITIES_BACKGROUND = THEME_COLOR.concat([
  'black',
  'white',
  'body',
]);

const GRID_BREAKPOINTS = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'xxl',
];

const BACKGROUND_COLOR = (() => {
  const Obj: Obj_ = {};
  UTILITIES_BACKGROUND.forEach((color) => {
    Obj[color] = `${BACKGROUND}${SEPARATOR}${color}`;
  });
  Obj.transparent = `${BACKGROUND}${SEPARATOR}transparent`;
  return Obj;
})();

const GLOBAL:GlobalVar_ = {
  'background-color': BACKGROUND_COLOR,
};

export {
  BACKGROUND,
  SEPARATOR,
  GLOBAL,
  THEME_COLOR,
  UTILITIES_BACKGROUND,
  GRID_BREAKPOINTS,
  BACKGROUND_COLOR,
};
