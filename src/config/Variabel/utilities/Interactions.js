/* eslint-disable @typescript-eslint/no-var-requires */
const { UserSelects } = require("../Variables");

const UserSelect = UserSelects.map((us) => {
  return `user-select-${us}`;
});

module.exports = UserSelect;
