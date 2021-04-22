/* eslint-disable @typescript-eslint/no-var-requires */
const { Sizes } = require("../Variables");

// Width and height
const Width = Sizes.map((s) => {
  return `w-${s}`;
});
Width.push("mw-100");

const Height = Sizes.map((s) => {
  return `h-${s}`;
});
Height.push("mh-100");

// Viewport additional helpers
const VWidth = ["min-vw-100", "vw-100"];
const VHeight = ["min-vh-100", "vh-100"];

module.exports = {
  Width,
  Height,
  VWidth,
  VHeight,
};
