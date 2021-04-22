/* eslint-disable @typescript-eslint/no-var-requires */
const { ThemeColors } = require("./Variables");

//
// Base styles
//

const Alert = "alert";

// Headings for larger alerts
const AlertHeading = "alert-heading";

// Provide class for links that match alerts
const AlertLink = "alert-link";

// Alternate styles
//
// Generate contextual modifier classes for colorizing the alert.

const AlertBgColor = ThemeColors.map((tc) => {
  return tc;
});

module.exports = {
  Alert,
  AlertHeading,
  AlertLink,
  AlertBgColor,
};
