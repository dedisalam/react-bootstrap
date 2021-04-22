/* eslint-disable @typescript-eslint/no-var-requires */
const { Overflows } = require("../Variables");

const Overflow = Overflows.map((o) => {
  return `overflow-${o}`;
});

module.exports = Overflow;
