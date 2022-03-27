import React from 'react';
import { NavbarProps_, NAVBAR } from '../../variables';
import globalStyle from '../global';
import Brand from './Brand';

function Navbar(props:NavbarProps_) {
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
export {
  Navbar,
  Brand as NavbarBrand,
};
export * from './toggler';
