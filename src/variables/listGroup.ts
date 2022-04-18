// List group

import { calc } from 'csscalc';
import { BODY_COLOR } from './body';
import {
  GRAY_900, WHITE, BLACK, GRAY_100, GRAY_600, GRAY_700, GRAY_200,
} from './colorSystem';
import {
  BORDER_WIDTH, BORDER_RADIUS, COMPONENT_ACTIVE_COLOR, COMPONENT_ACTIVE_BG,
} from './component';
import { SPACER } from './spacing';

// scss-docs-start list-group-variables
export const LIST_GROUP_COLOR = GRAY_900;
export const LIST_GROUP_BG = WHITE;
export const LIST_GROUP_BORDER_COLOR: string = `rgba(${BLACK}, .125)`;
export const LIST_GROUP_BORDER_WIDTH = BORDER_WIDTH;
export const LIST_GROUP_BORDER_RADIUS = BORDER_RADIUS;

export const LIST_GROUP_ITEM_PADDING_Y: number | undefined = calc(`${SPACER} * 0.5`);
export const LIST_GROUP_ITEM_PADDING_X = SPACER;
export const LIST_GROUP_ITEM_BG_SCALE: string = '-80%';
export const LIST_GROUP_ITEM_COLOR_SCALE: string = '40%';

export const LIST_GROUP_HOVER_BG = GRAY_100;
export const LIST_GROUP_ACTIVE_COLOR = COMPONENT_ACTIVE_COLOR;
export const LIST_GROUP_ACTIVE_BG = COMPONENT_ACTIVE_BG;
export const LIST_GROUP_ACTIVE_BORDER_COLOR = LIST_GROUP_ACTIVE_BG;

export const LIST_GROUP_DISABLED_COLOR = GRAY_600;
export const LIST_GROUP_DISABLED_BG = LIST_GROUP_BG;

export const LIST_GROUP_ACTION_COLOR = GRAY_700;
export const LIST_GROUP_ACTION_HOVER_COLOR = LIST_GROUP_ACTION_COLOR;

export const LIST_GROUP_ACTION_ACTIVE_COLOR = BODY_COLOR;
export const LIST_GROUP_ACTION_ACTIVE_BG = GRAY_200;
// scss-docs-end list-group-variables
