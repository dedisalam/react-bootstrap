// Grid containers
//
// Define the maximum width of `.container` for different screen sizes.

// scss-docs-start container-max-widths
export type ContainerMaxWidths = {
  sm: string,
  md: string,
  lg: string,
  xl: string,
  xxl: string,
};
export const CONTAINER_MAX_WIDTHS: ContainerMaxWidths = {
  sm: '540px',
  md: '720px',
  lg: '960px',
  xl: '1140px',
  xxl: '1320px',
};
// scss-docs-end container-max-widths

// @include _assert-ascending(container-max-widths, "container-max-widths");
