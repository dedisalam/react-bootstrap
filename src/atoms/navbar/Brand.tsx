import React from 'react';
import { NavbarBrand_, NAVBAR_BRAND } from '../../variables';
import { globalProps, globalStyle } from '../global';

export default function Brand(props: NavbarBrand_): JSX.Element {
  const { children, tag } = props;

  const localClassName = [];
  localClassName.push(NAVBAR_BRAND.base);
  const className = localClassName.concat(globalStyle(props));

  return React.createElement(tag, {
    className: className.join(' '),
    ...globalProps(props),
  }, children);
}

Brand.defaultProps = {
  children: null,
  href: '#',
  tag: 'a',
};
