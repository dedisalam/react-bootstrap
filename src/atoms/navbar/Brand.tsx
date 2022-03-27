/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavbarBrand_, NAVBAR_BRAND } from '../../variables';

function Brand(props:NavbarBrand_) {
  const { children, href } = props;

  const className = [];
  className.push(NAVBAR_BRAND.base);

  return (
    <a className={className.join(' ')} href={href}>{children}</a>
  );
}

Brand.defaultProps = {
  children: null,
  href: '#',
};

export default Brand;
