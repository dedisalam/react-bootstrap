/* eslint-disable @typescript-eslint/no-var-requires */
const writeFile = require("./writeFile");

const createFileTypes = (Obj, dir) => {
  const Keys = Object.keys(Obj);
  const Content = [];
  const Title = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const Key of Keys) {
    Content.push(
      `const ${Key.toString().toUpperCase()} = tuple("${Obj[Key].join(
        '", "'
      )}")`
    );
    Title.push(Key.toString().toUpperCase());
  }

  const content = `// Render by Node
  const tuple = <T extends string[]>(...args: T) => args;
  
  ${Content.join("\n")}
  
  export { ${Title.join(", ")} };
  `;

  return writeFile(dir, content);
};

module.exports = createFileTypes;
