/* eslint-disable import/prefer-default-export */
// Gradient
//
// The gradient which is added to components if `enable-gradients` is `true`
// This gradient is also added to elements with `.bg-gradient`

import { WHITE } from './colorSystem';

// scss-docs-start variable-gradient
export const GRADIENT: string = `linear-gradient(180deg, rgba(${WHITE}, .15), rgba(${WHITE}, 0))`;
// scss-docs-end variable-gradient
