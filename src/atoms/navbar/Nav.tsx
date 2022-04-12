import React from 'react';
import { NavbarNav_, NAVBAR_NAV } from '../../type';
import { globalProps, globalStyle } from '../global';

export default function Nav(props: NavbarNav_): JSX.Element {
  const { children, tag } = props;

  const localClassName = [];
  localClassName.push(NAVBAR_NAV.base);
  const className = localClassName.concat(globalStyle(props));

  return React.createElement(tag, {
    className: className.join(' '),
    ...globalProps(props),
  }, children);
}

Nav.defaultProps = {
  children: null,
  tag: 'ul',
};
