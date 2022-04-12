//
// Position
//

// Position Type
type Position = {
  position: {
    static: string;
    relative: string;
    absolute: string;
    fixed: string;
    sticky: string;
  },
  top: {
    0: string;
    50: string;
    100: string;
  },
  bottom: {
    0: string;
    50: string;
    100: string;
  },
  start: {
    0: string;
    50: string;
    100: string;
  },
  end: {
    0: string;
    50: string;
    100: string;
  },
  'translate-middle': {
    all: string;
    x: string;
    y: string;
  },
};

// Position Utility
const POSITION: Position = {
  position: {
    static: 'position-static',
    relative: 'position-relative',
    absolute: 'position-absolute',
    fixed: 'position-fixed',
    sticky: 'position-sticky',
  },
  top: {
    0: 'top-0',
    50: 'top-50',
    100: 'top-100',
  },
  bottom: {
    0: 'bottom-0',
    50: 'bottom-50',
    100: 'bottom-100',
  },
  start: {
    0: 'start-0',
    50: 'start-50',
    100: 'start-100',
  },
  end: {
    0: 'end-0',
    50: 'end-50',
    100: 'end-100',
  },
  'translate-middle': {
    all: 'translate-middle',
    x: 'translate-middle-x',
    y: 'translate-middle-y',
  },
};

export default POSITION;
