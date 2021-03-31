// Render by Node
const tuple = <T extends string[]>(...args: T) => args;

const ALL = tuple(
  "primary",
  "secondary",
  "success",
  "info",
  "warning",
  "danger",
  "light",
  "dark",
  "gradient-primary",
  "gradient-secondary",
  "gradient-success",
  "gradient-info",
  "gradient-warning",
  "gradient-danger",
  "gradient-light",
  "gradient-dark",
  "white",
  "transparent"
);

export default ALL;
