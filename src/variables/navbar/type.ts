import { GridBreakpoints_, Obj_, Global_ } from '../global';

/* eslint-disable import/prefer-default-export */
type NavbarVar = {
  base: string;
  expand: Obj_;
  mode: Obj_;
  'background-color': Obj_;
};
type NavbarComp = Global_ & {
  'background-color': Exclude<Global_['background-color'], undefined>;
  children?: React.ReactNode;
  expand: GridBreakpoints_ | 'all';
  mode: 'light' | 'dark';
};

export {
  type NavbarComp as NavbarComp_,
  type NavbarVar as Navbar_,
};
