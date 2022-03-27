import { GLOBAL, SEPARATOR } from '../global';
import { BASE } from './classNames';
import { expand } from './function';
import {
  NavbarProps_,
  Navbar_,
  NavbarBrandProps_,
  NavbarBrand_,
  NavbarToggleProps_,
  NavbarToggle_,
  NavbarToggleIcon_,
} from './type';

// Navbar variables
const NAVBAR:Navbar_ = {
  ...GLOBAL,
  base: BASE,
  expand: expand(),
  mode: {
    light: `${BASE + SEPARATOR}light`,
    dark: `${BASE + SEPARATOR}dark`,
  },
};

// Navbar brand variables
const NAVBAR_BRAND:NavbarBrand_ = {
  ...GLOBAL,
  base: `${BASE + SEPARATOR}brand`,
};

// Navbar Toggle variables
const NAVBAR_TOGGLE:NavbarToggle_ = {
  ...GLOBAL,
  base: `${BASE + SEPARATOR}toggler`,
};

// Navbar Toggle Icon variables
const NAVBAR_TOGGLE_ICON:NavbarToggleIcon_ = {
  ...GLOBAL,
  base: `${BASE + SEPARATOR}toggler${SEPARATOR}icon`,
};

export {
  NAVBAR,
  type NavbarProps_,
  NAVBAR_BRAND,
  type NavbarBrandProps_,
  NAVBAR_TOGGLE,
  type NavbarToggleProps_,
  NAVBAR_TOGGLE_ICON,
};
