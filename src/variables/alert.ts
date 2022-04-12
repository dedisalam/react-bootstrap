// Alerts
//
// Define alert colors, border radius, and padding.

import { calc } from '../function';
import { BORDER_RADIUS, BORDER_WIDTH } from './component';
import { SPACER } from './spacing';
import { FONT_WEIGHT_BOLD } from './typography';

// scss-docs-start alert-variables
export const ALERT_PADDING_Y = SPACER;
export const ALERT_PADDING_X = SPACER;
export const ALERT_MARGIN_BOTTOM: string = '1rem';
export const ALERT_BORDER_RADIUS = BORDER_RADIUS;
export const ALERT_LINK_FONT_WEIGHT = FONT_WEIGHT_BOLD;
export const ALERT_BORDER_WIDTH = BORDER_WIDTH;
export const ALERT_BG_SCALE: string = '-80%';
export const ALERT_BORDER_SCALE: string = '-70%';
export const ALERT_COLOR_SCALE: string = '40%';
// 3x covers width of x plus default padding on either side
export const ALERT_DISMISSIBLE_PADDING_R = calc(ALERT_PADDING_X, '*', 3);
// scss-docs-end alert-variables
