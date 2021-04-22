/* eslint-disable @typescript-eslint/no-var-requires */
const { ThemeColors, EnableGradients } = require("../Variables");

let BgGradientVariant;
if (EnableGradients) {
  BgGradientVariant = ThemeColors.map((tc) => {
    return `gradient-${tc}`;
  });
}

ThemeColors.push(...["white", "transparent"]);
const BgVariant = ThemeColors.map((tc) => {
  return tc;
});

module.exports = {
  BgVariant,
  BgGradientVariant,
};
