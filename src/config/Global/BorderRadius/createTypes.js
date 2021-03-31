/* eslint-disable @typescript-eslint/no-var-requires */
const Path = require("path");
const { borderRadius } = require("../../Variabel");
const writeFile = require("../../../util/writeFile");

/**
 * BorderRadius
 */

const BorderRadius = {};

Object.assign(BorderRadius, {
  all: borderRadius.map((d) => {
    return d;
  }),
});

/**
 * Create File types
 */

const Keys = Object.keys(BorderRadius);
const BorderRadiusContent = [];
const BorderRadiusTitle = [];

// eslint-disable-next-line no-restricted-syntax
for (const Key of Keys) {
  BorderRadiusContent.push(
    `const ${Key.toString().toUpperCase()} = tuple("${BorderRadius[Key].join(
      '", "'
    )}")`
  );
  BorderRadiusTitle.push(`${Key.toString().toUpperCase()}`);
}

const content = `// Render by Node
const tuple = <T extends string[]>(...args: T) => args;

${BorderRadiusContent.join("\n")}

export default ${BorderRadiusTitle.join(", ")};
`;

writeFile(Path.resolve(__dirname, "types.tsx"), content);
