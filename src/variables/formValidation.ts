// Form validation

import { SUCCESS, DANGER } from './colorSystem';
import { FORM_TEXT_FONT_SIZE, FORM_TEXT_FONT_STYLE, FORM_TEXT_MARGIN_TOP } from './form';

// scss-docs-start form-feedback-variables
export const FORM_FEEDBACK_MARGIN_TOP = FORM_TEXT_MARGIN_TOP;
export const FORM_FEEDBACK_FONT_SIZE = FORM_TEXT_FONT_SIZE;
export const FORM_FEEDBACK_FONT_STYLE = FORM_TEXT_FONT_STYLE;
export const FORM_FEEDBACK_VALID_COLOR = SUCCESS;
export const FORM_FEEDBACK_INVALID_COLOR = DANGER;

export const FORM_FEEDBACK_ICON_VALID_COLOR = FORM_FEEDBACK_VALID_COLOR;
export const FORM_FEEDBACK_ICON_VALID: string = 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'><path fill=\'#{form-feedback-icon-valid-color}\' d=\'M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z\'/></svg>")';
export const FORM_FEEDBACK_ICON_INVALID_COLOR = FORM_FEEDBACK_INVALID_COLOR;
export const FORM_FEEDBACK_ICON_INVALID: string = 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'#{form-feedback-icon-invalid-color}\'><circle cx=\'6\' cy=\'6\' r=\'4.5\'/><path stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/><circle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'#{form-feedback-icon-invalid-color}\' stroke=\'none\'/></svg>")';
// scss-docs-end form-feedback-variables

// // scss-docs-start form-validation-states
// form-validation-states: (
//   "valid": (
//     "color": form-feedback-valid-color,
//     "icon": form-feedback-icon-valid
//   ),
//   "invalid": (
//     "color": form-feedback-invalid-color,
//     "icon": form-feedback-icon-invalid
//   )
// );
// // scss-docs-end form-validation-states
