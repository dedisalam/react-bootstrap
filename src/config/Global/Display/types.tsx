// Render by Node
const tuple = <T extends string[]>(...args: T) => args;

const DISPLAY = tuple(
  "none",
  "inline",
  "inline-block",
  "block",
  "table",
  "table-row",
  "table-cell",
  "flex",
  "inline-flex"
);
const DISPLAYSM = tuple(
  "none",
  "inline",
  "inline-block",
  "block",
  "table",
  "table-row",
  "table-cell",
  "flex",
  "inline-flex"
);
const DISPLAYMD = tuple(
  "none",
  "inline",
  "inline-block",
  "block",
  "table",
  "table-row",
  "table-cell",
  "flex",
  "inline-flex"
);
const DISPLAYLG = tuple(
  "none",
  "inline",
  "inline-block",
  "block",
  "table",
  "table-row",
  "table-cell",
  "flex",
  "inline-flex"
);
const DISPLAYXL = tuple(
  "none",
  "inline",
  "inline-block",
  "block",
  "table",
  "table-row",
  "table-cell",
  "flex",
  "inline-flex"
);
const DISPLAYPRINT = tuple(
  "none",
  "inline",
  "inline-block",
  "block",
  "table",
  "table-row",
  "table-cell",
  "flex",
  "inline-flex"
);

export { DISPLAY, DISPLAYSM, DISPLAYMD, DISPLAYLG, DISPLAYXL, DISPLAYPRINT };
