// Cards

import { calc } from 'csscalc';
import { BLACK, WHITE } from './colorSystem';
import { BORDER_RADIUS, BORDER_WIDTH } from './component';
import { GRID_GUTTER_WIDTH } from './gridColumn';
import { SPACER } from './spacing';

// scss-docs-start card-variables
export const CARD_SPACER_Y: number | undefined = SPACER;
export const CARD_SPACER_X: number | undefined = SPACER;
export const CARD_TITLE_SPACER_Y: number | undefined = calc(`${SPACER} * 0.5`);
export const CARD_BORDER_WIDTH: number = BORDER_WIDTH;
export const CARD_BORDER_COLOR: string = `rgba(${BLACK}, .125)`;
export const CARD_BORDER_RADIUS: number | undefined = BORDER_RADIUS;
export const CARD_BOX_SHADOW: string | undefined = undefined;
export const CARD_INNER_BORDER_RADIUS: string = `subtract(${CARD_BORDER_RADIUS}, ${CARD_BORDER_WIDTH})`;
export const CARD_CAP_PADDING_Y: number | undefined = calc(`${CARD_SPACER_Y} * 0.5`);
export const CARD_CAP_PADDING_X: number | undefined = CARD_SPACER_X;
export const CARD_CAP_BG: string = `rgba(${BLACK}, .03)`;
export const CARD_CAP_COLOR: string | undefined = undefined;
export const CARD_HEIGHT: number | undefined = undefined;
export const CARD_COLOR: string | undefined = undefined;
export const CARD_BG: string = WHITE;
export const CARD_IMG_OVERLAY_PADDING: number | undefined = SPACER;
export const CARD_GROUP_MARGIN: number | undefined = calc(`${GRID_GUTTER_WIDTH} * 0.5`);
// scss-docs-end card-variables
