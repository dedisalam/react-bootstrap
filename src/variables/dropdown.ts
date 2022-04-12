// Dropdowns
//
// Dropdown menu container and contents.

import { calc } from '../function';
import { BODY_COLOR } from './body';
import {
  BLACK, GRAY_200, GRAY_300, GRAY_500, GRAY_600, GRAY_800, GRAY_900, WHITE,
} from './colorSystem';
import {
  BORDER_RADIUS, BORDER_WIDTH, BOX_SHADOW, COMPONENT_ACTIVE_BG, COMPONENT_ACTIVE_COLOR,
} from './component';
import { SPACER } from './spacing';
import { FONT_SIZE_BASE } from './typography';

// scss-docs-start dropdown-variables
export const DROPDOWN_MIN_WIDTH: string = '10rem';
export const DROPDOWN_PADDING_X = 0;
export const DROPDOWN_PADDING_Y: string = '.5rem';
export const DROPDOWN_SPACER: string = '.125rem';
export const DROPDOWN_FONT_SIZE = FONT_SIZE_BASE;
export const DROPDOWN_COLOR = BODY_COLOR;
export const DROPDOWN_BG = WHITE;
export const DROPDOWN_BORDER_COLOR: string = `rgba(${BLACK}, .15)`;
export const DROPDOWN_BORDER_RADIUS = BORDER_RADIUS;
export const DROPDOWN_BORDER_WIDTH = BORDER_WIDTH;
export const DROPDOWN_INNER_BORDER_RADIUS: string = `subtract(${DROPDOWN_BORDER_RADIUS}, ${DROPDOWN_BORDER_WIDTH})`;
export const DROPDOWN_DIVIDER_BG = DROPDOWN_BORDER_COLOR;
export const DROPDOWN_DIVIDER_MARGIN_Y = calc(SPACER, '*', 0.5);
export const DROPDOWN_BOX_SHADOW = BOX_SHADOW;

export const DROPDOWN_LINK_COLOR = GRAY_900;
export const DROPDOWN_LINK_HOVER_COLOR: string = `shade-color(${DROPDOWN_LINK_COLOR}, 10%)`;
export const DROPDOWN_LINK_HOVER_BG = GRAY_200;

export const DROPDOWN_LINK_ACTIVE_COLOR = COMPONENT_ACTIVE_COLOR;
export const DROPDOWN_LINK_ACTIVE_BG = COMPONENT_ACTIVE_BG;

export const DROPDOWN_LINK_DISABLED_COLOR = GRAY_500;

export const DROPDOWN_ITEM_PADDING_Y = calc(SPACER, '*', 0.25);
export const DROPDOWN_ITEM_PADDING_X = SPACER;

export const DROPDOWN_HEADER_COLOR = GRAY_600;
export const DROPDOWN_HEADER_PADDING: string = `${DROPDOWN_PADDING_Y} ${DROPDOWN_ITEM_PADDING_X}`;
// scss-docs-end dropdown-variables

// scss-docs-start dropdown-dark-variables
export const DROPDOWN_DARK_COLOR = GRAY_300;
export const DROPDOWN_DARK_BG = GRAY_800;
export const DROPDOWN_DARK_BORDER_COLOR = DROPDOWN_BORDER_COLOR;
export const DROPDOWN_DARK_DIVIDER_BG = DROPDOWN_DIVIDER_BG;
export const DROPDOWN_DARK_BOX_SHADOW = null;
export const DROPDOWN_DARK_LINK_COLOR = DROPDOWN_DARK_COLOR;
export const DROPDOWN_DARK_LINK_HOVER_COLOR = WHITE;
export const DROPDOWN_DARK_LINK_HOVER_BG: string = `rgba(${WHITE}, .15)`;
export const DROPDOWN_DARK_LINK_ACTIVE_COLOR = DROPDOWN_LINK_ACTIVE_COLOR;
export const DROPDOWN_DARK_LINK_ACTIVE_BG = DROPDOWN_LINK_ACTIVE_BG;
export const DROPDOWN_DARK_LINK_DISABLED_COLOR = GRAY_500;
export const DROPDOWN_DARK_HEADER_COLOR = GRAY_500;
// scss-docs-end dropdown-dark-variables
