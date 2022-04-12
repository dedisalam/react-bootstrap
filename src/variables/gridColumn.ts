// Grid columns
//
// Set the number of columns and specify the width of the gutters.

import { calc } from '../function';
import { SPACERS } from './spacing';

export const GRID_COLUMNS = 12;
export const GRID_GUTTER_WIDTH: string = '1.5rem';
export const GRID_ROW_COLUMNS = 6;

export const GUTTERS = SPACERS;

// Container padding

export const CONTAINER_PADDING_X = calc(GRID_GUTTER_WIDTH, '*', 0.5);
