import { BACKGROUND_COLOR, SEPARATOR } from '../global';
import { BASE } from './classNames';
import { expand } from './function';
import { NavbarComp_, Navbar_ } from './type';

const NAVBAR:Navbar_ = {
  base: BASE,
  expand: expand(),
  mode: {
    light: `${BASE + SEPARATOR}light`,
    dark: `${BASE + SEPARATOR}dark`,
  },
  'background-color': BACKGROUND_COLOR,
};

export {
  NAVBAR,
  type NavbarComp_ as Navbar_,
};
