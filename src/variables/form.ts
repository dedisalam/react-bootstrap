// Forms

import { calc } from 'csscalc';
import { BODY_BG, BODY_COLOR } from './body';
import { BTN_DISABLED_OPACITY } from './button';
import {
  INPUT_BTN_BORDER_WIDTH,
  INPUT_BTN_FOCUS_BOX_SHADOW,
  INPUT_BTN_FOCUS_COLOR,
  INPUT_BTN_FOCUS_WIDTH,
  INPUT_BTN_FONT_FAMILY,
  INPUT_BTN_FONT_SIZE,
  INPUT_BTN_FONT_SIZE_LG,
  INPUT_BTN_FONT_SIZE_SM,
  INPUT_BTN_LINE_HEIGHT,
  INPUT_BTN_PADDING_X,
  INPUT_BTN_PADDING_X_LG,
  INPUT_BTN_PADDING_X_SM,
  INPUT_BTN_PADDING_Y,
  INPUT_BTN_PADDING_Y_LG,
  INPUT_BTN_PADDING_Y_SM,
} from './buttonNForm';
import {
  BLACK, GRAY_200, GRAY_300, GRAY_400, GRAY_500, GRAY_600, GRAY_800,
} from './colorSystem';
import {
  BORDER_RADIUS,
  BORDER_RADIUS_LG,
  BORDER_RADIUS_SM,
  BOX_SHADOW_INSET,
  COMPONENT_ACTIVE_BG,
  COMPONENT_ACTIVE_COLOR,
} from './component';
import {
  FONT_SIZE_BASE,
  FONT_WEIGHT_BASE,
  LINE_HEIGHT_BASE,
  SMALL_FONT_SIZE,
  TEXT_MUTED,
} from './typography';

// scss-docs-start form-text-variables
export const FORM_TEXT_MARGIN_TOP: number | undefined = calc('1rem * 0.25');
export const FORM_TEXT_FONT_SIZE: string = SMALL_FONT_SIZE;
export const FORM_TEXT_FONT_STYLE: string | undefined = undefined;
export const FORM_TEXT_FONT_WEIGHT: number | undefined = undefined;
export const FORM_TEXT_COLOR: string = TEXT_MUTED;
// scss-docs-end form-text-variables

// scss-docs-start form-label-variables
export const FORM_LABEL_MARGIN_BOTTOM: number | undefined = calc('1rem * 0.5');
export const FORM_LABEL_FONT_SIZE = null;
export const FORM_LABEL_FONT_STYLE = null;
export const FORM_LABEL_FONT_WEIGHT = null;
export const FORM_LABEL_COLOR = null;
// scss-docs-end form-label-variables

// scss-docs-start form-input-variables
export const INPUT_PADDING_Y = INPUT_BTN_PADDING_Y;
export const INPUT_PADDING_X = INPUT_BTN_PADDING_X;
export const INPUT_FONT_FAMILY = INPUT_BTN_FONT_FAMILY;
export const INPUT_FONT_SIZE = INPUT_BTN_FONT_SIZE;
export const INPUT_FONT_WEIGHT = FONT_WEIGHT_BASE;
export const INPUT_LINE_HEIGHT = INPUT_BTN_LINE_HEIGHT;

export const INPUT_PADDING_Y_SM = INPUT_BTN_PADDING_Y_SM;
export const INPUT_PADDING_X_SM = INPUT_BTN_PADDING_X_SM;
export const INPUT_FONT_SIZE_SM = INPUT_BTN_FONT_SIZE_SM;

export const INPUT_PADDING_Y_LG = INPUT_BTN_PADDING_Y_LG;
export const INPUT_PADDING_X_LG = INPUT_BTN_PADDING_X_LG;
export const INPUT_FONT_SIZE_LG = INPUT_BTN_FONT_SIZE_LG;

export const INPUT_BG = BODY_BG;
export const INPUT_DISABLED_BG = GRAY_200;
export const INPUT_DISABLED_BORDER_COLOR = null;

export const INPUT_COLOR = BODY_COLOR;
export const INPUT_BORDER_COLOR = GRAY_400;
export const INPUT_BORDER_WIDTH = INPUT_BTN_BORDER_WIDTH;
export const INPUT_BOX_SHADOW = BOX_SHADOW_INSET;

export const INPUT_BORDER_RADIUS = BORDER_RADIUS;
export const INPUT_BORDER_RADIUS_SM = BORDER_RADIUS_SM;
export const INPUT_BORDER_RADIUS_LG = BORDER_RADIUS_LG;

