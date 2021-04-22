// Render by Node
const tuple = <T extends string[]>(...args: T) => args;

const BGCOLOR = tuple(
  "primary",
  "secondary",
  "success",
  "info",
  "warning",
  "danger",
  "light",
  "dark"
);

export { BGCOLOR };
