// Buttons
//
// For each of Bootstrap's buttons, define text, background, and border color.

import {
  INPUT_BTN_BORDER_WIDTH,
  INPUT_BTN_FOCUS_BOX_SHADOW,
  INPUT_BTN_FOCUS_WIDTH,
  INPUT_BTN_FONT_FAMILY,
  INPUT_BTN_FONT_SIZE,
  INPUT_BTN_FONT_SIZE_LG,
  INPUT_BTN_FONT_SIZE_SM,
  INPUT_BTN_LINE_HEIGHT,
  INPUT_BTN_PADDING_X,
  INPUT_BTN_PADDING_X_LG,
  INPUT_BTN_PADDING_X_SM,
  INPUT_BTN_PADDING_Y,
  INPUT_BTN_PADDING_Y_LG,
  INPUT_BTN_PADDING_Y_SM,
} from './buttonNForm';
import { BLACK, GRAY_600, WHITE } from './colorSystem';
import { BORDER_RADIUS, BORDER_RADIUS_LG, BORDER_RADIUS_SM } from './component';
import { LINK_COLOR, LINK_HOVER_COLOR } from './link';
import { FONT_WEIGHT_NORMAL } from './typography';

// scss-docs-start btn-variables
export const BTN_PADDING_Y = INPUT_BTN_PADDING_Y;
export const BTN_PADDING_X = INPUT_BTN_PADDING_X;
export const BTN_FONT_FAMILY = INPUT_BTN_FONT_FAMILY;
export const BTN_FONT_SIZE = INPUT_BTN_FONT_SIZE;
export const BTN_LINE_HEIGHT = INPUT_BTN_LINE_HEIGHT;
export const BTN_WHITE_SPACE = null; // Set to `nowrap` to prevent text wrapping

export const BTN_PADDING_Y_SM = INPUT_BTN_PADDING_Y_SM;
export const BTN_PADDING_X_SM = INPUT_BTN_PADDING_X_SM;
export const BTN_FONT_SIZE_SM = INPUT_BTN_FONT_SIZE_SM;

export const BTN_PADDING_Y_LG = INPUT_BTN_PADDING_Y_LG;
export const BTN_PADDING_X_LG = INPUT_BTN_PADDING_X_LG;
export const BTN_FONT_SIZE_LG = INPUT_BTN_FONT_SIZE_LG;

export const BTN_BORDER_WIDTH = INPUT_BTN_BORDER_WIDTH;

export const BTN_FONT_WEIGHT = FONT_WEIGHT_NORMAL;
export const BTN_BOX_SHADOW: string = `inset 0 1px 0 rgba(${WHITE}, .15), 0 1px 1px rgba(${BLACK}, .075)`;
export const BTN_FOCUS_WIDTH = INPUT_BTN_FOCUS_WIDTH;
export const BTN_FOCUS_BOX_SHADOW = INPUT_BTN_FOCUS_BOX_SHADOW;
export const BTN_DISABLED_OPACITY = 0.65;
export const BTN_ACTIVE_BOX_SHADOW: string = `inset 0 3px 5px rgba(${BLACK}, .125)`;

export const BTN_LINK_COLOR = LINK_COLOR;
export const BTN_LINK_HOVER_COLOR = LINK_HOVER_COLOR;
export const BTN_LINK_DISABLED_COLOR = GRAY_600;

// Allows for customizing button radius independently from global border radius
export const BTN_BORDER_RADIUS = BORDER_RADIUS;
export const BTN_BORDER_RADIUS_SM = BORDER_RADIUS_SM;
export const BTN_BORDER_RADIUS_LG = BORDER_RADIUS_LG;

export const BTN_TRANSITION: string = 'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out';

export const BTN_HOVER_BG_SHADE_AMOUNT: string = '15%';
export const BTN_HOVER_BG_TINT_AMOUNT: string = '15%';
export const BTN_HOVER_BORDER_SHADE_AMOUNT: string = '20%';
export const BTN_HOVER_BORDER_TINT_AMOUNT: string = '10%';
export const BTN_ACTIVE_BG_SHADE_AMOUNT: string = '20%';
export const BTN_ACTIVE_BG_TINT_AMOUNT: string = '20%';
export const BTN_ACTIVE_BORDER_SHADE_AMOUNT: string = '25%';
export const BTN_ACTIVE_BORDER_TINT_AMOUNT: string = '10%';
// scss-docs-end btn-variables
