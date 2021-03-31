/* eslint-disable @typescript-eslint/no-var-requires */
const Path = require("path");
const { themeColor } = require("../../Variabel");
const writeFile = require("../../../util/writeFile");

const Badge = {};

/**
 * Badge
 */

Object.assign(Badge, {
  Bg: themeColor.map((tc) => {
    return tc;
  }),
});

/**
 * Create File types
 */

const Keys = Object.keys(Badge);
const BadgeContent = [];
const BadgeTitle = [];

// eslint-disable-next-line no-restricted-syntax
for (const Key of Keys) {
  BadgeContent.push(
    `const ${Key.toString().toUpperCase()} = tuple("${Badge[Key].join(
      '", "'
    )}")`
  );
  BadgeTitle.push(Key.toString().toUpperCase());
}

const content = `// Render by Node
const tuple = <T extends string[]>(...args: T) => args;

${BadgeContent.join("\n")}

export { ${BadgeTitle.join(", ")} };
`;

writeFile(Path.resolve(__dirname, "types.tsx"), content);
