// Spacing
//
// Control the default styling of most Bootstrap elements by modifying these
// variables. Mostly focused on spacing.
// You can add more entries to the spacers map, should you need more variation.

import { calc } from 'csscalc';

// scss-docs-start spacer-variables-maps
export const SPACER: number | undefined = calc('1rem');
export type Spacers = {
  0: string | number,
  1: string | number,
  2: string | number,
  3: string | number,
  4: string | number,
  5: string | number,
};
export const SPACERS: Spacers = {
  0: '0',
  1: calc(`${SPACER} * 0.25`),
  2: calc(`${SPACER} * 0.5`),
  3: SPACER,
  4: calc(`${SPACER} * 1.5`),
  5: calc(`${SPACER} * 3`),
};

// negative-spacers: if(enable-negative-margins, negativify-map(spacers), null);
// scss-docs-end spacer-variables-maps

// Position
//
// Define the edge positioning anchors of the position utilities.

// scss-docs-start position-map
export const POSITION_VALUES = {
  0: '0',
  50: '50%',
  100: '100%',
};
// scss-docs-end position-map
