// Grid containers
//
// Define the maximum width of `.container` for different screen sizes.

import { calc } from 'csscalc';

// scss-docs-start container-max-widths
export type ContainerMaxWidths = {
  sm: number | undefined,
  md: number | undefined,
  lg: number | undefined,
  xl: number | undefined,
  xxl: number | undefined,
};
export const CONTAINER_MAX_WIDTHS: ContainerMaxWidths = {
  sm: calc('540px'),
  md: calc('720px'),
  lg: calc('960px'),
  xl: calc('1140px'),
  xxl: calc('1320px'),
};
// scss-docs-end container-max-widths

// @include _assert-ascending(container-max-widths, "container-max-widths");
