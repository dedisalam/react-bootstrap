// Render by Node
const tuple = <T extends string[]>(...args: T) => args;

const ALL = tuple(
  "baseline",
  "top",
  "middle",
  "bottom",
  "text-bottom",
  "text-top"
);

export default ALL;
