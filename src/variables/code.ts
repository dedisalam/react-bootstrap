// Code

import { calc } from 'csscalc';
import { GRAY_900, PINK, WHITE } from './colorSystem';
import { SMALL_FONT_SIZE } from './typography';

export const CODE_FONT_SIZE: string = SMALL_FONT_SIZE;
export const CODE_COLOR: string = PINK;

export const KBD_PADDING_Y: number | undefined = calc('1rem * 0.2');
export const KBD_PADDING_X: number | undefined = calc('1rem * 0.4');
export const KBD_FONT_SIZE: string = CODE_FONT_SIZE;
export const KBD_COLOR: string = WHITE;
export const KBD_BG: string = GRAY_900;

export const PRE_COLOR: string | undefined = undefined;
