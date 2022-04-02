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

const SPACERS = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
];

// Background
const BACKGROUND_COLOR = (() => {
  const Obj: Obj_ = {};
  UTILITIES_BACKGROUND.forEach((color) => {
    Obj[color] = `${BACKGROUND}${SEPARATOR}${color}`;
  });
  Obj.transparent = `${BACKGROUND}${SEPARATOR}transparent`;
  return Obj;
})();

// Margin
type Margin = {
  [key: string]: {
    [key: string]: {
      [key: string]: string;
    };
  };
};
const MARGIN_BASE:Obj_ = {
  all: 'm',
  x: 'mx',
  y: 'my',
  top: 'mt',
  end: 'me',
  bottom: 'mb',
  start: 'ms',
};
const MARGIN = (() => {
  const Obj: Margin = {};

  Object.keys(MARGIN_BASE).forEach((BASE) => {
    Obj[BASE] = {};
    GRID_BREAKPOINTS.forEach((BREAKPOINT) => {
      if (BREAKPOINT !== 'xs') {
        Obj[BASE][BREAKPOINT] = {};
        SPACERS.forEach((SPACER) => {
          Obj[BASE][BREAKPOINT][SPACER] = `${MARGIN_BASE[BASE]}${SEPARATOR}${BREAKPOINT}${SEPARATOR}${SPACER}`;
        });
        Obj[BASE][BREAKPOINT].auto = `${MARGIN_BASE[BASE]}${SEPARATOR}${BREAKPOINT}${SEPARATOR}auto`;
      }
    });

    Obj[BASE].all = {};
    SPACERS.forEach((SPACER) => {
      Obj[BASE].all[SPACER] = `${MARGIN_BASE[BASE]}${SEPARATOR}${SPACER}`;
    });
    Obj[BASE].all.auto = `${MARGIN_BASE[BASE]}${SEPARATOR}auto`;
  });

  return Obj;
})();
type AA = {
  [key: string]: {
    [key: string]: string;
  };
};
function margins() {
  const Obj: AA = {};
  Object.keys(MARGIN).forEach((BASE) => {
    if (BASE !== 'all') {
      Object.keys(MARGIN[BASE]).forEach((BREAKPOINT) => {
        if (BREAKPOINT !== 'all') {
          Obj[`margin-${BASE}-${BREAKPOINT}`] = MARGIN[BASE][BREAKPOINT];
        }
        Obj[`margin-${BASE}`] = MARGIN[BASE].all;
      });
    }
    Obj.margin = MARGIN.all.all;
  });
  return Obj;
}
// eslint-disable-next-line no-console
const GLOBAL:GlobalVar_ = {
  'background-color': BACKGROUND_COLOR,
  // 'margin-end': margins(),
  margin: {},
  'margin-sm': {},
  'margin-md': {},
  'margin-lg': {},
  'margin-xl': {},
  'margin-xxl': {},
  'margin-top': {},
  'margin-top-sm': {},
  'margin-top-md': {},
  'margin-top-lg': {},
  'margin-top-xl': {},
  'margin-top-xxl': {},
  'margin-end': {},
  'margin-end-sm': {},
  'margin-end-md': {},
  'margin-end-lg': {},
  'margin-end-xl': {},
  'margin-end-xxl': {},
  'margin-bottom': {},
  'margin-bottom-sm': {},
  'margin-bottom-md': {},
  'margin-bottom-lg': {},
  'margin-bottom-xl': {},
  'margin-bottom-xxl': {},
  'margin-start': {},
  'margin-start-sm': {},
  'margin-start-md': {},
  'margin-start-lg': {},
  'margin-start-xl': {},
  'margin-start-xxl': {},
  'margin-x': {},
  'margin-x-sm': {},
  'margin-x-md': {},
  'margin-x-lg': {},
  'margin-x-xl': {},
  'margin-x-xxl': {},
  'margin-y': {},
  'margin-y-sm': {},
  'margin-y-md': {},
  'margin-y-lg': {},
  'margin-y-xl': {},
  'margin-y-xxl': {},
  ...margins(),
};

export {
  SEPARATOR,
  GLOBAL,
  GRID_BREAKPOINTS,
};
