// Pagination

import { INPUT_BTN_FOCUS_BOX_SHADOW } from './buttonNForm';
import {
  WHITE, GRAY_300, GRAY_200, GRAY_600,
} from './colorSystem';
import {
  BORDER_WIDTH,
  BORDER_RADIUS,
  COMPONENT_ACTIVE_COLOR,
  COMPONENT_ACTIVE_BG,
  BORDER_RADIUS_SM,
  BORDER_RADIUS_LG,
} from './component';
import { LINK_COLOR, LINK_HOVER_COLOR } from './link';

// scss-docs-start pagination-variables
export const PAGINATION_PADDING_Y: string = '.375rem';
export const PAGINATION_PADDING_X: string = '.75rem';
export const PAGINATION_PADDING_Y_SM: string = '.25rem';
export const PAGINATION_PADDING_X_SM: string = '.5rem';
export const PAGINATION_PADDING_Y_LG: string = '.75rem';
export const PAGINATION_PADDING_X_LG: string = '1.5rem';

export const PAGINATION_COLOR = LINK_COLOR;
export const PAGINATION_BG = WHITE;
export const PAGINATION_BORDER_WIDTH = BORDER_WIDTH;
export const PAGINATION_BORDER_RADIUS = BORDER_RADIUS;
export const PAGINATION_MARGIN_START = -PAGINATION_BORDER_WIDTH;
export const PAGINATION_BORDER_COLOR = GRAY_300;

export const PAGINATION_FOCUS_COLOR = LINK_HOVER_COLOR;
export const PAGINATION_FOCUS_BG = GRAY_200;
export const PAGINATION_FOCUS_BOX_SHADOW = INPUT_BTN_FOCUS_BOX_SHADOW;
export const PAGINATION_FOCUS_OUTLINE = 0;

export const PAGINATION_HOVER_COLOR = LINK_HOVER_COLOR;
export const PAGINATION_HOVER_BG = GRAY_200;
export const PAGINATION_HOVER_BORDER_COLOR = GRAY_300;

export const PAGINATION_ACTIVE_COLOR = COMPONENT_ACTIVE_COLOR;
export const PAGINATION_ACTIVE_BG = COMPONENT_ACTIVE_BG;
export const PAGINATION_ACTIVE_BORDER_COLOR = PAGINATION_ACTIVE_BG;

export const PAGINATION_DISABLED_COLOR = GRAY_600;
export const PAGINATION_DISABLED_BG = WHITE;
export const PAGINATION_DISABLED_BORDER_COLOR = GRAY_300;

export const PAGINATION_TRANSITION: string = 'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out';

export const PAGINATION_BORDER_RADIUS_SM = BORDER_RADIUS_SM;
export const PAGINATION_BORDER_RADIUS_LG = BORDER_RADIUS_LG;
// scss-docs-end pagination-variables
