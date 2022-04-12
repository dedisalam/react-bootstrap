// Modals

import { WHITE, BLACK } from './colorSystem';
import {
  BORDER_WIDTH, BORDER_RADIUS_LG, BOX_SHADOW_SM, BOX_SHADOW, BORDER_COLOR,
} from './component';
import { SPACER } from './spacing';
import { LINE_HEIGHT_BASE } from './typography';

// scss-docs-start modal-variables
export const MODAL_INNER_PADDING = SPACER;

export const MODAL_FOOTER_MARGIN_BETWEEN: string = '.5rem';

export const MODAL_DIALOG_MARGIN: string = '.5rem';
export const MODAL_DIALOG_MARGIN_Y_SM_UP: string = '1.75rem';

export const MODAL_TITLE_LINE_HEIGHT = LINE_HEIGHT_BASE;

export const MODAL_CONTENT_COLOR = null;
export const MODAL_CONTENT_BG = WHITE;
export const MODAL_CONTENT_BORDER_COLOR: string = `rgba(${BLACK}, .2)`;
export const MODAL_CONTENT_BORDER_WIDTH = BORDER_WIDTH;
export const MODAL_CONTENT_BORDER_RADIUS = BORDER_RADIUS_LG;
export const MODAL_CONTENT_INNER_BORDER_RADIUS: string = `subtract(${MODAL_CONTENT_BORDER_RADIUS}, ${MODAL_CONTENT_BORDER_WIDTH})`;
export const MODAL_CONTENT_BOX_SHADOW_XS = BOX_SHADOW_SM;
export const MODAL_CONTENT_BOX_SHADOW_SM_UP = BOX_SHADOW;

export const MODAL_BACKDROP_BG = BLACK;
export const MODAL_BACKDROP_OPACITY = 0.5;
export const MODAL_HEADER_BORDER_COLOR = BORDER_COLOR;
export const MODAL_FOOTER_BORDER_COLOR = MODAL_HEADER_BORDER_COLOR;
export const MODAL_HEADER_BORDER_WIDTH = MODAL_CONTENT_BORDER_WIDTH;
export const MODAL_FOOTER_BORDER_WIDTH = MODAL_HEADER_BORDER_WIDTH;
export const MODAL_HEADER_PADDING_Y = MODAL_INNER_PADDING;
export const MODAL_HEADER_PADDING_X = MODAL_INNER_PADDING;
export const MODAL_HEADER_PADDING: string = `${MODAL_HEADER_PADDING_Y} ${MODAL_HEADER_PADDING_X}`; // KEEP THIS FOR BACKWARDS COMPATIBILITY

export const MODAL_SM: string = '300px';
export const MODAL_MD: string = '500px';
export const MODAL_LG: string = '800px';
export const MODAL_XL: string = '1140px';

export const MODAL_FADE_TRANSFORM: string = 'translate(0, -50px)';
export const MODAL_SHOW_TRANSFORM: string = 'none';
export const MODAL_TRANSITION: string = 'transform .3s ease-out';
export const MODAL_SCALE_TRANSFORM: string = 'scale(1.02)';
// scss-docs-end modal-variables
