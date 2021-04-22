/* eslint-disable @typescript-eslint/no-var-requires */
const { GridBreakpoints, ThemeColors } = require("../Variables");

//
// Text
//

const TextMonospace = "text-monospace";

// Alignment
const TextAlignment = [
  "text-justify",
  "text-wrap",
  "text-nowrap",
  "text-truncate",
];

// Responsive alignment
const TextAlign = {
  "": ["text-left", "text-right", "text-center"],
};
GridBreakpoints.map((gb) => {
  if (gb !== "xs") {
    Object.assign(TextAlign, {
      [gb]: [`text-${gb}-left`, `text-${gb}-right`, `text-${gb}-center`],
    });
  }
  return undefined;
});

// Transformation
const TextTransform = ["text-lowercase", "text-uppercase", "text-capitalize"];

// Weight and italics
const TextWeight = [
  "font-weight-light",
  "font-weight-lighter",
  "font-weight-normal",
  "font-weight-bold",
  "font-weight-bolder",
];

const TextItalic = "font-italic";

// Contextual colors

const TextColor = ThemeColors.map((tc) => {
  return `text-${tc}`;
});

TextColor.push(
  ...["text-white", "text-body", "text-muted", "text-black-50", "text-white-50"]
);

// Misc

const TextHide = "text-hide";
const TextDecorationNone = "text-decoration-none";
const TextBreak = "text-break";

// Reset

const TextReset = "text-reset";

module.exports = {
  TextMonospace,
  TextAlignment,
  TextAlign,
  TextTransform,
  TextWeight,
  TextItalic,
  TextColor,
  TextHide,
  TextDecorationNone,
  TextBreak,
  TextReset,
};
