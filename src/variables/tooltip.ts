// Tooltips

import { calc } from 'csscalc';
import { WHITE, BLACK } from './colorSystem';
import { BORDER_RADIUS } from './component';
import { SPACER } from './spacing';
import { FONT_SIZE_SM } from './typography';

// scss-docs-start tooltip-variables
export const TOOLTIP_FONT_SIZE = FONT_SIZE_SM;
export const TOOLTIP_MAX_WIDTH: string = '200px';
export const TOOLTIP_COLOR = WHITE;
export const TOOLTIP_BG = BLACK;
export const TOOLTIP_BORDER_RADIUS = BORDER_RADIUS;
export const TOOLTIP_OPACITY = 0.9;
export const TOOLTIP_PADDING_Y: number | undefined = calc(`${SPACER} *  0.25`);
export const TOOLTIP_PADDING_X: number | undefined = calc(`${SPACER} *  0.5`);
export const TOOLTIP_MARGIN = 0;

export const TOOLTIP_ARROW_WIDTH: string = '.8rem';
export const TOOLTIP_ARROW_HEIGHT: string = '.4rem';
export const TOOLTIP_ARROW_COLOR = TOOLTIP_BG;
// scss-docs-end tooltip-variables

// Form tooltips must come after regular tooltips
// scss-docs-start tooltip-feedback-variables
export const FORM_FEEDBACK_TOOLTIP_PADDING_Y = TOOLTIP_PADDING_Y;
export const FORM_FEEDBACK_TOOLTIP_PADDING_X = TOOLTIP_PADDING_X;
export const FORM_FEEDBACK_TOOLTIP_FONT_SIZE = TOOLTIP_FONT_SIZE;
export const FORM_FEEDBACK_TOOLTIP_LINE_HEIGHT = null;
export const FORM_FEEDBACK_TOOLTIP_OPACITY = TOOLTIP_OPACITY;
export const FORM_FEEDBACK_TOOLTIP_BORDER_RADIUS = TOOLTIP_BORDER_RADIUS;
// scss-docs-end tooltip-feedback-variables
