/* eslint-disable @typescript-eslint/no-var-requires */
const Path = require("path");
const writeFile = require("../../../util/writeFile");

const ButtonGroup = {};

/**
 * Size
 */

Object.assign(ButtonGroup, {
  Size: ["sm", "lg"],
});

/**
 * Create File types
 */

const Keys = Object.keys(ButtonGroup);
const ButtonGroupContent = [];
const ButtonGroupTitle = [];

// eslint-disable-next-line no-restricted-syntax
for (const Key of Keys) {
  ButtonGroupContent.push(
    `const ${Key.toString().toUpperCase()} = tuple("${ButtonGroup[Key].join(
      '", "'
    )}")`
  );
  ButtonGroupTitle.push(Key.toString().toUpperCase());
}

const content = `// Render by Node
const tuple = <T extends string[]>(...args: T) => args;

${ButtonGroupContent.join("\n")}

export { ${ButtonGroupTitle.join(", ")} };
`;

writeFile(Path.resolve(__dirname, "types.tsx"), content);
