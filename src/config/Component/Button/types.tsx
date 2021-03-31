// Render by Node
const tuple = <T extends string[]>(...args: T) => args;

const BG = tuple(
  "primary",
  "secondary",
  "success",
  "info",
  "warning",
  "danger",
  "light",
  "dark"
);
const SIZE = tuple("sm", "lg");

export { BG, SIZE };
