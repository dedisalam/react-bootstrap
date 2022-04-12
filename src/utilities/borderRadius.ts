//
// Border Radius
//

// Border Radius Type
type BorderRadius = {
  rounded: {
    all: string;
    0: string;
    1: string;
    2: string;
    3: string;
    circle: string;
    pill: string;
  },
  'rounded-top': {
    top: string;
  },
  'rounded-end': {
    end: string;
  },
  'rounded-bottom': {
    bottom: string;
  },
  'rounded-start': {
    start: string;
  },
};

// Border Radius Utility
const BORDER_RADIUS: BorderRadius = {
  rounded: {
    all: 'rounded',
    0: 'rounded-0',
    1: 'rounded-1',
    2: 'rounded-2',
    3: 'rounded-3',
    circle: 'rounded-circle',
    pill: 'rounded-pill',
  },
  'rounded-top': {
    top: 'rounded-top',
  },
  'rounded-end': {
    end: 'rounded-end',
  },
  'rounded-bottom': {
    bottom: 'rounded-bottom',
  },
  'rounded-start': {
    start: 'rounded-start',
  },
};

export default BORDER_RADIUS;
