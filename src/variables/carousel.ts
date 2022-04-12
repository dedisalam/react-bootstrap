// Carousel

import { BLACK, WHITE } from './colorSystem';

// scss-docs-start carousel-variables
export const CAROUSEL_CONTROL_COLOR = WHITE;
export const CAROUSEL_CONTROL_WIDTH: string = '15%';
export const CAROUSEL_CONTROL_OPACITY = 0.5;
export const CAROUSEL_CONTROL_HOVER_OPACITY = 0.9;
export const CAROUSEL_CONTROL_TRANSITION: string = 'opacity .15s ease';

export const CAROUSEL_INDICATOR_WIDTH: string = '30px';
export const CAROUSEL_INDICATOR_HEIGHT: string = '3px';
export const CAROUSEL_INDICATOR_HIT_AREA_HEIGHT: string = '10px';
export const CAROUSEL_INDICATOR_SPACER: string = '3px';
export const CAROUSEL_INDICATOR_OPACITY = 0.5;
export const CAROUSEL_INDICATOR_ACTIVE_BG = WHITE;
export const CAROUSEL_INDICATOR_ACTIVE_OPACITY = 1;
export const CAROUSEL_INDICATOR_TRANSITION: string = 'opacity .6s ease';

export const CAROUSEL_CAPTION_WIDTH: string = '70%';
export const CAROUSEL_CAPTION_COLOR = WHITE;
export const CAROUSEL_CAPTION_PADDING_Y: string = '1.25rem';
export const CAROUSEL_CAPTION_SPACER: string = '1.25rem';

export const CAROUSEL_CONTROL_ICON_WIDTH: string = '2rem';

export const CAROUSEL_CONTROL_PREV_ICON_BG = "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{CAROUSEL_CONTROL_COLOR}'><path d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/></svg>\")";
export const CAROUSEL_CONTROL_NEXT_ICON_BG = "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{CAROUSEL_CONTROL_COLOR}'><path d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/></svg>\")";

export const CAROUSEL_TRANSITION_DURATION: string = '.6s';
export const CAROUSEL_TRANSITION: string = `transform ${CAROUSEL_TRANSITION_DURATION} ease-in-out`; // Define transform transition first if using multiple transitions (e.g., `transform 2s ease, opacity .5s ease-out`)

export const CAROUSEL_DARK_INDICATOR_ACTIVE_BG = BLACK;
export const CAROUSEL_DARK_CAPTION_COLOR = BLACK;
export const CAROUSEL_DARK_CONTROL_ICON_FILTER: string = 'invert(1) grayscale(100)';
// scss-docs-end carousel-variables
