// Buttons + Forms
//
// Shared variables that are reassigned to `input-` and `btn-` specific variables.

import { calc } from 'csscalc';
import { BORDER_WIDTH, COMPONENT_ACTIVE_BG } from './component';
import {
  FONT_SIZE_BASE, FONT_SIZE_LG, FONT_SIZE_SM, LINE_HEIGHT_BASE,
} from './typography';

// scss-docs-start input-btn-variables
export const INPUT_BTN_PADDING_Y: number | undefined = calc('1rem * 0.375');
export const INPUT_BTN_PADDING_X: number | undefined = calc('1rem * 0.75');
export const INPUT_BTN_FONT_FAMILY: string | undefined = undefined;
export const INPUT_BTN_FONT_SIZE: number | undefined = FONT_SIZE_BASE;
export const INPUT_BTN_LINE_HEIGHT: number = LINE_HEIGHT_BASE;

export const INPUT_BTN_FOCUS_WIDTH: number | undefined = calc('1rem / 4');
export const INPUT_BTN_FOCUS_COLOR_OPACITY: number = 0.25;
export const INPUT_BTN_FOCUS_COLOR: string = `rgba(${COMPONENT_ACTIVE_BG}, ${INPUT_BTN_FOCUS_COLOR_OPACITY})`;
export const INPUT_BTN_FOCUS_BLUR: number = 0;
export const INPUT_BTN_FOCUS_BOX_SHADOW: string = `0 0 ${INPUT_BTN_FOCUS_BLUR} ${INPUT_BTN_FOCUS_WIDTH} ${INPUT_BTN_FOCUS_COLOR}`;

export const INPUT_BTN_PADDING_Y_SM: number | undefined = calc('1rem * 0.25');
export const INPUT_BTN_PADDING_X_SM: number | undefined = calc('1rem * 0.5');
export const INPUT_BTN_FONT_SIZE_SM: number = FONT_SIZE_SM;

export const INPUT_BTN_PADDING_Y_LG: number | undefined = calc('1rem * 0.5');
export const INPUT_BTN_PADDING_X_LG: number | undefined = calc('1rem');
export const INPUT_BTN_FONT_SIZE_LG: number = FONT_SIZE_LG;

export const INPUT_BTN_BORDER_WIDTH: number = BORDER_WIDTH;
// scss-docs-end input-btn-variables
