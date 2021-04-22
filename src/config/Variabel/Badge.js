/* eslint-disable @typescript-eslint/no-var-requires */
const { ThemeColors } = require("./Variables");

// Base class
//
// Requires one of the contextual, color modifier classes for `color` and
// `background-color`.

const Badge = "badge";

// Pill badges
//
// Make them extra rounded with a modifier to replace v3's badges.

const BadgePill = "badge-pill";

// Colors
//
// Contextual variations (linked badges get darker on :hover).
const BadgeColor = ThemeColors.map((tc) => {
  return `badge-${tc}`;
});

module.exports = {
  Badge,
  BadgePill,
  BadgeColor,
};
