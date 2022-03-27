import React from 'react';
import { NavbarTogglerProps_, NAVBAR_TOGGLER } from '../../../variables';
import Icon from './Icon';

function Toggler(props: NavbarTogglerProps_) {
  const { children } = props;
  const className = [];
  className.push(NAVBAR_TOGGLER.base);
  return (
    <button className={className.join(' ')} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {children}
    </button>
  );
}

export {
  Toggler,
  Icon as TogglerIcon,
};
