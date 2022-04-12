// Color system

// scss-docs-start gray-color-variables
export const WHITE: string = '#fff';
export const GRAY_100: string = '#f8f9fa';
export const GRAY_200: string = '#e9ecef';
export const GRAY_300: string = '#dee2e6';
export const GRAY_400: string = '#ced4da';
export const GRAY_500: string = '#adb5bd';
export const GRAY_600: string = '#6c757d';
export const GRAY_700: string = '#495057';
export const GRAY_800: string = '#343a40';
export const GRAY_900: string = '#212529';
export const BLACK: string = '#000';
// scss-docs-end gray-color-variables

// fusv-disable
// scss-docs-start gray-colors-map
export type Grays = {
  100: string,
  200: string,
  300: string,
  400: string,
  500: string,
  600: string,
  700: string,
  800: string,
  900: string,
};
export const GRAYS: Grays = {
  100: GRAY_100,
  200: GRAY_200,
  300: GRAY_300,
  400: GRAY_400,
  500: GRAY_500,
  600: GRAY_600,
  700: GRAY_700,
  800: GRAY_800,
  900: GRAY_900,
};
// scss-docs-end gray-colors-map
// fusv-enable

// scss-docs-start color-variables
export const BLUE: string = '#0d6efd';
export const INDIGO: string = '#6610f2';
export const PURPLE: string = '#6f42c1';
export const PINK: string = '#d63384';
export const RED: string = '#dc3545';
export const ORANGE: string = '#fd7e14';
export const YELLOW: string = '#ffc107';
export const GREEN: string = '#198754';
export const TEAL: string = '#20c997';
export const CYAN: string = '#0dcaf0';
// scss-docs-end color-variables

// scss-docs-start colors-map
export type Colors = {
  blue: string,
  indigo: string,
  purple: string,
  pink: string,
  red: string,
  orange: string,
  yellow: string,
  green: string,
  teal: string,
  cyan: string,
  white: string,
  gray: string,
  gray_dark: string,
};
export const COLORS: Colors = {
  blue: BLUE,
  indigo: INDIGO,
  purple: PURPLE,
  pink: PINK,
  red: RED,
  orange: ORANGE,
  yellow: YELLOW,
  green: GREEN,
  teal: TEAL,
  cyan: CYAN,
  white: WHITE,
  gray: GRAY_600,
  gray_dark: GRAY_800,
};
// scss-docs-end colors-map

// scss-docs-start theme-color-variables
export const PRIMARY = BLUE;
export const SECONDARY = GRAY_600;
export const SUCCESS = GREEN;
export const INFO = CYAN;
export const WARNING = YELLOW;
export const DANGER = RED;
export const LIGHT = GRAY_100;
export const DARK = GRAY_900;
// scss-docs-end theme-color-variables

// scss-docs-start theme-colors-map
export type ThemeColors = {
  primary: string,
  secondary: string,
  success: string,
  info: string,
  warning: string,
  danger: string,
  light: string,
  dark: string,
};
export const THEME_COLORS: ThemeColors = {
  primary: PRIMARY,
  secondary: SECONDARY,
  success: SUCCESS,
  info: INFO,
  warning: WARNING,
  danger: DANGER,
  light: LIGHT,
  dark: DARK,
};
// scss-docs-end theme-colors-map

// scss-docs-start theme-colors-rgb
// theme-colors-rgb: map-loop(theme-colors, to-rgb, "value");
// scss-docs-end theme-colors-rgb

// See https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast
export const MIN_CONTRAST_RATIO = 4.5;

// Customize the light and dark text colors for use in our color contrast function.
export const COLOR_CONTRAST_DARK = BLACK;
export const COLOR_CONTRAST_LIGHT = WHITE;

// fusv-disable
export const BLUE_100: string = `tint-color(${BLUE}, 80%)`;
export const BLUE_200: string = `tint-color(${BLUE}, 60%)`;
export const BLUE_300: string = `tint-color(${BLUE}, 40%)`;
export const BLUE_400: string = `tint-color(${BLUE}, 20%)`;
export const BLUE_500 = BLUE;
export const BLUE_600: string = `shade-color(${BLUE}, 20%)`;
export const BLUE_700: string = `shade-color(${BLUE}, 40%)`;
export const BLUE_800: string = `shade-color(${BLUE}, 60%)`;
export const BLUE_900: string = `shade-color(${BLUE}, 80%)`;

