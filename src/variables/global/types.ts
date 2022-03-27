type GridBreakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type Obj = {
  [key: string]: string;
};

type BackgroundColor = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'black' | 'white' | 'body' | 'transparent';

type GlobalVar = {
  'background-color': Obj;
};

type GlobalProps = {
  'background-color'?: BackgroundColor;
};

export {
  type Obj as Obj_,
  type GridBreakpoints as GridBreakpoints_,
  type GlobalVar as GlobalVar_,
  type GlobalProps as GlobalProps_,
};
