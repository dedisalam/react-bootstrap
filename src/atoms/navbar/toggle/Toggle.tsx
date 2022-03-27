import React from 'react';
import { NavbarToggleProps_, NAVBAR_TOGGLE } from '../../../variables';

export default function Toggle(props: NavbarToggleProps_) {
  const { children } = props;
  const className = [];
  className.push(NAVBAR_TOGGLE.base);
  return (
    <button className={className.join(' ')} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {children}
    </button>
  );
}

Toggle.defaultProps = {
  children: null,
};
