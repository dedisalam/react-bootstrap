// Render by Node
const tuple = <T extends string[]>(...args: T) => args;

const BACKGROUND = tuple(
  "primary",
  "secondary",
  "success",
  "info",
  "warning",
  "danger",
  "light",
  "dark",
  "white",
  "transparent",
  "gradient-primary",
  "gradient-secondary",
  "gradient-success",
  "gradient-info",
  "gradient-warning",
  "gradient-danger",
  "gradient-light",
  "gradient-dark"
);

export { BACKGROUND };
