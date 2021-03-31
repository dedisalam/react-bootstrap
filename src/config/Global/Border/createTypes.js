/* eslint-disable @typescript-eslint/no-var-requires */
const Path = require("path");
const { border } = require("../../Variabel");
const writeFile = require("../../../util/writeFile");

/**
 * Border
 */

const Border = {};

Object.assign(Border, {
  all: border.map((d) => {
    return d;
  }),
});

/**
 * Create File types
 */

const Keys = Object.keys(Border);
const BorderContent = [];
const BorderTitle = [];

// eslint-disable-next-line no-restricted-syntax
for (const Key of Keys) {
  BorderContent.push(
    `const ${Key.toString().toUpperCase()} = tuple("${Border[Key].join(
      '", "'
    )}")`
  );
  BorderTitle.push(`${Key.toString().toUpperCase()}`);
}

const content = `// Render by Node
const tuple = <T extends string[]>(...args: T) => args;

${BorderContent.join("\n")}

export default ${BorderTitle.join(", ")};
`;

writeFile(Path.resolve(__dirname, "types.tsx"), content);
