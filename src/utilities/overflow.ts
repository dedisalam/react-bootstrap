//
// Overflow
//

// Overflow Type
type Overflow = {
  overflow: {
    auto: string;
    hidden: string;
    visible: string;
    scroll: string;
  },
};

// Overflow Utility
const OVERFLOW: Overflow = {
  overflow: {
    auto: 'overflow-auto',
    hidden: 'overflow-hidden',
    visible: 'overflow-visible',
    scroll: 'overflow-scroll',
  },
};

export default OVERFLOW;
