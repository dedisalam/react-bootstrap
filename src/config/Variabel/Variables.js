// // Variables
// //
// // Variables should follow the `$component-state-property-size` formula for
// // consistent naming. Ex: $nav-link-disabled-color and $modal-content-box-shadow-xs.

// // Color system

// $black:    #000 !default;

const Grays = ["100", "200", "300", "400", "500", "600", "700", "800", "900"];

const Colors = [
  "blue",
  "indigo",
  "purple",
  "pink",
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "cyan",
  "white",
  "gray",
  "gray-dark",
];

const ThemeColors = [
  "primary",
  "secondary",
  "success",
  "info",
  "warning",
  "danger",
  "light",
  "dark",
];

// Characters which are escaped by the escape-svg function
const EscapedCharacters = [
  ["<", "%3c"],
  [">", "%3e"],
  ["#", "%23"],
  ["(", "%28"],
  [")", "%29"],
];

// Options
//
// Quickly modify global styling by enabling or disabling optional features.

const EnableCaret = true;
const EnableRounded = true;
const EnableShadows = false;
const EnableGradients = true;
const EnableTransitions = true;
const EnablePrefersReducedMotionMediaQuery = true;
const EnableHoverMediaQuery = false;
const EnableGridClasses = true;
const EnablePointerCursorForButtons = true;
const EnablePrintStyles = true;
const EnableResponsiveFontSizes = false;
const EnableValidationIcons = true;
const EnableDeprecationMessages = true;

// Spacing
//
// Control the default styling of most Bootstrap elements by modifying these
// variables. Mostly focused on spacing.
// You can add more entries to the $spacers map, should you need more variation.

const Spacers = ["0", "1", "2", "3", "4", "5"];

// This variable affects the `.h-*` and `.w-*` classes.
const Sizes = ["25", "50", "75", "100", "auto"];

// Grid breakpoints
//
// Define the minimum dimensions at which your layout will change,
// adapting to different screen sizes, for use in media queries.

const GridBreakpoints = ["xs", "sm", "md", "lg", "xl"];

// Grid containers
//
// Define the maximum width of `.container` for different screen sizes.

const ContainerMaxWidths = ["sm", "md", "lg", "xl"];

// Components
//
// Define common padding and border radius sizes and more.

const EmbedResponsiveAspectRatios = [
  ["21", "9"],
  ["16", "9"],
  ["4", "3"],
  ["1", "1"],
];

// Form validation

const FormValidationStates = {
  valid: ["color", "icon"],
  invalid: ["color", "icon"],
};

// Utilities

const Displays = [
  "none",
  "inline",
  "inline-block",
  "block",
  "table",
  "table-row",
  "table-cell",
  "flex",
  "inline-flex",
];
const Overflows = ["auto", "hidden"];
const Positions = ["static", "relative", "absolute", "fixed", "sticky"];
const UserSelects = ["all", "auto", "none"];

module.exports = {
  Grays,
  Colors,
  ThemeColors,
  EscapedCharacters,
  EnableCaret,
  EnableRounded,
  EnableShadows,
  EnableGradients,
  EnableTransitions,
  EnablePrefersReducedMotionMediaQuery,
  EnableHoverMediaQuery,
  EnableGridClasses,
  EnablePointerCursorForButtons,
  EnablePrintStyles,
  EnableResponsiveFontSizes,
  EnableValidationIcons,
  EnableDeprecationMessages,
  Spacers,
  Sizes,
  GridBreakpoints,
  ContainerMaxWidths,
  EmbedResponsiveAspectRatios,
  FormValidationStates,
  Displays,
  Overflows,
  Positions,
  UserSelects,
};
