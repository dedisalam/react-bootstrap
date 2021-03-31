/* eslint-disable import/prefer-default-export */
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

export { BG };
