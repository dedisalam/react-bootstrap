type BgColor = {
  'background-color'?:
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'
  | 'black'
  | 'white'
  | 'body'
  | 'transparent',

  'background-opacity'?:
  | '10'
  | '25'
  | '50'
  | '75'
  | '100',

  'gradient': boolean,
};

export default BgColor;
