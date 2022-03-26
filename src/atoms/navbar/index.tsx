import React from 'react';
import { Navbar_, NAVBAR } from '../../variables';

function Navbar(props:Navbar_) {
  const {
    children, expand, mode, 'background-color': BgColor,
  } = props;
  const className = [];

  className.push(NAVBAR.base);
  className.push(NAVBAR.expand[expand]);
  className.push(NAVBAR.mode[mode]);
  className.push(NAVBAR['background-color'][BgColor]);

  return (
    <nav className={className.join(' ')}>
      {children}
    </nav>
  );
}

Navbar.defaultProps = {
  children: null,
};

export default Navbar;
