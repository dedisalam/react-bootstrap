//
// Color
//

// Color Type
type Color = {
  color: {
    primary: string;
    secondary: string;
    success: string;
    info: string;
    warning: string;
    danger: string;
    light: string;
    dark: string;
    black: string;
    white: string;
    body: string;
    muted: string;
    'black-50': string;
    'white-50': string;
    reset: string;
  },
  'text-opacity': {
    25: string;
    50: string;
    75: string;
    100: string;
  },
};

// Color Utility
const COLOR: Color = {
  color: {
    primary: 'text-primary',
    secondary: 'text-secondary',
    success: 'text-success',
    info: 'text-info',
    warning: 'text-warning',
    danger: 'text-danger',
    light: 'text-light',
    dark: 'text-dark',
    black: 'text-black',
    white: 'text-white',
    body: 'text-body',
    muted: 'text-muted',
    'black-50': 'text-black-50',
    'white-50': 'text-white-50',
    reset: 'text-reset',
  },
  'text-opacity': {
    25: 'text-opacity-25',
    50: 'text-opacity-50',
    75: 'text-opacity-75',
    100: 'text-opacity-100',
  },
};

export default COLOR;
