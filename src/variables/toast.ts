// Toasts

import { WHITE, BLACK, GRAY_600 } from './colorSystem';
import { BORDER_RADIUS, BOX_SHADOW } from './component';
import { CONTAINER_PADDING_X } from './gridColumn';

// scss-docs-start toast-variables
export const TOAST_MAX_WIDTH: string = '350px';
export const TOAST_PADDING_X: string = '.75rem';
export const TOAST_PADDING_Y: string = '.5rem';
export const TOAST_FONT_SIZE: string = '.875rem';
export const TOAST_COLOR = null;
export const TOAST_BACKGROUND_COLOR: string = `rgba(${WHITE}, .85)`;
export const TOAST_BORDER_WIDTH: string = '1px';
export const TOAST_BORDER_COLOR: string = `rgba(${BLACK}, .1)`;
export const TOAST_BORDER_RADIUS = BORDER_RADIUS;
export const TOAST_BOX_SHADOW = BOX_SHADOW;
export const TOAST_SPACING = CONTAINER_PADDING_X;

export const TOAST_HEADER_COLOR = GRAY_600;
export const TOAST_HEADER_BACKGROUND_COLOR: string = `rgba(${WHITE}, .85)`;
export const TOAST_HEADER_BORDER_COLOR: string = `rgba(${BLACK}, .05)`;
// scss-docs-end toast-variables
