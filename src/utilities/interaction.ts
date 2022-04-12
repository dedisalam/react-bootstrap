//
// Interaction
//

// Interaction Type
type Interaction = {
  'user-select': {
    all: string;
    auto: string;
    none: string;
  },
  'pointer-events': {
    none: string;
    auto: string;
  },
};

// Interaction Utility
const INTERACTION: Interaction = {
  'user-select': {
    all: 'user-select-all',
    auto: 'user-select-auto',
    none: 'user-select-none',
  },
  'pointer-events': {
    none: 'pe-none',
    auto: 'pe-auto',
  },
};

export default INTERACTION;
