// Utilities maps
//
// Extends the default `theme-colors` maps to help create our utilities.

import { BODY_COLOR, BODY_BG } from './body';
import { BLACK, THEME_COLORS, WHITE } from './colorSystem';

// scss-docs-start utilities-colors
// export const UTILITIES_COLORS = THEME_COLORS_RGB;
export const UTILITIES_COLORS = THEME_COLORS;
// scss-docs-end utilities-colors

// scss-docs-start utilities-text-colors
export const UTILITIES_TEXT = Object.assign(
  UTILITIES_COLORS,
  {
    black: `to-rgb(${BLACK})`,
    white: `to-rgb(${WHITE})`,
    body: `to-rgb(${BODY_COLOR})`,
  },
);
// utilities-text-colors: map-loop(utilities-text, rgba-css-var, "key", "text");
// scss-docs-end utilities-text-colors

// scss-docs-start utilities-bg-colors
export const UTILITIES_BG = Object.assign(
  UTILITIES_COLORS,
  {
    black: `to-rgb(${BLACK})`,
    white: `to-rgb(${WHITE})`,
    body: `to-rgb(${BODY_BG})`,
  },
);
// utilities-bg-colors: map-loop(utilities-bg, rgba-css-var, "key", "bg");
// scss-docs-end utilities-bg-colors
