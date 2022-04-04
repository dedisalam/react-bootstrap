import React from 'react';
import { NAVBAR, Navbar_ } from '../../variables';
import { globalProps, globalStyle } from '../global';

export default function Navbar(props: Navbar_): JSX.Element {
  const {
    children, expand, mode,
  } = props;

  const localClassName = [];
  localClassName.push(NAVBAR.base);
  localClassName.push(NAVBAR.expand[expand]);
  localClassName.push(NAVBAR.mode[mode]);
  const className = localClassName.concat(globalStyle(props));

  return React.createElement('nav', {
    className: className.join(' '),
    ...globalProps(props),
  }, children);
}

Navbar.defaultProps = {
  children: null,
};
