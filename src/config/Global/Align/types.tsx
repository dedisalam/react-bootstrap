// Render by Node
const tuple = <T extends string[]>(...args: T) => args;

const ALIGN = tuple(
  "baseline",
  "top",
  "middle",
  "bottom",
  "text-bottom",
  "text-top"
);

export { ALIGN };
