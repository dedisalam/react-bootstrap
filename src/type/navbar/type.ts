// Navbar Type
type Navbar = {
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

  // 'background-color': NonNullable<Global_['background-color']>;
}
& React.ComponentProps<'nav'>;

// Navbar Brand Type
type NavbarBrand = {
  href?: string;
}
& React.ComponentProps<'a'>;

// Navbar Toggler Type
type NavbarToggle = {
}
& React.ComponentProps<'button'>;

// Navbar Toggler Icon Type
type NavbarToggleIcon = {
}
& React.ComponentProps<'span'>;

// Navbar Collapse Type
type NavbarCollapse = {
}
& React.ComponentProps<'div'>;

// Navbar Nav Type
type NavbarNav = {
}
& React.ComponentProps<'ul'>;

export {
  type Navbar as Navbar_,
  type NavbarBrand as NavbarBrand_,
  type NavbarToggle as NavbarToggle_,
  type NavbarToggleIcon as NavbarToggleIcon_,
  type NavbarCollapse as NavbarCollapse_,
  type NavbarNav as NavbarNav_,
};
