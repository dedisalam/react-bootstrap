// Breadcrumbs

import { calc } from 'csscalc';
import { GRAY_600 } from './colorSystem';

// scss-docs-start breadcrumb-variables
export const BREADCRUMB_FONT_SIZE: number | undefined = undefined;
export const BREADCRUMB_PADDING_Y: number = 0;
export const BREADCRUMB_PADDING_X: number = 0;
export const BREADCRUMB_ITEM_PADDING_X: number | undefined = calc('1rem / 2');
export const BREADCRUMB_MARGIN_BOTTOM: number | undefined = calc('1rem');
export const BREADCRUMB_BG: string | undefined = undefined;
export const BREADCRUMB_DIVIDER_COLOR: string = GRAY_600;
export const BREADCRUMB_ACTIVE_COLOR: string = GRAY_600;
export const BREADCRUMB_DIVIDER: string = '/';
export const BREADCRUMB_DIVIDER_FLIPPED: string = BREADCRUMB_DIVIDER;
export const BREADCRUMB_BORDER_RADIUS: number | undefined = undefined;
// scss-docs-end breadcrumb-variables
