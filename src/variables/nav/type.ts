import {
  Global_,
} from '../global';

// Nav Item Type
type NavItem = Global_ & {
  dropdown: boolean;
};

// Nav Link Type
type NavLink = Global_ & {
  href?: string;
  active?: boolean;
  disabled?: boolean;
  'dropdown-toggle'?: boolean;
};

export {
  type NavItem as NavItem_,
  type NavLink as NavLink_,
};
