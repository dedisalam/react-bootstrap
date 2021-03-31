/* eslint-disable @typescript-eslint/no-var-requires */
const themeColor = require("./themeColor");

const border = [
  "all",
  "top",
  "right",
  "bottom",
  "left",
  "0",
  "top-0",
  "right-0",
  "bottom-0",
  "left-0",
];

themeColor.map((tc) => {
  border.push(tc);
  return null;
});

border.push("white");

module.exports = border;
