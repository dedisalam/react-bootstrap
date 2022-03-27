import {
  GridBreakpoints_, Obj_, GlobalVar_, GlobalComp_,
} from '../global';

// Navbar Type
type NavbarVar = GlobalVar_ & {
  base: string;
  expand: Obj_;
  mode: Obj_;
};
type NavbarComp = GlobalComp_ & {
  'background-color': Exclude<GlobalComp_['background-color'], undefined>;
  children?: React.ReactNode;
  expand: GridBreakpoints_ | 'all';
  mode: 'light' | 'dark';
};

// Navbar Brand Type
type NavbarBrandVar = GlobalVar_ & {
  base: string;
};
type NavbarBrandComp = GlobalComp_ & {
  children?: React.ReactNode;
  href?: string;
};

export {
  type NavbarComp as NavbarComp_,
  type NavbarVar as Navbar_,
  type NavbarBrandComp as NavbarBrandComp_,
  type NavbarBrandVar as NavbarBrand_,
};
