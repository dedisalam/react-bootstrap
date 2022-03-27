import React from 'react';
import { NAVBAR, NavbarProps_ } from '../../variables';
import globalStyle from '../global';

export default function Navbar(props:NavbarProps_) {
  const {
    children, expand, mode,
  } = props;
  const className = [];

  className.push(NAVBAR.base);
  className.push(NAVBAR.expand[expand]);
  className.push(NAVBAR.mode[mode]);
  className.push(globalStyle(props));

  return (
    <nav className={className.join(' ')}>
      {children}
    </nav>
  );
}

Navbar.defaultProps = {
  children: null,
};
