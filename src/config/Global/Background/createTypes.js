/* eslint-disable @typescript-eslint/no-var-requires */
const Path = require("path");
const { background } = require("../../Variabel");
const writeFile = require("../../../util/writeFile");

/**
 * Background
 */

const Background = {};

Object.assign(Background, {
  all: background.map((d) => {
    return d;
  }),
});

/**
 * Create File types
 */

const Keys = Object.keys(Background);
const BackgroundContent = [];
const BackgroundTitle = [];

// eslint-disable-next-line no-restricted-syntax
for (const Key of Keys) {
  BackgroundContent.push(
    `const ${Key.toString().toUpperCase()} = tuple("${Background[Key].join(
      '", "'
    )}")`
  );
  BackgroundTitle.push(`${Key.toString().toUpperCase()}`);
}

const content = `// Render by Node
const tuple = <T extends string[]>(...args: T) => args;

${BackgroundContent.join("\n")}

export default ${BackgroundTitle.join(", ")};
`;

writeFile(Path.resolve(__dirname, "types.tsx"), content);
