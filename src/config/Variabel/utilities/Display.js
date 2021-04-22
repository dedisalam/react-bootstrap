/* eslint-disable @typescript-eslint/no-var-requires */
const { GridBreakpoints, Displays } = require("../Variables");

//
// Utilities for common `display` values
//
const Display = {};
Object.assign(Display, {
  "": Displays.map((d) => {
    return d;
  }),
});
GridBreakpoints.push("print");
GridBreakpoints.map((gb) => {
  if (gb !== "xs") {
    Object.assign(Display, {
      [gb]: Displays.map((d) => {
        return d;
      }),
    });
  }
  return undefined;
});

module.exports = Display;
