import React from 'react';
import { NAVBAR_TOGGLER_ICON } from '../../../variables';

function Icon() {
  const className = [];
  className.push(NAVBAR_TOGGLER_ICON.base);

  return (
    <span className={className.join(' ')} />
  );
}

export default Icon;
