//
// Border
//

// Border Type
type Border = {
  border: {
    all: string,
    0: string,
  },
  'border-top': {
    all: string,
    0: string,
  },
  'border-end': {
    all: string,
    0: string,
  },
  'border-bottom': {
    all: string,
    0: string,
  },
  'border-start': {
    all: string,
    0: string,
  },
  'border-color': {
    primary: string,
    secondary: string,
    success: string,
    info: string,
    warning: string,
    danger: string,
    light: string,
    dark: string,
    white: string,
  },
  'border-width': {
    1: string,
    2: string,
    3: string,
    4: string,
    5: string,
  },
};

// Border Utility
const BORDER: Border = {
  border: {
    all: 'border',
    0: 'border-0',
  },
  'border-top': {
    all: 'border-top',
    0: 'border-top-0',
  },
  'border-end': {
    all: 'border-end',
    0: 'border-end-0',
  },
  'border-bottom': {
    all: 'border-bottom',
    0: 'border-bottom-0',
  },
  'border-start': {
    all: 'border-start',
    0: 'border-start-0',
  },
  'border-color': {
    primary: 'border-primary',
    secondary: 'border-secondary',
    success: 'border-success',
    info: 'border-info',
    warning: 'border-warning',
    danger: 'border-danger',
    light: 'border-light',
    dark: 'border-dark',
    white: 'border-white',
  },
  'border-width': {
    1: 'border-1',
    2: 'border-2',
    3: 'border-3',
    4: 'border-4',
    5: 'border-5',
  },
};

export default BORDER;