export const INDIGO_100: string = `tint-color(${INDIGO}, 80%)`;
export const INDIGO_200: string = `tint-color(${INDIGO}, 60%)`;
export const INDIGO_300: string = `tint-color(${INDIGO}, 40%)`;
export const INDIGO_400: string = `tint-color(${INDIGO}, 20%)`;
export const INDIGO_500 = INDIGO;
export const INDIGO_600: string = `shade-color(${INDIGO}, 20%)`;
export const INDIGO_700: string = `shade-color(${INDIGO}, 40%)`;
export const INDIGO_800: string = `shade-color(${INDIGO}, 60%)`;
export const INDIGO_900: string = `shade-color(${INDIGO}, 80%)`;

export const PURPLE_100: string = `tint-color(${PURPLE}, 80%)`;
export const PURPLE_200: string = `tint-color(${PURPLE}, 60%)`;
export const PURPLE_300: string = `tint-color(${PURPLE}, 40%)`;
export const PURPLE_400: string = `tint-color(${PURPLE}, 20%)`;
export const PURPLE_500 = PURPLE;
export const PURPLE_600: string = `shade-color(${PURPLE}, 20%)`;
export const PURPLE_700: string = `shade-color(${PURPLE}, 40%)`;
export const PURPLE_800: string = `shade-color(${PURPLE}, 60%)`;
export const PURPLE_900: string = `shade-color(${PURPLE}, 80%)`;

export const PINK_100: string = `tint-color(${PINK}, 80%)`;
export const PINK_200: string = `tint-color(${PINK}, 60%)`;
export const PINK_300: string = `tint-color(${PINK}, 40%)`;
export const PINK_400: string = `tint-color(${PINK}, 20%)`;
export const PINK_500 = PINK;
export const PINK_600: string = `shade-color(${PINK}, 20%)`;
export const PINK_700: string = `shade-color(${PINK}, 40%)`;
export const PINK_800: string = `shade-color(${PINK}, 60%)`;
export const PINK_900: string = `shade-color(${PINK}, 80%)`;

export const RED_100: string = `tint-color(${RED}, 80%)`;
export const RED_200: string = `tint-color(${RED}, 60%)`;
export const RED_300: string = `tint-color(${RED}, 40%)`;
export const RED_400: string = `tint-color(${RED}, 20%)`;
export const RED_500 = RED;
export const RED_600: string = `shade-color(${RED}, 20%)`;
export const RED_700: string = `shade-color(${RED}, 40%)`;
export const RED_800: string = `shade-color(${RED}, 60%)`;
export const RED_900: string = `shade-color(${RED}, 80%)`;

export const ORANGE_100: string = `tint-color(${ORANGE}, 80%)`;
export const ORANGE_200: string = `tint-color(${ORANGE}, 60%)`;
export const ORANGE_300: string = `tint-color(${ORANGE}, 40%)`;
export const ORANGE_400: string = `tint-color(${ORANGE}, 20%)`;
export const ORANGE_500 = ORANGE;
export const ORANGE_600: string = `shade-color(${ORANGE}, 20%)`;
export const ORANGE_700: string = `shade-color(${ORANGE}, 40%)`;
export const ORANGE_800: string = `shade-color(${ORANGE}, 60%)`;
export const ORANGE_900: string = `shade-color(${ORANGE}, 80%)`;

export const YELLOW_100: string = `tint-color(${YELLOW}, 80%)`;
export const YELLOW_200: string = `tint-color(${YELLOW}, 60%)`;
export const YELLOW_300: string = `tint-color(${YELLOW}, 40%)`;
export const YELLOW_400: string = `tint-color(${YELLOW}, 20%)`;
export const YELLOW_500 = YELLOW;
export const YELLOW_600: string = `shade-color(${YELLOW}, 20%)`;
export const YELLOW_700: string = `shade-color(${YELLOW}, 40%)`;
export const YELLOW_800: string = `shade-color(${YELLOW}, 60%)`;
export const YELLOW_900: string = `shade-color(${YELLOW}, 80%)`;

