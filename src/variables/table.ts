import { BODY_COLOR } from './body';
import {
  BLACK, PRIMARY, SECONDARY, SUCCESS, INFO, WARNING, DANGER, LIGHT, DARK,
} from './colorSystem';
import { BORDER_COLOR, BORDER_WIDTH } from './component';
import { TEXT_MUTED } from './typography';

// Tables
//
// Customizes the `.table` component with basic values, each used across all table variations.

// scss-docs-start table-variables
export const TABLE_CELL_PADDING_Y: string = '.5rem';
export const TABLE_CELL_PADDING_X: string = '.5rem';
export const TABLE_CELL_PADDING_Y_SM: string = '.25rem';
export const TABLE_CELL_PADDING_X_SM: string = '.25rem';

export const TABLE_CELL_VERTICAL_ALIGN: string = 'top';

export const TABLE_COLOR = BODY_COLOR;
export const TABLE_BG: string = 'transparent';
export const TABLE_ACCENT_BG: string = 'transparent';

export const TABLE_TH_FONT_WEIGHT = null;

export const TABLE_STRIPED_COLOR = TABLE_COLOR;
export const TABLE_STRIPED_BG_FACTOR = 0.05;
export const TABLE_STRIPED_BG: string = `rgba(${BLACK}, ${TABLE_STRIPED_BG_FACTOR})`;

export const TABLE_ACTIVE_COLOR = TABLE_COLOR;
export const TABLE_ACTIVE_BG_FACTOR = 0.1;
export const TABLE_ACTIVE_BG: string = `rgba(${BLACK}, ${TABLE_ACTIVE_BG_FACTOR})`;

export const TABLE_HOVER_COLOR = TABLE_COLOR;
export const TABLE_HOVER_BG_FACTOR = 0.075;
export const TABLE_HOVER_BG: string = `rgba(${BLACK}, ${TABLE_HOVER_BG_FACTOR})`;

export const TABLE_BORDER_FACTOR = 0.1;
export const TABLE_BORDER_WIDTH = BORDER_WIDTH;
export const TABLE_BORDER_COLOR = BORDER_COLOR;

export const TABLE_STRIPED_ORDER: string = 'odd';

export const TABLE_GROUP_SEPARATOR_COLOR: string = 'currentColor';

export const TABLE_CAPTION_COLOR = TEXT_MUTED;

export const TABLE_BG_SCALE: string = '-80%';
// scss-docs-end table-variables

// scss-docs-start table-loop
export const TABLE_VARIANTS = {
  primary: `shift-color(${PRIMARY}, ${TABLE_BG_SCALE})`,
  secondary: `shift-color(${SECONDARY}, ${TABLE_BG_SCALE})`,
  success: `shift-color(${SUCCESS}, ${TABLE_BG_SCALE})`,
  info: `shift-color(${INFO}, ${TABLE_BG_SCALE})`,
  warning: `shift-color(${WARNING}, ${TABLE_BG_SCALE})`,
  danger: `shift-color(${DANGER}, ${TABLE_BG_SCALE})`,
  light: LIGHT,
  dark: DARK,
};
// scss-docs-end table-loop
