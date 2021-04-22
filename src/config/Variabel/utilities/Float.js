/* eslint-disable @typescript-eslint/no-var-requires */
const { GridBreakpoints } = require("../Variables");

const Float = {};
GridBreakpoints.map((gb) => {
  if (gb !== "xs") {
    Object.assign(Float, {
      [gb]: ["left", "right", "none"].map((arr) => {
        return `float-${gb}-${arr}`;
      }),
    });
  }
  return undefined;
});

module.exports = Float;
