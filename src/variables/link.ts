// Links
//
// Style anchor elements.

import { PRIMARY } from './colorSystem';

export const LINK_COLOR = PRIMARY;
export const LINK_DECORATION: string = 'underline';
export const LINK_SHADE_PERCENTAGE: string = '20%';
export const LINK_HOVER_COLOR: string = `shift-color(${LINK_COLOR}, ${LINK_SHADE_PERCENTAGE})`;
export const LINK_HOVER_DECORATION = null;

export const STRETCHED_LINK_PSEUDO_ELEMENT: string = 'after';
export const STRETCHED_LINK_Z_INDEX = 1;
