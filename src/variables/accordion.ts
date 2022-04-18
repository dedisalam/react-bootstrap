//
// Accordion
//

import { calc } from 'csscalc';
import { BODY_BG, BODY_COLOR } from './body';
import { BTN_FOCUS_BOX_SHADOW, BTN_TRANSITION } from './button';
import { BLACK, PRIMARY } from './colorSystem';
import { BORDER_RADIUS, BORDER_WIDTH, COMPONENT_ACTIVE_BG } from './component';
import { INPUT_FOCUS_BORDER_COLOR } from './form';

// Accordion Variables
export const ACCORDION_PADDING_Y: number = calc('1rem');
export const ACCORDION_PADDING_X: number = calc('1.25rem');
export const ACCORDION_COLOR: string = BODY_COLOR;
export const ACCORDION_BG: string = BODY_BG;
export const ACCORDION_BORDER_WIDTH: number | undefined = BORDER_WIDTH;
export const ACCORDION_BORDER_COLOR: string = `rgba(${BLACK}, .125)`;
export const ACCORDION_BORDER_RADIUS: number | undefined = BORDER_RADIUS;
export const ACCORDION_INNER_BORDER_RADIUS: string = `subtract(${ACCORDION_BORDER_RADIUS}, ${ACCORDION_BORDER_WIDTH})`;

export const ACCORDION_BODY_PADDING_Y: number = ACCORDION_PADDING_Y;
export const ACCORDION_BODY_PADDING_X: number = ACCORDION_PADDING_X;

export const ACCORDION_BUTTON_PADDING_Y: number = ACCORDION_PADDING_Y;
export const ACCORDION_BUTTON_PADDING_X: number = ACCORDION_PADDING_X;
export const ACCORDION_BUTTON_COLOR: string = ACCORDION_COLOR;
export const ACCORDION_BUTTON_BG: string = ACCORDION_BG;
export const ACCORDION_TRANSITION: string = `${BTN_TRANSITION}, ${BORDER_RADIUS} .15s ease`;
export const ACCORDION_BUTTON_ACTIVE_BG: string = `tint-color(${COMPONENT_ACTIVE_BG}, 90%)`;
export const ACCORDION_BUTTON_ACTIVE_COLOR: string = `shade-color(${PRIMARY}, 10%)`;

export const ACCORDION_BUTTON_FOCUS_BORDER_COLOR: string = INPUT_FOCUS_BORDER_COLOR;
export const ACCORDION_BUTTON_FOCUS_BOX_SHADOW: string = BTN_FOCUS_BOX_SHADOW;

export const ACCORDION_ICON_WIDTH: number | undefined = calc('1.25rem');
export const ACCORDION_ICON_COLOR: string = ACCORDION_BUTTON_COLOR;
export const ACCORDION_ICON_ACTIVE_COLOR: string = ACCORDION_BUTTON_ACTIVE_COLOR;
export const ACCORDION_ICON_TRANSITION: string = 'transform .2s ease-in-out';
export const ACCORDION_ICON_TRANSFORM: string = 'rotate(-180deg)';

export const ACCORDION_BUTTON_ICON: string = 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'#{accordion-icon-color}\'><path fill-rule=\'evenodd\' d=\'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z\'/></svg>")';
export const ACCORDION_BUTTON_ACTIVE_ICON: string = 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'#{accordion-icon-active-color}\'><path fill-rule=\'evenodd\' d=\'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z\'/></svg>")';
