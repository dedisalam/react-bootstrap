// Components
//
// Define common padding and border radius sizes and more.

import { calc } from 'csscalc';
import {
  BLACK, GRAY_300, PRIMARY, WHITE,
} from './colorSystem';

// scss-docs-start border-variables
export const BORDER_WIDTH: number = calc('1px');
export type BorderWidths = {
  1: number,
  2: number,
  3: number,
  4: number,
  5: number,
};
export const BORDER_WIDTHS: BorderWidths = {
  1: calc('1px'),
  2: calc('2px'),
  3: calc('3px'),
  4: calc('4px'),
  5: calc('5px'),
};

export const BORDER_COLOR: string = GRAY_300;
// scss-docs-end border-variables

// scss-docs-start border-radius-variables
export const BORDER_RADIUS: number | undefined = calc('1rem / 4');
export const BORDER_RADIUS_SM: number | undefined = calc('1rem * 0.2');
export const BORDER_RADIUS_LG: number | undefined = calc('1rem * 0.3');
export const BORDER_RADIUS_PILL: number | undefined = calc('50rem');
// scss-docs-end border-radius-variables

// scss-docs-start box-shadow-variables
export const BOX_SHADOW: string = `0 .5rem 1rem rgba(${BLACK}, .15)`;
export const BOX_SHADOW_SM: string = `0 .125rem .25rem rgba(${BLACK}, .075)`;
export const BOX_SHADOW_LG: string = `0 1rem 3rem rgba(${BLACK}, .175)`;
export const BOX_SHADOW_INSET: string = `inset 0 1px 2px rgba(${BLACK}, .075)`;
// scss-docs-end box-shadow-variables

export const COMPONENT_ACTIVE_COLOR: string = WHITE;
export const COMPONENT_ACTIVE_BG: string = PRIMARY;

// scss-docs-start caret-variables
export const CARET_WIDTH: string = '.3em';
export const CARET_VERTICAL_ALIGN: number | undefined = calc(`${CARET_WIDTH} * 0.85`);
export const CARET_SPACING: number | undefined = calc(`${CARET_WIDTH} * 0.85`);
// scss-docs-end caret-variables

export const TRANSITION_BASE: string = 'all .2s ease-in-out';
export const TRANSITION_FADE: string = 'opacity .15s linear';
// scss-docs-start collapse-transition
export const TRANSITION_COLLAPSE: string = 'height .35s ease';
export const TRANSITION_COLLAPSE_WIDTH: string = 'width .35s ease';
// scss-docs-end collapse-transition

// stylelint-disable function-disallowed-list
// scss-docs-start aspect-ratios
export type AspectRatios = {
  '1x1': string,
  '4x3': string,
  '16x9': string,
  '21x9': string,
};
export const ASPECT_RATIOS: AspectRatios = {
  '1x1': '100%',
  '4x3': 'calc(3 / 4 * 100%)',
  '16x9': 'calc(9 / 16 * 100%)',
  '21x9': 'calc(9 / 21 * 100%)',
};
// scss-docs-end aspect-ratios
// stylelint-enable function-disallowed-list
