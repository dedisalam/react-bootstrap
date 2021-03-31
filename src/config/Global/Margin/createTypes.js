/* eslint-disable @typescript-eslint/no-var-requires */
const Path = require("path");
const { spacer, gridBreakpoint } = require("../../Variabel");
const writeFile = require("../../../util/writeFile");

/**
 * Margin
 */

const Margin = {};

Object.assign(Margin, {
  All: spacer
    .map((s) => {
      return s;
    })
    .concat(
      spacer.map((s) => {
        if (s !== 0) {
          return `n${s}`;
        }
        return "auto";
      })
    ),
});

Object.assign(Margin, {
  Top: spacer
    .map((s) => {
      return s;
    })
    .concat(
      spacer.map((s) => {
        if (s !== 0) {
          return `n${s}`;
        }
        return "auto";
      })
    ),
});

Object.assign(Margin, {
  Vertical: spacer
    .map((s) => {
      return s;
    })
    .concat(
      spacer.map((s) => {
        if (s !== 0) {
          return `n${s}`;
        }
        return "auto";
      })
    ),
});

Object.assign(Margin, {
  Bottom: spacer
    .map((s) => {
      return s;
    })
    .concat(
      spacer.map((s) => {
        if (s !== 0) {
          return `n${s}`;
        }
        return "auto";
      })
    ),
});

Object.assign(Margin, {
  Right: spacer
    .map((s) => {
      return s;
    })
    .concat(
      spacer.map((s) => {
        if (s !== 0) {
          return `n${s}`;
        }
        return "auto";
      })
    ),
});

Object.assign(Margin, {
  Horizontal: spacer
    .map((s) => {
      return s;
    })
    .concat(
      spacer.map((s) => {
        if (s !== 0) {
          return `n${s}`;
        }
        return "auto";
      })
    ),
});

Object.assign(Margin, {
  Left: spacer
    .map((s) => {
      return s;
    })
    .concat(
      spacer.map((s) => {
        if (s !== 0) {
          return `n${s}`;
        }
        return "auto";
      })
    ),
});

gridBreakpoint.map((gb) => {
  return Object.assign(Margin, {
    [`Top${gb.charAt(0).toUpperCase()}${gb.slice(1)}`]: spacer
      .map((s) => {
        return s;
      })
      .concat(
        spacer.map((s) => {
          if (s !== 0) {
            return `n${s}`;
          }
          return "auto";
        })
      ),
  });
});

gridBreakpoint.map((gb) => {
  return Object.assign(Margin, {
    [`Vertical${gb.charAt(0).toUpperCase()}${gb.slice(1)}`]: spacer
      .map((s) => {
        return s;
      })
      .concat(
        spacer.map((s) => {
          if (s !== 0) {
            return `n${s}`;
          }
          return "auto";
        })
      ),
  });
});

gridBreakpoint.map((gb) => {
  return Object.assign(Margin, {
    [`Bottom${gb.charAt(0).toUpperCase()}${gb.slice(1)}`]: spacer
      .map((s) => {
        return s;
      })
      .concat(
        spacer.map((s) => {
          if (s !== 0) {
            return `n${s}`;
          }
          return "auto";
        })
      ),
  });
});

gridBreakpoint.map((gb) => {
  return Object.assign(Margin, {
    [`Right${gb.charAt(0).toUpperCase()}${gb.slice(1)}`]: spacer
      .map((s) => {
        return s;
      })
      .concat(
        spacer.map((s) => {
          if (s !== 0) {
            return `n${s}`;
          }
          return "auto";
        })
      ),
  });
});

gridBreakpoint.map((gb) => {
  return Object.assign(Margin, {
    [`Horizontal${gb.charAt(0).toUpperCase()}${gb.slice(1)}`]: spacer
      .map((s) => {
        return s;
      })
      .concat(
        spacer.map((s) => {
          if (s !== 0) {
            return `n${s}`;
          }
          return "auto";
        })
      ),
  });
});

gridBreakpoint.map((gb) => {
  return Object.assign(Margin, {
    [`Left${gb.charAt(0).toUpperCase()}${gb.slice(1)}`]: spacer
      .map((s) => {
        return s;
      })
      .concat(
        spacer.map((s) => {
          if (s !== 0) {
            return `n${s}`;
          }
          return "auto";
        })
      ),
  });
});

/**
 * Create File types
 */

const Keys = Object.keys(Margin);
const MarginContent = [];
const MarginTitle = [];

// eslint-disable-next-line no-restricted-syntax
for (const Key of Keys) {
  MarginContent.push(
    `const Margin${Key} = tuple("${Margin[Key].join('", "')}")`
  );
  MarginTitle.push(`Margin${Key}`);
}

const content = `// Render by Node
const tuple = <T extends string[]>(...args: T) => args;

${MarginContent.join("\n")}

export { ${MarginTitle.join(", ")} };
`;

writeFile(Path.resolve(__dirname, "types.tsx"), content);
