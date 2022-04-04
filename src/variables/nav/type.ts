/* eslint-disable import/prefer-default-export */
import {
  Global_,
} from '../global';

// Navbar Type
type NavItem = Global_ & {
  dropdown: boolean;
};

export {
  type NavItem as NavItem_,
};
