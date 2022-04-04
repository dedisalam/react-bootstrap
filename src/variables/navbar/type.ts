import {
  Global_,
} from '../global';

// Navbar Type
type Navbar = Global_ & {
  children?: React.ReactNode,
  expand:
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'all',

  mode:
  | 'dark'
  | 'light',

  'background-color': Exclude<Global_['background-color'], undefined>;
};

// Navbar Brand Type
type NavbarBrand = Global_ & {
  children?: React.ReactNode;
  href?: string;
};

// Navbar Toggler Type
type NavbarToggle = Global_ & {
  children?: React.ReactNode;
};

// Navbar Toggler Icon Type
type NavbarToggleIcon = Global_ & {
};

// Navbar Collapse Type
type NavbarCollapse = Global_ & {
  children?: React.ReactNode;
};

// Navbar Nav Type
type NavbarNav = Global_ & {
  children?: React.ReactNode;
};

export {
  type Navbar as Navbar_,
  type NavbarBrand as NavbarBrand_,
  type NavbarToggle as NavbarToggle_,
  type NavbarToggleIcon as NavbarToggleIcon_,
  type NavbarCollapse as NavbarCollapse_,
  type NavbarNav as NavbarNav_,
};
