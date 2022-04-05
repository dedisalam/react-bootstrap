import {
  NavItem_,
  NavLink_,
} from './type';
import { GLOBAL } from '../global';

// Nav Item variables
const NAV_ITEM = {
  ...GLOBAL,
  base: 'nav-item',
  dropdown: 'dropdown',
};

// Nav Link variables
const NAV_LINK = {
  ...GLOBAL,
  base: 'nav-link',
  active: 'active',
  'dropdown-toggle': 'dropdown-toggle',
};

export {
  NAV_ITEM,
  type NavItem_,
  NAV_LINK,
  type NavLink_,
};
