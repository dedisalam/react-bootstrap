// Grid breakpoints
//
// Define the minimum dimensions at which your layout will change,
// adapting to different screen sizes, for use in media queries.

// scss-docs-start grid-breakpoints
export type GridBreakpoints = {
  xs: string,
  sm: string,
  md: string,
  lg: string,
  xl: string,
  xxl: string,
};
export const GRID_BREAKPOINTS: GridBreakpoints = {
  xs: '0',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
};
// scss-docs-end grid-breakpoints

// @include _assert-ascending(grid-breakpoints, "grid-breakpoints");
// @include _assert-starts-at-zero(grid-breakpoints, "grid-breakpoints");
