// Typography
//
// Font, line-height, and color for body text, headings, and more.

import { calc } from '../function';
import { GRAY_600 } from './colorSystem';
import { BORDER_WIDTH } from './component';
import { SPACER } from './spacing';

// scss-docs-start font-variables
// stylelint-disable value-keyword-case
export const FONT_FAMILY_SANS_SERIF: string = 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
export const FONT_FAMILY_MONOSPACE: string = 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
// stylelint-enable value-keyword-case
export const FONT_FAMILY_BASE: string = 'var(--#{variable-prefix}font-sans-serif)';
export const FONT_FAMILY_CODE: string = 'var(--#{variable-prefix}font-monospace)';

// font-size-base affects the font size of the body text
export const FONT_SIZE_ROOT = null;
export const FONT_SIZE_BASE: string = '1rem'; // Assumes the browser default, typically `16px`
export const FONT_SIZE_SM = calc(FONT_SIZE_BASE, '*', 0.875);
export const FONT_SIZE_LG = calc(FONT_SIZE_BASE, '*', 1.25);

export const FONT_WEIGHT_LIGHTER: string = 'lighter';
export const FONT_WEIGHT_LIGHT = 300;
export const FONT_WEIGHT_NORMAL = 400;
export const FONT_WEIGHT_BOLD = 700;
export const FONT_WEIGHT_BOLDER: string = 'bolder';

export const FONT_WEIGHT_BASE = FONT_WEIGHT_NORMAL;

export const LINE_HEIGHT_BASE = 1.5;
export const LINE_HEIGHT_SM = 1.25;
export const LINE_HEIGHT_LG = 2;

export const H1_FONT_SIZE = calc(FONT_SIZE_BASE, '*', 2.5);
export const H2_FONT_SIZE = calc(FONT_SIZE_BASE, '*', 2);
export const H3_FONT_SIZE = calc(FONT_SIZE_BASE, '*', 1.75);
export const H4_FONT_SIZE = calc(FONT_SIZE_BASE, '*', 1.5);
export const H5_FONT_SIZE = calc(FONT_SIZE_BASE, '*', 1.25);
export const H6_FONT_SIZE = FONT_SIZE_BASE;
// scss-docs-end font-variables

// scss-docs-start font-sizes
export const FONT_SIZES = {
  1: H1_FONT_SIZE,
  2: H2_FONT_SIZE,
  3: H3_FONT_SIZE,
  4: H4_FONT_SIZE,
  5: H5_FONT_SIZE,
  6: H6_FONT_SIZE,
};
// scss-docs-end font-sizes

// scss-docs-start headings-variables
export const HEADINGS_MARGIN_BOTTOM = calc(SPACER, '*', 0.5);
export const HEADINGS_FONT_FAMILY = null;
export const HEADINGS_FONT_STYLE = null;
export const HEADINGS_FONT_WEIGHT = 500;
export const HEADINGS_LINE_HEIGHT = 1.2;
export const HEADINGS_COLOR = null;
// scss-docs-end headings-variables

// scss-docs-start display-headings
export const DISPLAY_FONT_SIZES = {
  1: '5rem',
  2: '4.5rem',
  3: '4rem',
  4: '3.5rem',
  5: '3rem',
  6: '2.5rem',
};

export const DISPLAY_FONT_WEIGHT = 300;
export const DISPLAY_LINE_HEIGHT = HEADINGS_LINE_HEIGHT;
// scss-docs-end display-headings

// scss-docs-start type-variables
export const LEAD_FONT_SIZE = calc(FONT_SIZE_BASE, '*', 1.25);
export const LEAD_FONT_WEIGHT = 300;

export const SMALL_FONT_SIZE: string = '.875em';

export const SUB_SUP_FONT_SIZE: string = '.75em';

export const TEXT_MUTED = GRAY_600;

export const INITIALISM_FONT_SIZE = SMALL_FONT_SIZE;

export const BLOCKQUOTE_MARGIN_Y = SPACER;
export const BLOCKQUOTE_FONT_SIZE = calc(FONT_SIZE_BASE, '*', 1.25);
export const BLOCKQUOTE_FOOTER_COLOR = GRAY_600;
export const BLOCKQUOTE_FOOTER_FONT_SIZE = SMALL_FONT_SIZE;

export const HR_MARGIN_Y = SPACER;
export const HR_COLOR: string = 'inherit';
export const HR_HEIGHT = BORDER_WIDTH;
export const HR_OPACITY = 0.25;

export const LEGEND_MARGIN_BOTTOM: string = '.5rem';
export const LEGEND_FONT_SIZE: string = '1.5rem';
export const LEGEND_FONT_WEIGHT = null;

export const MARK_PADDING: string = '.2em';

export const DT_FONT_WEIGHT = FONT_WEIGHT_BOLD;

export const NESTED_KBD_FONT_WEIGHT = FONT_WEIGHT_BOLD;

export const LIST_INLINE_PADDING: string = '.5rem';

export const MARK_BG: string = '#fcf8e3';
// scss-docs-end type-variables
