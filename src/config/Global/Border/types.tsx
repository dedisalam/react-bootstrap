// Render by Node
const tuple = <T extends string[]>(...args: T) => args;

const ALL = tuple(
  "all",
  "top",
  "right",
  "bottom",
  "left",
  "0",
  "top-0",
  "right-0",
  "bottom-0",
  "left-0",
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

export default ALL;
