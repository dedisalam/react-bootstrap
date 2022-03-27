import {
  GridBreakpoints_, Obj_, GlobalVar_, GlobalProps_,
} from '../global';

// Navbar Type
type NavbarVar = GlobalVar_ & {
  base: string;
  expand: Obj_;
  mode: Obj_;
};
type NavbarProps = GlobalProps_ & {
  children?: React.ReactNode;
  expand: GridBreakpoints_ | 'all';
  mode: 'light' | 'dark';
  'background-color': Exclude<GlobalProps_['background-color'], undefined>;
};

// Navbar Brand Type
type NavbarBrandVar = GlobalVar_ & {
  base: string;
};
type NavbarBrandProps = GlobalProps_ & {
  children?: React.ReactNode;
  href?: string;
};

// Navbar Toggler Type
type NavbarTogglerVar = GlobalVar_ & {
  base: string;
};
type NavbarTogglerProps = GlobalProps_ & {
  children?: React.ReactNode;
};

// Navbar Toggler Icon Type
type NavbarTogglerIconVar = GlobalVar_ & {
  base: string;
};

export {
  type NavbarProps as NavbarProps_,
  type NavbarVar as Navbar_,
  type NavbarBrandProps as NavbarBrandProps_,
  type NavbarBrandVar as NavbarBrand_,
  type NavbarTogglerProps as NavbarTogglerProps_,
  type NavbarTogglerVar as NavbarToggler_,
  type NavbarTogglerIconVar as NavbarTogglerIcon_,
};
