//
// Align
//

// Align Type
type Align = {
  align: {
    baseline: string;
    top: string;
    middle: string;
    bottom: string;
    'text-bottom': string;
    'text-top': string;
  }
};

// Align Utility
const ALIGN: Align = {
  align: {
    baseline: 'align-baseline',
    top: 'align-top',
    middle: 'align-middle',
    bottom: 'align-bottom',
    'text-bottom': 'align-text-bottom',
    'text-top': 'align-text-top',
  },
};

export default ALIGN;
