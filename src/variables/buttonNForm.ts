// Buttons + Forms
//
// Shared variables that are reassigned to `input-` and `btn-` specific variables.

import { BORDER_WIDTH, COMPONENT_ACTIVE_BG } from './component';
import {
  FONT_SIZE_BASE, FONT_SIZE_LG, FONT_SIZE_SM, LINE_HEIGHT_BASE,
} from './typography';

// scss-docs-start input-btn-variables
export const INPUT_BTN_PADDING_Y: string = '.375rem';
export const INPUT_BTN_PADDING_X: string = '.75rem';
export const INPUT_BTN_FONT_FAMILY = null;
export const INPUT_BTN_FONT_SIZE = FONT_SIZE_BASE;
export const INPUT_BTN_LINE_HEIGHT = LINE_HEIGHT_BASE;

export const INPUT_BTN_FOCUS_WIDTH: string = '.25rem';
export const INPUT_BTN_FOCUS_COLOR_OPACITY = 0.25;
export const INPUT_BTN_FOCUS_COLOR: string = `rgba(${COMPONENT_ACTIVE_BG}, ${INPUT_BTN_FOCUS_COLOR_OPACITY})`;
export const INPUT_BTN_FOCUS_BLUR = 0;
export const INPUT_BTN_FOCUS_BOX_SHADOW: string = `0 0 ${INPUT_BTN_FOCUS_BLUR} ${INPUT_BTN_FOCUS_WIDTH} ${INPUT_BTN_FOCUS_COLOR}`;

export const INPUT_BTN_PADDING_Y_SM: string = '.25rem';
export const INPUT_BTN_PADDING_X_SM: string = '.5rem';
export const INPUT_BTN_FONT_SIZE_SM = FONT_SIZE_SM;

export const INPUT_BTN_PADDING_Y_LG: string = '.5rem';
export const INPUT_BTN_PADDING_X_LG: string = '1rem';
export const INPUT_BTN_FONT_SIZE_LG = FONT_SIZE_LG;

export const INPUT_BTN_BORDER_WIDTH = BORDER_WIDTH;
// scss-docs-end input-btn-variables
