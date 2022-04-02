import {
  NavbarBrand_,
  NavbarCollapse_,
  NavbarToggleIcon_,
  NavbarToggle_,
  Navbar_,
} from './type';
import { GLOBAL } from '../global';

// Navbar variables
const NAVBAR = {
  ...GLOBAL,
  base: 'navbar',
  expand: {
    sm: 'navbar-expand-sm',
    md: 'navbar-expand-md',
    lg: 'navbar-expand-lg',
    xl: 'navbar-expand-xl',
    xxl: 'navbar-expand-xxl',
  },
  mode: {
    light: 'navbar-light',
    dark: 'navbar-dark',
  },
};

// Navbar brand variables
const NAVBAR_BRAND = {
  ...GLOBAL,
  base: 'navbar-brand',
};

// Navbar Toggle variables
const NAVBAR_TOGGLE = {
  ...GLOBAL,
  base: 'navbar-toggler',
};

// Navbar Toggle Icon variables
const NAVBAR_TOGGLE_ICON = {
  ...GLOBAL,
  base: 'navbar-toggler-icon',
};

// Navbar brand variables
const NAVBAR_COLLAPSE = {
  ...GLOBAL,
  base: 'navbar-collapse',
};

export {
  NAVBAR,
  type Navbar_,
  NAVBAR_BRAND,
  type NavbarBrand_,
  NAVBAR_TOGGLE,
  type NavbarToggle_,
  NAVBAR_TOGGLE_ICON,
  type NavbarToggleIcon_,
  NAVBAR_COLLAPSE,
  type NavbarCollapse_,
};
