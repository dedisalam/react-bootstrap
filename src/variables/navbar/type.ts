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
type NavbarToggleVar = GlobalVar_ & {
  base: string;
};
type NavbarToggleProps = GlobalProps_ & {
  children?: React.ReactNode;
};

// Navbar Toggler Icon Type
type NavbarToggleIconVar = GlobalVar_ & {
  base: string;
};
type NavbarToggleIconProps = GlobalProps_ & {
};

// Navbar Collapse Type
type NavbarCollapseVar = GlobalVar_ & {
  base: string;
};
type NavbarCollapseProps = GlobalProps_ & {
  children?: React.ReactNode;
};

export {
  type NavbarProps as NavbarProps_,
  type NavbarVar as Navbar_,
  type NavbarBrandProps as NavbarBrandProps_,
  type NavbarBrandVar as NavbarBrand_,
  type NavbarToggleProps as NavbarToggleProps_,
  type NavbarToggleVar as NavbarToggle_,
  type NavbarToggleIconProps as NavbarToggleIconProps_,
  type NavbarToggleIconVar as NavbarToggleIcon_,
  type NavbarCollapseProps as NavbarCollapseProps_,
  type NavbarCollapseVar as NavbarCollapse_,
};
