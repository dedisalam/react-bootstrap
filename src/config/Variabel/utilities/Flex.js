/* eslint-disable @typescript-eslint/no-var-requires */
const { GridBreakpoints } = require("../Variables");

// Flex variation
//
// Custom styles for additional flex alignment options.
const FlexDirection = {};
GridBreakpoints.map((gb) => {
  Object.assign(FlexDirection, {
    [gb]: ["row", "column", "row-reverse", "column-reverse"].map((arr) => {
      return `flex-${gb}-${arr}`;
    }),
  });
  return undefined;
});

const FlexWrap = {};
GridBreakpoints.map((gb) => {
  Object.assign(FlexWrap, {
    [gb]: [
      "wrap",
      "nowrap",
      "wrap-reverse",
      "fill",
      "grow-0",
      "grow-1",
      "shrink-0",
      "shrink-1",
    ].map((arr) => {
      return `flex-${gb}-${arr}`;
    }),
  });
  return undefined;
});

const JustifyContent = {};
GridBreakpoints.map((gb) => {
  Object.assign(JustifyContent, {
    [gb]: ["start", "end", "center", "between", "around"].map((arr) => {
      return `justify-content-${gb}-${arr}`;
    }),
  });
  return undefined;
});

const AlignItems = {};
GridBreakpoints.map((gb) => {
  Object.assign(AlignItems, {
    [gb]: ["start", "end", "center", "baseline", "stretch"].map((arr) => {
      return `align-items-${gb}-${arr}`;
    }),
  });
  return undefined;
});

const AlignContent = {};
GridBreakpoints.map((gb) => {
  Object.assign(AlignContent, {
    [gb]: ["start", "end", "center", "between", "around", "stretch"].map(
      (arr) => {
        return `align-content-${gb}-${arr}`;
      }
    ),
  });
  return undefined;
});

const AlignSelf = {};
GridBreakpoints.map((gb) => {
  Object.assign(AlignSelf, {
    [gb]: ["auto", "start", "end", "center", "baseline", "stretch"].map(
      (arr) => {
        return `align-self-${gb}-${arr}`;
      }
    ),
  });
  return undefined;
});

module.exports = {
  FlexDirection,
  FlexWrap,
  JustifyContent,
  AlignItems,
  AlignContent,
  AlignSelf,
};