export const INPUT_FOCUS_BG = INPUT_BG;
export const INPUT_FOCUS_BORDER_COLOR: string = `tint-color(${COMPONENT_ACTIVE_BG}, 50%)`;
export const INPUT_FOCUS_COLOR = INPUT_COLOR;
export const INPUT_FOCUS_WIDTH = INPUT_BTN_FOCUS_WIDTH;
export const INPUT_FOCUS_BOX_SHADOW = INPUT_BTN_FOCUS_BOX_SHADOW;

export const INPUT_PLACEHOLDER_COLOR = GRAY_600;
export const INPUT_PLAINTEXT_COLOR = BODY_COLOR;

export const INPUT_HEIGHT_BORDER: number | undefined = calc(`${INPUT_BORDER_WIDTH} * 2`);

export const INPUT_HEIGHT_INNER: string = `add(${INPUT_LINE_HEIGHT} * 1em, ${INPUT_PADDING_Y} * 2)`;
export const INPUT_HEIGHT_INNER_HALF: string = `add(${INPUT_LINE_HEIGHT} * .5em, ${INPUT_PADDING_Y})`;
export const INPUT_HEIGHT_INNER_QUARTER: string = `add(${INPUT_LINE_HEIGHT} * .25em, ${INPUT_PADDING_Y} * .5)`;

export const INPUT_HEIGHT: string = `add(${INPUT_LINE_HEIGHT} * 1em, add(${INPUT_PADDING_Y} * 2, ${INPUT_HEIGHT_BORDER}, false))`;
export const INPUT_HEIGHT_SM: string = `add(${INPUT_LINE_HEIGHT} * 1em, add(${INPUT_PADDING_Y_SM} * 2, ${INPUT_HEIGHT_BORDER}, false))`;
export const INPUT_HEIGHT_LG: string = `add(${INPUT_LINE_HEIGHT} * 1em, add(${INPUT_PADDING_Y_LG} * 2, ${INPUT_HEIGHT_BORDER}, false))`;

export const INPUT_TRANSITION: string = 'border-color .15s ease-in-out, box-shadow .15s ease-in-out';

export const FORM_COLOR_WIDTH: string = '3rem';
// scss-docs-end form-input-variables

// scss-docs-start form-check-variables
export const FORM_CHECK_INPUT_WIDTH: string = '1em';
export const FORM_CHECK_MIN_HEIGHT: number | undefined = calc(`${FONT_SIZE_BASE} * ${LINE_HEIGHT_BASE}`);
export const FORM_CHECK_PADDING_START: string = `${FORM_CHECK_INPUT_WIDTH}.5em`;
export const FORM_CHECK_MARGIN_BOTTOM: string = '.125rem';
export const FORM_CHECK_LABEL_COLOR = null;
export const FORM_CHECK_LABEL_CURSOR = null;
export const FORM_CHECK_TRANSITION = null;

export const FORM_CHECK_INPUT_ACTIVE_FILTER: string = 'brightness(90%)';

export const FORM_CHECK_INPUT_BG = INPUT_BG;
export const FORM_CHECK_INPUT_BORDER: string = `1px solid rgba(${BLACK}, .25)`;
export const FORM_CHECK_INPUT_BORDER_RADIUS: string = '.25em';
export const FORM_CHECK_RADIO_BORDER_RADIUS: string = '50%';
export const FORM_CHECK_INPUT_FOCUS_BORDER = INPUT_FOCUS_BORDER_COLOR;
export const FORM_CHECK_INPUT_FOCUS_BOX_SHADOW = INPUT_BTN_FOCUS_BOX_SHADOW;

export const FORM_CHECK_INPUT_CHECKED_COLOR = COMPONENT_ACTIVE_COLOR;
export const FORM_CHECK_INPUT_CHECKED_BG_COLOR = COMPONENT_ACTIVE_BG;
export const FORM_CHECK_INPUT_CHECKED_BORDER_COLOR = FORM_CHECK_INPUT_CHECKED_BG_COLOR;
export const FORM_CHECK_INPUT_CHECKED_BG_IMAGE: string = 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'><path fill=\'none\' stroke=\'#{form-check-input-checked-color}\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'M6 10l3 3l6-6\'/></svg>")';
export const FORM_CHECK_RADIO_CHECKED_BG_IMAGE: string = 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'><circle r=\'2\' fill=\'#{form-check-input-checked-color}\'/></svg>")';

export const FORM_CHECK_INPUT_INDETERMINATE_COLOR = COMPONENT_ACTIVE_COLOR;
export const FORM_CHECK_INPUT_INDETERMINATE_BG_COLOR = COMPONENT_ACTIVE_BG;
export const FORM_CHECK_INPUT_INDETERMINATE_BORDER_COLOR = FORM_CHECK_INPUT_INDETERMINATE_BG_COLOR;
export const FORM_CHECK_INPUT_INDETERMINATE_BG_IMAGE: string = 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'><path fill=\'none\' stroke=\'#{form-check-input-indeterminate-color}\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'M6 10h8\'/></svg>")';

