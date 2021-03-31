/* eslint-disable @typescript-eslint/no-var-requires */
const Path = require("path");
const { themeColor } = require("../../Variabel");
const writeFile = require("../../../util/writeFile");

const Alert = {};

/**
 * Alert
 */

Object.assign(Alert, {
  Bg: themeColor.map((tc) => {
    return tc;
  }),
});

/**
 * Create File types
 */

const Keys = Object.keys(Alert);
const AlertContent = [];
const AlertTitle = [];

// eslint-disable-next-line no-restricted-syntax
for (const Key of Keys) {
  AlertContent.push(
    `const ${Key.toString().toUpperCase()} = tuple("${Alert[Key].join(
      '", "'
    )}")`
  );
  AlertTitle.push(Key.toString().toUpperCase());
}

const content = `// Render by Node
const tuple = <T extends string[]>(...args: T) => args;

${AlertContent.join("\n")}

export { ${AlertTitle.join(", ")} };
`;

writeFile(Path.resolve(__dirname, "types.tsx"), content);
