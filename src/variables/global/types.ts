/* eslint-disable import/prefer-default-export */
type GridBreakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type Obj = {
  [key: string]: string;
};

type BackgroundColor = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'black' | 'white' | 'body' | 'transparent';

type Global = {
  'background-color'?: BackgroundColor;
};

export {
  type Obj as Obj_,
  type GridBreakpoints as GridBreakpoints_,
  type Global as Global_,
};
