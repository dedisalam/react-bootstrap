// Render by Node
const tuple = <T extends string[]>(...args: T) => args;

const BORDERCOLOR = tuple(
  "primary",
  "secondary",
  "success",
  "info",
  "warning",
  "danger",
  "light",
  "dark",
  "white"
);
const BORDERRADIUS = tuple(
  "sm",
  "",
  "top",
  "right",
  "bottom",
  "left",
  "lg",
  "circle",
  "pill",
  "0"
);

export { BORDERCOLOR, BORDERRADIUS };
