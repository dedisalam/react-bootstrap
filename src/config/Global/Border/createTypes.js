/* eslint-disable @typescript-eslint/no-var-requires */
const Path = require("path");
const createFileTypes = require("../../../util/createFileTypes");
const {
  BorderColor,
  BorderRadius,
} = require("../../Variabel/utilities/Borders");

// //////////////////////////////////////////////////////////////////
// Border ///////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////
const BorderObj = {};

Object.assign(BorderObj, {
  BorderColor,
  BorderRadius,
});

// //////////////////////////////////////////////////////////////////
// Create File types ////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////
createFileTypes(BorderObj, Path.resolve(__dirname, "types.tsx"));
