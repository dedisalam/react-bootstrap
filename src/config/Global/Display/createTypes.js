/* eslint-disable @typescript-eslint/no-var-requires */
const Path = require("path");
const { display, gridBreakpoint } = require("../../Variabel");
const writeFile = require("../../../util/writeFile");

/**
 * Display
 */

const Display = {};

Object.assign(Display, {
  all: display.map((d) => {
    return d;
  }),
});

gridBreakpoint.map((gb) => {
  return Object.assign(Display, {
    [gb]: display.map((d) => {
      return d;
    }),
  });
});

Object.assign(Display, {
  print: display.map((d) => {
    return d;
  }),
});

/**
 * Create File types
 */

const Keys = Object.keys(Display);
const DisplayContent = [];
const DisplayTitle = [];

// eslint-disable-next-line no-restricted-syntax
for (const Key of Keys) {
  DisplayContent.push(
    `const Display${Key.toString().toUpperCase()} = tuple("${Display[Key].join(
      '", "'
    )}")`
  );
  DisplayTitle.push(`Display${Key.toString().toUpperCase()}`);
}

const content = `// Render by Node
const tuple = <T extends string[]>(...args: T) => args;

${DisplayContent.join("\n")}

export { ${DisplayTitle.join(", ")} };
`;

writeFile(Path.resolve(__dirname, "types.tsx"), content);
