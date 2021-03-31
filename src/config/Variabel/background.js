/* eslint-disable @typescript-eslint/no-var-requires */
const themeColor = require("./themeColor");

const background = [];

themeColor.map((tc) => {
  background.push(tc);
  return null;
});

themeColor.map((tc) => {
  background.push(`gradient-${tc}`);
  return null;
});

background.push("white");
background.push("transparent");

module.exports = background;
