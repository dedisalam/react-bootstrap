//
// Text
//

// Text Type
type Text = {
  'font-family': {
    monospace: string;
  },
  'font-size': {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
  },
  'font-style': {
    italic: string;
    normal: string;
  },
  'font-weight': {
    light: string;
    lighter: string;
    normal: string;
    bold: string;
    bolder: string;
  },
  'line-height': {
    1: string;
    sm: string;
    base: string;
    lg: string;
  },
  'text-align': {
    start: string;
    end: string;
    center: string;
  },
  'text-align-sm': {
    start: string;
    end: string;
    center: string;
  },
  'text-align-md': {
    start: string;
    end: string;
    center: string;
  },
  'text-align-lg': {
    start: string;
    end: string;
    center: string;
  },
  'text-align-xl': {
    start: string;
    end: string;
    center: string;
  },
  'text-align-xxl': {
    start: string;
    end: string;
    center: string;
  },
  'text-decoration': {
    none: string;
    underline: string;
    'line-through': string;
  },
  'text-transform': {
    lowercase: string;
    uppercase: string;
    capitalize: string;
  },
  'white-space': {
    wrap: string;
    'no-wrap': string;
  },
  'word-wrap': {
    break: string;
  },
};

// Text Utility
const TEXT: Text = {
  'font-family': {
    monospace: 'font-monospace',
  },
  'font-size': {
    1: 'fs-1',
    2: 'fs-2',
    3: 'fs-3',
    4: 'fs-4',
    5: 'fs-5',
    6: 'fs-6',
  },
  'font-style': {
    italic: 'fst-italic',
    normal: 'fst-normal',
  },
  'font-weight': {
    light: 'fw-light',
    lighter: 'fw-lighter',
    normal: 'fw-normal',
    bold: 'fw-bold',
    bolder: 'fw-bolder',
  },
  'line-height': {
    1: 'lh-1',
    sm: 'lh-sm',
    base: 'lh-base',
    lg: 'lh-lg',
  },
  'text-align': {
    start: 'text-start',
    end: 'text-end',
    center: 'text-center',
  },
  'text-align-sm': {
    start: 'text-sm-start',
    end: 'text-sm-end',
    center: 'text-sm-center',
  },
  'text-align-md': {
    start: 'text-md-start',
    end: 'text-md-end',
    center: 'text-md-center',
  },
  'text-align-lg': {
    start: 'text-lg-start',
    end: 'text-lg-end',
    center: 'text-lg-center',
  },
  'text-align-xl': {
    start: 'text-xl-start',
    end: 'text-xl-end',
    center: 'text-xl-center',
  },
  'text-align-xxl': {
    start: 'text-xxl-start',
    end: 'text-xxl-end',
    center: 'text-xxl-center',
  },
  'text-decoration': {
    none: 'text-decoration-none',
    underline: 'text-decoration-underline',
    'line-through': 'text-decoration-line-through',
  },
  'text-transform': {
    lowercase: 'text-lowercase',
    uppercase: 'text-uppercase',
    capitalize: 'text-capitalize',
  },
  'white-space': {
    wrap: 'text-wrap',
    'no-wrap': 'text-nowrap',
  },
  'word-wrap': {
    break: 'text-break',
  },
};

export default TEXT;
