/* eslint-disable no-console */
/* eslint-disable max-len */
// Navbar

import { calc } from 'csscalc';
import { BTN_BORDER_RADIUS, BTN_FOCUS_WIDTH } from './button';
import { WHITE, BLACK } from './colorSystem';
import { NAV_LINK_PADDING_Y } from './nav';
import { SPACER } from './spacing';
import {
  FONT_SIZE_LG,
  FONT_SIZE_BASE,
  LINE_HEIGHT_BASE,
} from './typography';

// scss-docs-start navbar-variables
export const NAVBAR_PADDING_Y: number | undefined = calc(`${SPACER} * 0.5`);
export const NAVBAR_PADDING_X: number | undefined = undefined;

export const NAVBAR_NAV_LINK_PADDING_X: number | undefined = calc('1rem / 2');

export const NAVBAR_BRAND_FONT_SIZE: number | undefined = FONT_SIZE_LG;
export const NAV_LINK_HEIGHT: number | undefined = calc(`${FONT_SIZE_BASE} * ${LINE_HEIGHT_BASE} + ${NAV_LINK_PADDING_Y} * 2`);
export const NAVBAR_BRAND_HEIGHT: number | undefined = calc(`${NAVBAR_BRAND_FONT_SIZE} * ${LINE_HEIGHT_BASE}`);
export const NAVBAR_BRAND_PADDING_Y: number | undefined = calc(`${NAV_LINK_HEIGHT} - ${NAVBAR_BRAND_HEIGHT} * 0.5`);
export const NAVBAR_BRAND_MARGIN_END: number | undefined = calc('1rem');

export const NAVBAR_TOGGLER_PADDING_Y: number | undefined = calc('1rem / 4');
export const NAVBAR_TOGGLER_PADDING_X: number | undefined = calc('1rem * 3 / 4');
export const NAVBAR_TOGGLER_FONT_SIZE: number | undefined = FONT_SIZE_LG;
export const NAVBAR_TOGGLER_BORDER_RADIUS: number | undefined = BTN_BORDER_RADIUS;
export const NAVBAR_TOGGLER_FOCUS_WIDTH: number | undefined = BTN_FOCUS_WIDTH;
export const NAVBAR_TOGGLER_TRANSITION: string = 'box-shadow .15s ease-in-out';
// scss-docs-end navbar-variables

// scss-docs-start navbar-theme-variables
export const NAVBAR_DARK_COLOR: string = `rgba(${WHITE}, .55)`;
export const NAVBAR_DARK_HOVER_COLOR: string = `rgba(${WHITE}, .75)`;
export const NAVBAR_DARK_ACTIVE_COLOR: string = WHITE;
export const NAVBAR_DARK_DISABLED_COLOR: string = `rgba(${WHITE}, .25)`;
export const NAVBAR_DARK_TOGGLER_ICON_BG: string = 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 30 30\'><path stroke=\'#{navbar-dark-color}\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/></svg>")';
export const NAVBAR_DARK_TOGGLER_BORDER_COLOR: string = `rgba(${WHITE}, .1)`;

export const NAVBAR_LIGHT_COLOR: string = `rgba(${BLACK}, .55)`;
export const NAVBAR_LIGHT_HOVER_COLOR: string = `rgba(${BLACK}, .7)`;
export const NAVBAR_LIGHT_ACTIVE_COLOR: string = `rgba(${BLACK}, .9)`;
export const NAVBAR_LIGHT_DISABLED_COLOR: string = `rgba(${BLACK}, .3)`;
export const NAVBAR_LIGHT_TOGGLER_ICON_BG: string = 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 30 30\'><path stroke=\'#{navbar-light-color}\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/></svg>")';
export const NAVBAR_LIGHT_TOGGLER_BORDER_COLOR: string = `rgba(${BLACK}, .1)`;

export const NAVBAR_LIGHT_BRAND_COLOR: string = NAVBAR_LIGHT_ACTIVE_COLOR;
export const NAVBAR_LIGHT_BRAND_HOVER_COLOR: string = NAVBAR_LIGHT_ACTIVE_COLOR;
export const NAVBAR_DARK_BRAND_COLOR: string = NAVBAR_DARK_ACTIVE_COLOR;
export const NAVBAR_DARK_BRAND_HOVER_COLOR: string = NAVBAR_DARK_ACTIVE_COLOR;
// scss-docs-end navbar-theme-variables
