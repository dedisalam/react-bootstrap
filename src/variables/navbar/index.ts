import { GLOBAL, SEPARATOR } from '../global';
import { BASE } from './classNames';
import { expand } from './function';
import {
  NavbarComp_, Navbar_, NavbarBrandComp_, NavbarBrand_,
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

export {
  NAVBAR,
  type NavbarComp_ as Navbar_,
  NAVBAR_BRAND,
  type NavbarBrandComp_ as NavbarBrand_,
};
