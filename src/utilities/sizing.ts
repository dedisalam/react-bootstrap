//
// Sizing
//

// Sizing Type
type Sizing = {
  width: {
    25: string;
    50: string;
    75: string;
    100: string;
    auto: string;
  },
  'max-width': {
    100: string;
  },
  'viewport-width': {
    100: string;
  },
  'min-viewport-width': {
    100: string;
  },
  height: {
    25: string;
    50: string;
    75: string;
    100: string;
    auto: string;
  },
  'max-height': {
    100: string;
  },
  'viewport-height': {
    100: string;
  },
  'min-viewport-height': {
    100: string;
  },
};

// Sizing Utility
const SIZING: Sizing = {
  width: {
    25: 'w-25',
    50: 'w-50',
    75: 'w-75',
    100: 'w-100',
    auto: 'w-auto',
  },
  'max-width': {
    100: 'mw-100',
  },
  'viewport-width': {
    100: 'vw-100',
  },
  'min-viewport-width': {
    100: 'min-vw-100',
  },
  height: {
    25: 'h-25',
    50: 'h-50',
    75: 'h-75',
    100: 'h-100',
    auto: 'h-auto',
  },
  'max-height': {
    100: 'mh-100',
  },
  'viewport-height': {
    100: 'vh-100',
  },
  'min-viewport-height': {
    100: 'min-vh-100',
  },
};

export default SIZING;
