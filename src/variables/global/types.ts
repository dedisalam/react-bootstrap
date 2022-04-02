type GridBreakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type Obj = {
  [key: string]: string;
};

type BackgroundColor = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'black' | 'white' | 'body' | 'transparent';

type Spacers = '0' | '1' | '2' | '3' | '4' | '5';
// type MarginBase = 'all' | 'x' | 'y' | 'top' | 'end' | 'bottom' | 'start';

type GlobalVar = {
  'background-color': Obj;
  'margin': Obj;
  'margin-sm': Obj;
  'margin-md': Obj;
  'margin-lg': Obj;
  'margin-xl': Obj;
  'margin-xxl': Obj;
  'margin-top': Obj;
  'margin-top-sm': Obj;
  'margin-top-md': Obj;
  'margin-top-lg': Obj;
  'margin-top-xl': Obj;
  'margin-top-xxl': Obj;
  'margin-end': Obj;
  'margin-end-sm': Obj;
  'margin-end-md': Obj;
  'margin-end-lg': Obj;
  'margin-end-xl': Obj;
  'margin-end-xxl': Obj;
  'margin-bottom': Obj;
  'margin-bottom-sm': Obj;
  'margin-bottom-md': Obj;
  'margin-bottom-lg': Obj;
  'margin-bottom-xl': Obj;
  'margin-bottom-xxl': Obj;
  'margin-start': Obj;
  'margin-start-sm': Obj;
  'margin-start-md': Obj;
  'margin-start-lg': Obj;
  'margin-start-xl': Obj;
  'margin-start-xxl': Obj;
  'margin-y': Obj;
  'margin-y-sm': Obj;
  'margin-y-md': Obj;
  'margin-y-lg': Obj;
  'margin-y-xl': Obj;
  'margin-y-xxl': Obj;
  'margin-x': Obj;
  'margin-x-sm': Obj;
  'margin-x-md': Obj;
  'margin-x-lg': Obj;
  'margin-x-xl': Obj;
  'margin-x-xxl': Obj;
};

// console.log(margins());
// const test = [
//   'margin-end',
//   'margin-start',
// ];
// type Mykey = 'margin-end' | 'margin-start';
// 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
type GlobalProps = {
  'background-color'?: BackgroundColor;
  'margin'?: Spacers | 'auto';
  'margin-sm'?: Spacers | 'auto';
  'margin-md'?: Spacers | 'auto';
  'margin-lg'?: Spacers | 'auto';
  'margin-xl'?: Spacers | 'auto';
  'margin-xxl'?: Spacers | 'auto';
  'margin-top'?: Spacers | 'auto';
  'margin-top-sm'?: Spacers | 'auto';
  'margin-top-md'?: Spacers | 'auto';
  'margin-top-lg'?: Spacers | 'auto';
  'margin-top-xl'?: Spacers | 'auto';
  'margin-top-xxl'?: Spacers | 'auto';
  'margin-bottom'?: Spacers | 'auto';
  'margin-bottom-sm'?: Spacers | 'auto';
  'margin-bottom-md'?: Spacers | 'auto';
  'margin-bottom-lg'?: Spacers | 'auto';
  'margin-bottom-xl'?: Spacers | 'auto';
  'margin-bottom-xxl'?: Spacers | 'auto';
  'margin-start'?: Spacers | 'auto';
  'margin-start-sm'?: Spacers | 'auto';
  'margin-start-md'?: Spacers | 'auto';
  'margin-start-lg'?: Spacers | 'auto';
  'margin-start-xl'?: Spacers | 'auto';
  'margin-start-xxl'?: Spacers | 'auto';
  'margin-end'?: Spacers | 'auto';
  'margin-end-sm'?: Spacers | 'auto';
  'margin-end-md'?: Spacers | 'auto';
  'margin-end-lg'?: Spacers | 'auto';
  'margin-end-xl'?: Spacers | 'auto';
  'margin-end-xxl'?: Spacers | 'auto';
  'margin-x'?: Spacers | 'auto';
  'margin-x-sm'?: Spacers | 'auto';
  'margin-x-md'?: Spacers | 'auto';
  'margin-x-lg'?: Spacers | 'auto';
  'margin-x-xl'?: Spacers | 'auto';
  'margin-x-xxl'?: Spacers | 'auto';
  'margin-y'?: Spacers | 'auto';
  'margin-y-sm'?: Spacers | 'auto';
  'margin-y-md'?: Spacers | 'auto';
  'margin-y-lg'?: Spacers | 'auto';
  'margin-y-xl'?: Spacers | 'auto';
  'margin-y-xxl'?: Spacers | 'auto';
  id?: string;
};

export {
  type Obj as Obj_,
  type GridBreakpoints as GridBreakpoints_,
  type GlobalVar as GlobalVar_,
  type GlobalProps as GlobalProps_,
};
