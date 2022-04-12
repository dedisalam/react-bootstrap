// Popovers

import { BODY_COLOR } from './body';
import { WHITE, BLACK } from './colorSystem';
import { BORDER_WIDTH, BORDER_RADIUS_LG, BOX_SHADOW } from './component';
import { SPACER } from './spacing';
import { FONT_SIZE_SM, HEADINGS_COLOR } from './typography';

// scss-docs-start popover-variables
export const POPOVER_FONT_SIZE = FONT_SIZE_SM;
export const POPOVER_BG = WHITE;
export const POPOVER_MAX_WIDTH: string = '276px';
export const POPOVER_BORDER_WIDTH = BORDER_WIDTH;
export const POPOVER_BORDER_COLOR: string = `rgba(${BLACK}, .2)`;
export const POPOVER_BORDER_RADIUS = BORDER_RADIUS_LG;
export const POPOVER_INNER_BORDER_RADIUS: string = `subtract(${POPOVER_BORDER_RADIUS}, ${POPOVER_BORDER_WIDTH})`;
export const POPOVER_BOX_SHADOW = BOX_SHADOW;

export const POPOVER_HEADER_BG: string = `shade-color(${POPOVER_BG}, 6%)`;
export const POPOVER_HEADER_COLOR = HEADINGS_COLOR;
export const POPOVER_HEADER_PADDING_Y: string = '.5rem';
export const POPOVER_HEADER_PADDING_X = SPACER;

export const POPOVER_BODY_COLOR = BODY_COLOR;
export const POPOVER_BODY_PADDING_Y = SPACER;
export const POPOVER_BODY_PADDING_X = SPACER;

export const POPOVER_ARROW_WIDTH: string = '1rem';
export const POPOVER_ARROW_HEIGHT: string = '.5rem';
export const POPOVER_ARROW_COLOR = POPOVER_BG;

export const POPOVER_ARROW_OUTER_COLOR: string = `fade-in(${POPOVER_BORDER_COLOR}, .05)`;
// scss-docs-end popover-variables
