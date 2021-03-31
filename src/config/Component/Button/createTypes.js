/* eslint-disable @typescript-eslint/no-var-requires */
const Path = require("path");
const { themeColor } = require("../../Variabel");
const writeFile = require("../../../util/writeFile");

const Button = {};

/**
 * Button
 */

Object.assign(Button, {
  Bg: themeColor.map((tc) => {
    return tc;
  }),
});

/**
 * Size
 */

Object.assign(Button, {
  Size: ["sm", "lg"],
});

/**
 * Create File types
 */

const Keys = Object.keys(Button);
const ButtonContent = [];
const ButtonTitle = [];

// eslint-disable-next-line no-restricted-syntax
for (const Key of Keys) {
  ButtonContent.push(
    `const ${Key.toString().toUpperCase()} = tuple("${Button[Key].join(
      '", "'
    )}")`
  );
  ButtonTitle.push(Key.toString().toUpperCase());
}

const content = `// Render by Node
const tuple = <T extends string[]>(...args: T) => args;

${ButtonContent.join("\n")}

export { ${ButtonTitle.join(", ")} };
`;

writeFile(Path.resolve(__dirname, "types.tsx"), content);
