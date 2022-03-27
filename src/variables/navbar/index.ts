import { GLOBAL, SEPARATOR } from '../global';
import { BASE } from './classNames';
import { expand } from './function';
import {
  NavbarProps_,
  Navbar_,
  NavbarBrandProps_,
  NavbarBrand_,
  NavbarTogglerProps_,
  NavbarToggler_,
  NavbarTogglerIcon_,
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
const NAVBAR_TOGGLER:NavbarToggler_ = {
  ...GLOBAL,
  base: `${BASE + SEPARATOR}toggler`,
};

// Navbar Toggle variables
const NAVBAR_TOGGLER_ICON:NavbarTogglerIcon_ = {
  ...GLOBAL,
  base: `${BASE + SEPARATOR}toggler-icon`,
};

export {
  NAVBAR,
  type NavbarProps_,
  NAVBAR_BRAND,
  type NavbarBrandProps_,
  NAVBAR_TOGGLER,
  type NavbarTogglerProps_,
  NAVBAR_TOGGLER_ICON,
};