export const FORM_CHECK_INPUT_DISABLED_OPACITY = 0.5;
export const FORM_CHECK_LABEL_DISABLED_OPACITY = FORM_CHECK_INPUT_DISABLED_OPACITY;
export const FORM_CHECK_BTN_CHECK_DISABLED_OPACITY = BTN_DISABLED_OPACITY;

export const FORM_CHECK_INLINE_MARGIN_END: string = '1rem';
// scss-docs-end form-check-variables

// scss-docs-start form-switch-variables
export const FORM_SWITCH_COLOR: string = `rgba(${BLACK}, .25)`;
export const FORM_SWITCH_WIDTH: string = '2em';
export const FORM_SWITCH_PADDING_START: string = `${FORM_SWITCH_WIDTH}.5em`;
export const FORM_SWITCH_BG_IMAGE: string = 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'><circle r=\'3\' fill=\'#{form-switch-color}\'/></svg>")';
export const FORM_SWITCH_BORDER_RADIUS = FORM_SWITCH_WIDTH;
export const FORM_SWITCH_TRANSITION: string = 'background-position .15s ease-in-out';

export const FORM_SWITCH_FOCUS_COLOR = INPUT_FOCUS_BORDER_COLOR;
export const FORM_SWITCH_FOCUS_BG_IMAGE: string = 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'><circle r=\'3\' fill=\'#{form-switch-focus-color}\'/></svg>")';

export const FORM_SWITCH_CHECKED_COLOR = COMPONENT_ACTIVE_COLOR;
export const FORM_SWITCH_CHECKED_BG_IMAGE: string = 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'><circle r=\'3\' fill=\'#{form-switch-checked-color}\'/></svg>")';
export const FORM_SWITCH_CHECKED_BG_POSITION: string = 'right center';
// scss-docs-end form-switch-variables

// scss-docs-start input-group-variables
export const INPUT_GROUP_ADDON_PADDING_Y = INPUT_PADDING_Y;
export const INPUT_GROUP_ADDON_PADDING_X = INPUT_PADDING_X;
export const INPUT_GROUP_ADDON_FONT_WEIGHT = INPUT_FONT_WEIGHT;
export const INPUT_GROUP_ADDON_COLOR = INPUT_COLOR;
export const INPUT_GROUP_ADDON_BG = GRAY_200;
export const INPUT_GROUP_ADDON_BORDER_COLOR = INPUT_BORDER_COLOR;
// scss-docs-end input-group-variables

// scss-docs-start form-select-variables
export const FORM_SELECT_PADDING_Y = INPUT_PADDING_Y;
export const FORM_SELECT_PADDING_X = INPUT_PADDING_X;
export const FORM_SELECT_FONT_FAMILY = INPUT_FONT_FAMILY;
export const FORM_SELECT_FONT_SIZE = INPUT_FONT_SIZE;
// Extra padding for background-image
export const FORM_SELECT_INDICATOR_PADDING: number | undefined = calc(`${FORM_SELECT_PADDING_X} * 3`);
export const FORM_SELECT_FONT_WEIGHT = INPUT_FONT_WEIGHT;
export const FORM_SELECT_LINE_HEIGHT = INPUT_LINE_HEIGHT;
export const FORM_SELECT_COLOR = INPUT_COLOR;
export const FORM_SELECT_BG = INPUT_BG;
export const FORM_SELECT_DISABLED_COLOR = null;
export const FORM_SELECT_DISABLED_BG = GRAY_200;
export const FORM_SELECT_DISABLED_BORDER_COLOR = INPUT_DISABLED_BORDER_COLOR;
export const FORM_SELECT_BG_POSITION: string = `right ${FORM_SELECT_PADDING_X} center`;
export const FORM_SELECT_BG_SIZE: string = '16px 12px'; // In pixels because image dimensions
export const FORM_SELECT_INDICATOR_COLOR = GRAY_800;
export const FORM_SELECT_INDICATOR: string = 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'><path fill=\'none\' stroke=\'#{form-select-indicator-color}\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M2 5l6 6 6-6\'/></svg>")';

export const FORM_SELECT_FEEDBACK_ICON_PADDING_END: number | undefined = calc(`${FORM_SELECT_PADDING_X} * 2.5 + ${FORM_SELECT_INDICATOR_PADDING}`);
export const FORM_SELECT_FEEDBACK_ICON_POSITION: string = `center right ${FORM_SELECT_INDICATOR_PADDING}`;
export const FORM_SELECT_FEEDBACK_ICON_SIZE: string = `${INPUT_HEIGHT_INNER_HALF} ${INPUT_HEIGHT_INNER_HALF}`;