export const GREEN_100: string = `tint-color(${GREEN}, 80%)`;
export const GREEN_200: string = `tint-color(${GREEN}, 60%)`;
export const GREEN_300: string = `tint-color(${GREEN}, 40%)`;
export const GREEN_400: string = `tint-color(${GREEN}, 20%)`;
export const GREEN_500 = GREEN;
export const GREEN_600: string = `shade-color(${GREEN}, 20%)`;
export const GREEN_700: string = `shade-color(${GREEN}, 40%)`;
export const GREEN_800: string = `shade-color(${GREEN}, 60%)`;
export const GREEN_900: string = `shade-color(${GREEN}, 80%)`;

export const TEAL_100: string = `tint-color(${TEAL}, 80%)`;
export const TEAL_200: string = `tint-color(${TEAL}, 60%)`;
export const TEAL_300: string = `tint-color(${TEAL}, 40%)`;
export const TEAL_400: string = `tint-color(${TEAL}, 20%)`;
export const TEAL_500 = TEAL;
export const TEAL_600: string = `shade-color(${TEAL}, 20%)`;
export const TEAL_700: string = `shade-color(${TEAL}, 40%)`;
export const TEAL_800: string = `shade-color(${TEAL}, 60%)`;
export const TEAL_900: string = `shade-color(${TEAL}, 80%)`;

export const CYAN_100: string = `tint-color(${CYAN}, 80%)`;
export const CYAN_200: string = `tint-color(${CYAN}, 60%)`;
export const CYAN_300: string = `tint-color(${CYAN}, 40%)`;
export const CYAN_400: string = `tint-color(${CYAN}, 20%)`;
export const CYAN_500 = CYAN;
export const CYAN_600: string = `shade-color(${CYAN}, 20%)`;
export const CYAN_700: string = `shade-color(${CYAN}, 40%)`;
export const CYAN_800: string = `shade-color(${CYAN}, 60%)`;
export const CYAN_900: string = `shade-color(${CYAN}, 80%)`;

export type Blues = {
  'blue-100': string,
  'blue-200': string,
  'blue-300': string,
  'blue-400': string,
  'blue-500': string,
  'blue-600': string,
  'blue-700': string,
  'blue-800': string,
  'blue-900': string,
};
export const BLUES: Blues = {
  'blue-100': BLUE_100,
  'blue-200': BLUE_200,
  'blue-300': BLUE_300,
  'blue-400': BLUE_400,
  'blue-500': BLUE_500,
  'blue-600': BLUE_600,
  'blue-700': BLUE_700,
  'blue-800': BLUE_800,
  'blue-900': BLUE_900,
};

export type Indigos = {
  'indigo-100': string,
  'indigo-200': string,
  'indigo-300': string,
  'indigo-400': string,
  'indigo-500': string,
  'indigo-600': string,
  'indigo-700': string,
  'indigo-800': string,
  'indigo-900': string,
};
export const INDIGOS: Indigos = {
  'indigo-100': INDIGO_100,
  'indigo-200': INDIGO_200,
  'indigo-300': INDIGO_300,
  'indigo-400': INDIGO_400,
  'indigo-500': INDIGO_500,
  'indigo-600': INDIGO_600,
  'indigo-700': INDIGO_700,
  'indigo-800': INDIGO_800,
  'indigo-900': INDIGO_900,
};

export type Purples = {
  'purple-100': string,
  'purple-200': string,
  'purple-300': string,
  'purple-400': string,
  'purple-500': string,
  'purple-600': string,
  'purple-700': string,
  'purple-800': string,
  'purple-900': string,
};
export const PURPLES: Purples = {
  'purple-100': PURPLE_200,
  'purple-200': PURPLE_100,
  'purple-300': PURPLE_300,
  'purple-400': PURPLE_400,
  'purple-500': PURPLE_500,
  'purple-600': PURPLE_600,
  'purple-700': PURPLE_700,
  'purple-800': PURPLE_800,
  'purple-900': PURPLE_900,
};

export type Pinks = {
  'pink-100': string,
  'pink-200': string,
  'pink-300': string,
  'pink-400': string,
  'pink-500': string,
  'pink-600': string,
  'pink-700': string,
  'pink-800': string,
  'pink-900': string,
};
export const PINKS: Pinks = {
  'pink-100': PINK_100,
  'pink-200': PINK_200,
  'pink-300': PINK_300,
  'pink-400': PINK_400,
  'pink-500': PINK_500,
  'pink-600': PINK_600,
  'pink-700': PINK_700,
  'pink-800': PINK_800,
  'pink-900': PINK_900,
};

