type Border = {
  border?:
  | 'all'
  | '0',

  'border-top'?:
  | 'all'
  | '0',

  'border-end'?:
  | 'all'
  | '0',

  'border-bottom'?:
  | 'all'
  | '0',

  'border-start'?:
  | 'all'
  | '0',

  'border-color'?:
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'
  | 'white',

  'border-width'?:
  | '1'
  | '2'
  | '3'
  | '4'
  | '5',
};

export default Border;