export const FORM_SELECT_BORDER_WIDTH = INPUT_BORDER_WIDTH;
export const FORM_SELECT_BORDER_COLOR = INPUT_BORDER_COLOR;
export const FORM_SELECT_BORDER_RADIUS = INPUT_BORDER_RADIUS;
export const FORM_SELECT_BOX_SHADOW = BOX_SHADOW_INSET;

export const FORM_SELECT_FOCUS_BORDER_COLOR = INPUT_FOCUS_BORDER_COLOR;
export const FORM_SELECT_FOCUS_WIDTH = INPUT_FOCUS_WIDTH;
export const FORM_SELECT_FOCUS_BOX_SHADOW: string = `0 0 0 ${FORM_SELECT_FOCUS_WIDTH} ${INPUT_BTN_FOCUS_COLOR}`;

export const FORM_SELECT_PADDING_Y_SM = INPUT_PADDING_Y_SM;
export const FORM_SELECT_PADDING_X_SM = INPUT_PADDING_X_SM;
export const FORM_SELECT_FONT_SIZE_SM = INPUT_FONT_SIZE_SM;
export const FORM_SELECT_BORDER_RADIUS_SM = INPUT_BORDER_RADIUS_SM;

export const FORM_SELECT_PADDING_Y_LG = INPUT_PADDING_Y_LG;
export const FORM_SELECT_PADDING_X_LG = INPUT_PADDING_X_LG;
export const FORM_SELECT_FONT_SIZE_LG = INPUT_FONT_SIZE_LG;
export const FORM_SELECT_BORDER_RADIUS_LG = INPUT_BORDER_RADIUS_LG;

export const FORM_SELECT_TRANSITION = INPUT_TRANSITION;
// scss-docs-end form-select-variables

// scss-docs-start form-range-variables
export const FORM_RANGE_TRACK_WIDTH: string = '100%';
export const FORM_RANGE_TRACK_HEIGHT: string = '.5rem';
export const FORM_RANGE_TRACK_CURSOR: string = 'pointer';
export const FORM_RANGE_TRACK_BG = GRAY_300;
export const FORM_RANGE_TRACK_BORDER_RADIUS: string = '1rem';
export const FORM_RANGE_TRACK_BOX_SHADOW = BOX_SHADOW_INSET;

export const FORM_RANGE_THUMB_WIDTH: string = '1rem';
export const FORM_RANGE_THUMB_HEIGHT = FORM_RANGE_THUMB_WIDTH;
export const FORM_RANGE_THUMB_BG = COMPONENT_ACTIVE_BG;
export const FORM_RANGE_THUMB_BORDER = 0;
export const FORM_RANGE_THUMB_BORDER_RADIUS: string = '1rem';
export const FORM_RANGE_THUMB_BOX_SHADOW: string = `0 .1rem .25rem rgba(${BLACK}, .1)`;
export const FORM_RANGE_THUMB_FOCUS_BOX_SHADOW: string = `0 0 0 1px ${BODY_BG}, ${INPUT_FOCUS_BOX_SHADOW}`;
// For focus box shadow issue in Edge
export const FORM_RANGE_THUMB_FOCUS_BOX_SHADOW_WIDTH = INPUT_FOCUS_WIDTH;
export const FORM_RANGE_THUMB_ACTIVE_BG: string = `tint-color(${COMPONENT_ACTIVE_BG}, 70%)`;
export const FORM_RANGE_THUMB_DISABLED_BG = GRAY_500;
export const FORM_RANGE_THUMB_TRANSITION: string = 'background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out';
// scss-docs-end form-range-variables

// scss-docs-start form-file-variables
export const FORM_FILE_BUTTON_COLOR = INPUT_COLOR;
export const FORM_FILE_BUTTON_BG = INPUT_GROUP_ADDON_BG;
export const FORM_FILE_BUTTON_HOVER_BG: string = `shade-color(${FORM_FILE_BUTTON_BG}, 5%)`;
// scss-docs-end form-file-variables

// scss-docs-start form-floating-variables
export const FORM_FLOATING_HEIGHT: string = `add(3.5rem, ${INPUT_HEIGHT_BORDER})`;
export const FORM_FLOATING_LINE_HEIGHT = 1.25;
export const FORM_FLOATING_PADDING_X = INPUT_PADDING_X;
export const FORM_FLOATING_PADDING_Y: string = '1rem';
export const FORM_FLOATING_INPUT_PADDING_T: string = '1.625rem';
export const FORM_FLOATING_INPUT_PADDING_B: string = '.625rem';
export const FORM_FLOATING_LABEL_OPACITY = 0.65;
export const FORM_FLOATING_LABEL_TRANSFORM: string = 'scale(.85) translateY(-.5rem) translateX(.15rem)';
export const FORM_FLOATING_TRANSITION: string = 'opacity .1s ease-in-out, transform .1s ease-in-out';
// scss-docs-end form-floating-variables
