/* eslint-disable @typescript-eslint/no-var-requires */
const { ThemeColors } = require("../Variables");

//
// Border
//

// border-color
ThemeColors.push("white");
const BorderColor = ThemeColors.map((tc) => {
  return tc;
});

// Border-radius
const BorderRadius = [
  "sm",
  "",
  "top",
  "right",
  "bottom",
  "left",
  "lg",
  "circle",
  "pill",
  "0",
];

module.exports = {
  BorderColor,
  BorderRadius,
};
