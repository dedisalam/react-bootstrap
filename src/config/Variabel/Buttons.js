/* eslint-disable @typescript-eslint/no-var-requires */
const { ThemeColors } = require("./Variables");

// //
// // Base styles
// //

// .btn

// // Future-proof disabling of clicks on `<a>` elements
// a.btn.disabled,
// fieldset:disabled a.btn {
//   pointer-events: none;
// }

//
// Alternate buttons
//
const ButtonBgColor = ThemeColors.map((tc) => {
  return `btn-${tc}`;
}).concat(
  ThemeColors.map((tc) => {
    return `btn-outline-${tc}`;
  })
);

// //
// // Link buttons
// //

// // Make a button look and behave like a link
// .btn-link {
//   font-weight: $font-weight-normal;
//   color: $link-color;
//   text-decoration: $link-decoration;

//   @include hover() {
//     color: $link-hover-color;
//     text-decoration: $link-hover-decoration;
//   }

//   &:focus,
//   &.focus {
//     text-decoration: $link-hover-decoration;
//   }

//   &:disabled,
//   &.disabled {
//     color: $btn-link-disabled-color;
//     pointer-events: none;
//   }

//   // No need for an active state here
// }

//
// Button Sizes
//

const ButtonSize = ["btn-lg", "btn-sm"];

// //
// // Block button
// //

// .btn-block {
//   display: block;
//   width: 100%;

//   // Vertically space out multiple block buttons
//   + .btn-block {
//     margin-top: $btn-block-spacing-y;
//   }
// }

// // Specificity overrides
// input[type="submit"],
// input[type="reset"],
// input[type="button"] {
//   &.btn-block {
//     width: 100%;
//   }
// }

module.exports = { ButtonBgColor, ButtonSize };
