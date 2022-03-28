type GridBreakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type Obj = {
  [key: string]: string;
};

type BackgroundColor = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'black' | 'white' | 'body' | 'transparent';

type Spacers = '0' | '1' | '2' | '3' | '4' | '5';
// type MARGIN_BASE =
//   'all' |
//   'x' |
//   'y' |
//   'top' |
//   'end' |
//   'bottom' |
//   'start';
// function margins() {
//   const Obj: Obj = {};
//   Object.keys(MARGIN_BASE).forEach((BASE) => {
//     Obj[`margin-${BASE}`] = MARGIN_BASE[BASE];
//   });
//   return Obj;
// }
// console.log(margins());

type GlobalVar = {
  'background-color': Obj;
};

// console.log(margins());
// const test = [
//   'margin-end',
//   'margin-start',
// ];
// type Mykey = 'margin-end' | 'margin-start';
type GlobalProps = {
  'background-color'?: BackgroundColor;
  'margin-end'?: Spacers | 'auto';
  'margin-top'?: Spacers | 'auto';
  id?: string;
};

export {
  type Obj as Obj_,
  type GridBreakpoints as GridBreakpoints_,
  type GlobalVar as GlobalVar_,
  type GlobalProps as GlobalProps_,
};
