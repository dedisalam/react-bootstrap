type Position = {
  position?:
  | 'static'
  | 'relative'
  | 'absolute'
  | 'fixed'
  | 'sticky',

  top?:
  | '0'
  | '50'
  | '100',

  bottom?:
  | '0'
  | '50'
  | '100',

  start?:
  | '0'
  | '50'
  | '100',

  end?:
  | '0'
  | '50'
  | '100',

  'translate-middle'?:
  | 'all'
  | 'x'
  | 'y',
};

export default Position;