export type Reds = {
  'red-100': string,
  'red-200': string,
  'red-300': string,
  'red-400': string,
  'red-500': string,
  'red-600': string,
  'red-700': string,
  'red-800': string,
  'red-900': string,
};
export const REDS: Reds = {
  'red-100': RED_100,
  'red-200': RED_200,
  'red-300': RED_300,
  'red-400': RED_400,
  'red-500': RED_500,
  'red-600': RED_600,
  'red-700': RED_700,
  'red-800': RED_800,
  'red-900': RED_900,
};

export type Oranges = {
  'orange-100': string,
  'orange-200': string,
  'orange-300': string,
  'orange-400': string,
  'orange-500': string,
  'orange-600': string,
  'orange-700': string,
  'orange-800': string,
  'orange-900': string,
};
export const ORANGES: Oranges = {
  'orange-100': ORANGE_100,
  'orange-200': ORANGE_200,
  'orange-300': ORANGE_300,
  'orange-400': ORANGE_400,
  'orange-500': ORANGE_500,
  'orange-600': ORANGE_600,
  'orange-700': ORANGE_700,
  'orange-800': ORANGE_800,
  'orange-900': ORANGE_900,
};

export type Yellows = {
  'yellow-100': string,
  'yellow-200': string,
  'yellow-300': string,
  'yellow-400': string,
  'yellow-500': string,
  'yellow-600': string,
  'yellow-700': string,
  'yellow-800': string,
  'yellow-900': string,
};
export const YELLOWS: Yellows = {
  'yellow-100': YELLOW_100,
  'yellow-200': YELLOW_200,
  'yellow-300': YELLOW_300,
  'yellow-400': YELLOW_400,
  'yellow-500': YELLOW_500,
  'yellow-600': YELLOW_600,
  'yellow-700': YELLOW_700,
  'yellow-800': YELLOW_800,
  'yellow-900': YELLOW_900,
};

export type Greens = {
  'green-100': string,
  'green-200': string,
  'green-300': string,
  'green-400': string,
  'green-500': string,
  'green-600': string,
  'green-700': string,
  'green-800': string,
  'green-900': string,
};
export const GREENS: Greens = {
  'green-100': GREEN_100,
  'green-200': GREEN_200,
  'green-300': GREEN_300,
  'green-400': GREEN_400,
  'green-500': GREEN_500,
  'green-600': GREEN_600,
  'green-700': GREEN_700,
  'green-800': GREEN_800,
  'green-900': GREEN_900,
};

export type Teals = {
  'teal-100': string,
  'teal-200': string,
  'teal-300': string,
  'teal-400': string,
  'teal-500': string,
  'teal-600': string,
  'teal-700': string,
  'teal-800': string,
  'teal-900': string,
};
export const TEALS: Teals = {
  'teal-100': TEAL_100,
  'teal-200': TEAL_200,
  'teal-300': TEAL_300,
  'teal-400': TEAL_400,
  'teal-500': TEAL_500,
  'teal-600': TEAL_600,
  'teal-700': TEAL_700,
  'teal-800': TEAL_800,
  'teal-900': TEAL_900,
};

export type Cyans = {
  'cyan-100': string,
  'cyan-200': string,
  'cyan-300': string,
  'cyan-400': string,
  'cyan-500': string,
  'cyan-600': string,
  'cyan-700': string,
  'cyan-800': string,
  'cyan-900': string,
};
export const CYANS: Cyans = {
  'cyan-100': CYAN_100,
  'cyan-200': CYAN_200,
  'cyan-300': CYAN_300,
  'cyan-400': CYAN_400,
  'cyan-500': CYAN_500,
  'cyan-600': CYAN_600,
  'cyan-700': CYAN_700,
  'cyan-800': CYAN_800,
  'cyan-900': CYAN_900,
};
// fusv-enable

// Characters which are escaped by the escape-svg function
export const ESCAPED_CHARACTERS = [
  ['<', '%3c'],
  ['>', '%3e'],
  ['#', '%23'],
  ['(', '%28'],
  [')', '%29'],
];
