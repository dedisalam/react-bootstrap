//
// Background Color
//

// Background Color Type
type BgColor = {
  'background-color': {
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
    transparent: string;
  };
  'background-opacity': {
    10: string;
    25: string;
    50: string;
    75: string;
    100: string;
  };
  gradient: {
    gradient: string;
  };
};

// Background Color Utility
const BG_COLOR: BgColor = {
  'background-color': {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    success: 'bg-success',
    info: 'bg-info',
    warning: 'bg-warning',
    danger: 'bg-danger',
    light: 'bg-light',
    dark: 'bg-dark',
    black: 'bg-black',
    white: 'bg-white',
    body: 'bg-body',
    transparent: 'bg-transparent',
  },
  'background-opacity': {
    10: 'bg-opacity-10',
    25: 'bg-opacity-25',
    50: 'bg-opacity-50',
    75: 'bg-opacity-75',
    100: 'bg-opacity-100',
  },
  gradient: {
    gradient: 'bg-gradient',
  },
};

export default BG_COLOR;
