// Nav Type
type Nav = {
}
& React.ComponentProps<'ul'>;

// Nav Item Type
type NavItem = {
  dropdown: boolean;
}
& React.ComponentProps<'li'>;

// Nav Link Type
type NavLink = {
  href?: string;
  active?: boolean;
  disabled?: boolean;
  'dropdown-toggle'?: boolean;
}
& React.ComponentProps<'a'>;

export {
  type Nav as Nav_,
  type NavItem as NavItem_,
  type NavLink as NavLink_,
};
