/* eslint-disable @typescript-eslint/no-var-requires */
const Path = require("path");
const createFileTypes = require("../../../util/createFileTypes");
const {
  Margin,
  MarginTop,
  MarginRight,
  MarginLeft,
  MarginBottom,
  MarginHorizontal,
  MarginVertical,
  Padding,
  PaddingTop,
  PaddingRight,
  PaddingLeft,
  PaddingBottom,
  PaddingHorizontal,
  PaddingVertical,
} = require("../../Variabel/utilities/Spacing");
const { GridBreakpoints } = require("../../Variabel/Variables");

// //////////////////////////////////////////////////////////////////
// Spacing //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////
const Spacing = {};

GridBreakpoints.map((gb) => {
  if (gb !== "xs") {
    Object.assign(Spacing, {
      // Margin /////////////////////////////////////////////////////
      Margin: Margin[""],
      [`Margin${gb.toUpperCase()}`]: Margin[gb],
      MarginTop: MarginTop[""],
      [`MarginTop${gb.toUpperCase()}`]: MarginTop[gb],
      MarginRight: MarginRight[""],
      [`MarginRight${gb.toUpperCase()}`]: MarginRight[gb],
      MarginLeft: MarginLeft[""],
      [`MarginLeft${gb.toUpperCase()}`]: MarginLeft[gb],
      MarginBottom: MarginBottom[""],
      [`MarginBottom${gb.toUpperCase()}`]: MarginBottom[gb],
      MarginHorizontal: MarginHorizontal[""],
      [`MarginHorizontal${gb.toUpperCase()}`]: MarginHorizontal[gb],
      MarginVertical: MarginVertical[""],
      [`MarginVertical${gb.toUpperCase()}`]: MarginVertical[gb],

      // Padding ////////////////////////////////////////////////////
      Padding: Padding[""],
      [`Padding${gb.toUpperCase()}`]: Padding[gb],
      PaddingTop: PaddingTop[""],
      [`PaddingTop${gb.toUpperCase()}`]: PaddingTop[gb],
      PaddingRight: PaddingRight[""],
      [`PaddingRight${gb.toUpperCase()}`]: PaddingRight[gb],
      PaddingLeft: PaddingLeft[""],
      [`PaddingLeft${gb.toUpperCase()}`]: PaddingLeft[gb],
      PaddingBottom: PaddingBottom[""],
      [`PaddingBottom${gb.toUpperCase()}`]: PaddingBottom[gb],
      PaddingHorizontal: PaddingHorizontal[""],
      [`PaddingHorizontal${gb.toUpperCase()}`]: PaddingHorizontal[gb],
      PaddingVertical: PaddingVertical[""],
      [`PaddingVertical${gb.toUpperCase()}`]: PaddingVertical[gb],
    });
  }
  return undefined;
});

// //////////////////////////////////////////////////////////////////
// Create File types ////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////
createFileTypes(Spacing, Path.resolve(__dirname, "types.tsx"));
