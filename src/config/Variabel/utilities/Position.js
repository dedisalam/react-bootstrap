/* eslint-disable @typescript-eslint/no-var-requires */
const { Positions } = require("../Variables");

// Common values
const Position = Positions.map((p) => {
  return `position-${p}`;
});

// Shorthand

const PositionShorthand = ["fixed-top", "fixed-bottom", "sticky-top"];

module.exports = { Position, PositionShorthand };
