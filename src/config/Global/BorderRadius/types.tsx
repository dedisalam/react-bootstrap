// Render by Node
const tuple = <T extends string[]>(...args: T) => args;

const ALL = tuple(
  "sm",
  "all",
  "top",
  "right",
  "bottom",
  "left",
  "lg",
  "circle",
  "pill",
  "0"
);

export default ALL;
