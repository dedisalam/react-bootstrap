/* eslint-disable @typescript-eslint/no-var-requires */
const Path = require("path");
const { align } = require("../../Variabel");
const writeFile = require("../../../util/writeFile");

/**
 * Align
 */

const Align = {};

Object.assign(Align, {
  all: align.map((d) => {
    return d;
  }),
});

/**
 * Create File types
 */

const Keys = Object.keys(Align);
const AlignContent = [];
const AlignTitle = [];

// eslint-disable-next-line no-restricted-syntax
for (const Key of Keys) {
  AlignContent.push(
    `const ${Key.toString().toUpperCase()} = tuple("${Align[Key].join(
      '", "'
    )}")`
  );
  AlignTitle.push(`${Key.toString().toUpperCase()}`);
}

const content = `// Render by Node
const tuple = <T extends string[]>(...args: T) => args;

${AlignContent.join("\n")}

export default ${AlignTitle.join(", ")};
`;

writeFile(Path.resolve(__dirname, "types.tsx"), content);
