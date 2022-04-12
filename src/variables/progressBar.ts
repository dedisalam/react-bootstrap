// Progress bars

import { calc } from '../function';
import { GRAY_200, WHITE, PRIMARY } from './colorSystem';
import { BORDER_RADIUS, BOX_SHADOW_INSET } from './component';
import { FONT_SIZE_BASE } from './typography';

// scss-docs-start progress-variables
export const PROGRESS_HEIGHT: string = '1rem';
export const PROGRESS_FONT_SIZE = calc(FONT_SIZE_BASE, '*', 0.75);
export const PROGRESS_BG = GRAY_200;
export const PROGRESS_BORDER_RADIUS = BORDER_RADIUS;
export const PROGRESS_BOX_SHADOW = BOX_SHADOW_INSET;
export const PROGRESS_BAR_COLOR = WHITE;
export const PROGRESS_BAR_BG = PRIMARY;
export const PROGRESS_BAR_ANIMATION_TIMING: string = '1s linear infinite';
export const PROGRESS_BAR_TRANSITION: string = 'width .6s ease';
// scss-docs-end progress-variables
