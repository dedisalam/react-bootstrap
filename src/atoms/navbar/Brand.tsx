import React from 'react';
import { NavbarBrandProps_, NAVBAR_BRAND } from '../../variables';
import { globalProps, globalStyle } from '../global';

export default function Brand(props:NavbarBrandProps_) {
  const { children, href } = props;

  const localClassName = [];
  localClassName.push(NAVBAR_BRAND.base);
  const className = localClassName.concat(globalStyle(props));

  return React.createElement('a', {
    className: className.join(' '),
    href,
    ...globalProps(props),
  }, children);
}

Brand.defaultProps = {
  children: null,
  href: '#',
};
