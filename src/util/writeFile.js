/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");

const writeFile = (filename, content) => {
  fs.writeFile(filename, content, (err) => {
    if (err) throw err;
  });
};

module.exports = writeFile;
