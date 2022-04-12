//
// Opacity
//

// Opacity Type
type Opacity = {
  opacity: {
    0: string;
    25: string;
    50: string;
    75: string;
    100: string;
  },
};

// Opacity Utility
const OPACITY: Opacity = {
  opacity: {
    0: 'opacity-0',
    25: 'opacity-25',
    50: 'opacity-50',
    75: 'opacity-75',
    100: 'opacity-100',
  },
};

export default OPACITY;
