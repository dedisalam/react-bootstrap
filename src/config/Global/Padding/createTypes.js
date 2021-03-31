/* eslint-disable @typescript-eslint/no-var-requires */
const Path = require("path");
const { spacer, gridBreakpoint } = require("../../Variabel");
const writeFile = require("../../../util/writeFile");

/**
 * Padding
 */

const Padding = {};

Object.assign(Padding, {
  All: spacer
    .map((s) => {
      return `p-${s}`;
    })
    .concat(
      spacer.map((s) => {
        if (s !== 0) {
          return `p-n${s}`;
        }
        return `p-auto`;
      })
    ),
});

Object.assign(Padding, {
  Top: spacer
    .map((s) => {
      return `pt-${s}`;
    })
    .concat(
      spacer.map((s) => {
        if (s !== 0) {
          return `pt-n${s}`;
        }
        return `pt-auto`;
      })
    ),
});

Object.assign(Padding, {
  Vertical: spacer
    .map((s) => {
      return `py-${s}`;
    })
    .concat(
      spacer.map((s) => {
        if (s !== 0) {
          return `py-n${s}`;
        }
        return `py-auto`;
      })
    ),
});

Object.assign(Padding, {
  Bottom: spacer
    .map((s) => {
      return `pb-${s}`;
    })
    .concat(
      spacer.map((s) => {
        if (s !== 0) {
          return `pb-n${s}`;
        }
        return `pb-auto`;
      })
    ),
});

Object.assign(Padding, {
  Right: spacer
    .map((s) => {
      return `pr-${s}`;
    })
    .concat(
      spacer.map((s) => {
        if (s !== 0) {
          return `pr-n${s}`;
        }
        return `pr-auto`;
      })
    ),
});

Object.assign(Padding, {
  Horizontal: spacer
    .map((s) => {
      return `px-${s}`;
    })
    .concat(
      spacer.map((s) => {
        if (s !== 0) {
          return `px-n${s}`;
        }
        return `px-auto`;
      })
    ),
});

Object.assign(Padding, {
  Left: spacer
    .map((s) => {
      return `pl-${s}`;
    })
    .concat(
      spacer.map((s) => {
        if (s !== 0) {
          return `pl-n${s}`;
        }
        return `pl-auto`;
      })
    ),
});

gridBreakpoint.map((gb) => {
  return Object.assign(Padding, {
    [`Top${gb.charAt(0).toUpperCase()}${gb.slice(1)}`]: spacer
      .map((s) => {
        return `pt-${gb}-${s}`;
      })
      .concat(
        spacer.map((s) => {
          if (s !== 0) {
            return `pt-${gb}-n${s}`;
          }
          return `pt-${gb}-auto`;
        })
      ),
  });
});

gridBreakpoint.map((gb) => {
  return Object.assign(Padding, {
    [`Vertical${gb.charAt(0).toUpperCase()}${gb.slice(1)}`]: spacer
      .map((s) => {
        return `py-${gb}-${s}`;
      })
      .concat(
        spacer.map((s) => {
          if (s !== 0) {
            return `py-${gb}-n${s}`;
          }
          return `py-${gb}-auto`;
        })
      ),
  });
});

gridBreakpoint.map((gb) => {
  return Object.assign(Padding, {
    [`Bottom${gb.charAt(0).toUpperCase()}${gb.slice(1)}`]: spacer
      .map((s) => {
        return `pb-${gb}-${s}`;
      })
      .concat(
        spacer.map((s) => {
          if (s !== 0) {
            return `pb-${gb}-n${s}`;
          }
          return `pb-${gb}-auto`;
        })
      ),
  });
});

gridBreakpoint.map((gb) => {
  return Object.assign(Padding, {
    [`Right${gb.charAt(0).toUpperCase()}${gb.slice(1)}`]: spacer
      .map((s) => {
        return `pr-${gb}-${s}`;
      })
      .concat(
        spacer.map((s) => {
          if (s !== 0) {
            return `pr-${gb}-n${s}`;
          }
          return `pr-${gb}-auto`;
        })
      ),
  });
});

gridBreakpoint.map((gb) => {
  return Object.assign(Padding, {
    [`Horizontal${gb.charAt(0).toUpperCase()}${gb.slice(1)}`]: spacer
      .map((s) => {
        return `px-${gb}-${s}`;
      })
      .concat(
        spacer.map((s) => {
          if (s !== 0) {
            return `px-${gb}-n${s}`;
          }
          return `px-${gb}-auto`;
        })
      ),
  });
});

gridBreakpoint.map((gb) => {
  return Object.assign(Padding, {
    [`Left${gb.charAt(0).toUpperCase()}${gb.slice(1)}`]: spacer
      .map((s) => {
        return `pl-${gb}-${s}`;
      })
      .concat(
        spacer.map((s) => {
          if (s !== 0) {
            return `pl-${gb}-n${s}`;
          }
          return `pl-${gb}-auto`;
        })
      ),
  });
});

/**
 * Create File types
 */

const Keys = Object.keys(Padding);
const PaddingContent = [];
const PaddingTitle = [];

// eslint-disable-next-line no-restricted-syntax
for (const Key of Keys) {
  PaddingContent.push(
    `const Padding${Key} = tuple("${Padding[Key].join('", "')}")`
  );
  PaddingTitle.push(`Padding${Key}`);
}

const content = `// Render by Node
const tuple = <T extends string[]>(...args: T) => args;

${PaddingContent.join("\n")}

export { ${PaddingTitle.join(", ")} };
`;

writeFile(Path.resolve(__dirname, "types.tsx"), content);
