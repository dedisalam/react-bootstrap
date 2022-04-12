// Navs

import { BODY_BG } from './body';
import {
  GRAY_600, GRAY_300, GRAY_200, GRAY_700,
} from './colorSystem';
import {
  BORDER_WIDTH, BORDER_RADIUS, COMPONENT_ACTIVE_COLOR, COMPONENT_ACTIVE_BG,
} from './component';
import { LINK_COLOR, LINK_HOVER_COLOR } from './link';

// scss-docs-start nav-variables
export const NAV_LINK_PADDING_Y: string = '.5rem';
export const NAV_LINK_PADDING_X: string = '1rem';
export const NAV_LINK_FONT_SIZE = null;
export const NAV_LINK_FONT_WEIGHT = null;
export const NAV_LINK_COLOR = LINK_COLOR;
export const NAV_LINK_HOVER_COLOR = LINK_HOVER_COLOR;
export const NAV_LINK_TRANSITION: string = 'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out';
export const NAV_LINK_DISABLED_COLOR = GRAY_600;

export const NAV_TABS_BORDER_COLOR = GRAY_300;
export const NAV_TABS_BORDER_WIDTH = BORDER_WIDTH;
export const NAV_TABS_BORDER_RADIUS = BORDER_RADIUS;
export const NAV_TABS_LINK_HOVER_BORDER_COLOR: string = `${GRAY_200} ${GRAY_200} ${NAV_TABS_BORDER_COLOR}`;
export const NAV_TABS_LINK_ACTIVE_COLOR = GRAY_700;
export const NAV_TABS_LINK_ACTIVE_BG = BODY_BG;
export const NAV_TABS_LINK_ACTIVE_BORDER_COLOR: string = `${GRAY_300} ${GRAY_300} ${NAV_TABS_LINK_ACTIVE_BG}`;

export const NAV_PILLS_BORDER_RADIUS = BORDER_RADIUS;
export const NAV_PILLS_LINK_ACTIVE_COLOR = COMPONENT_ACTIVE_COLOR;
export const NAV_PILLS_LINK_ACTIVE_BG = COMPONENT_ACTIVE_BG;
// scss-docs-end nav-variables
