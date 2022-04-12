// Components
//
// Define common padding and border radius sizes and more.

import { calc } from '../function';
import {
  BLACK, GRAY_300, PRIMARY, WHITE,
} from './colorSystem';

// scss-docs-start border-variables
export const BORDER_WIDTH: string = '1px';
export type BorderWidths = {
  1: string,
  2: string,
  3: string,
  4: string,
  5: string,
};
export const BORDER_WIDTHS: BorderWidths = {
  1: '1px',
  2: '2px',
  3: '3px',
  4: '4px',
  5: '5px',
};

export const BORDER_COLOR = GRAY_300;
// scss-docs-end border-variables

// scss-docs-start border-radius-variables
export const BORDER_RADIUS: string = '.25rem';
export const BORDER_RADIUS_SM: string = '.2rem';
export const BORDER_RADIUS_LG: string = '.3rem';
export const BORDER_RADIUS_PILL: string = '50rem';
// scss-docs-end border-radius-variables

// scss-docs-start box-shadow-variables
export const BOX_SHADOW: string = `0 .5rem 1rem rgba(${BLACK}, .15)`;
export const BOX_SHADOW_SM: string = `0 .125rem .25rem rgba(${BLACK}, .075)`;
export const BOX_SHADOW_LG: string = `0 1rem 3rem rgba(${BLACK}, .175)`;
export const BOX_SHADOW_INSET: string = `inset 0 1px 2px rgba(${BLACK}, .075)`;
// scss-docs-end box-shadow-variables

export const COMPONENT_ACTIVE_COLOR = WHITE;
export const COMPONENT_ACTIVE_BG = PRIMARY;

// scss-docs-start caret-variables
export const CARET_WIDTH: string = '.3em';
export const CARET_VERTICAL_ALIGN = calc(CARET_WIDTH, '*', 0.85);
export const CARET_SPACING = calc(CARET_WIDTH, '*', 0.85);
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
