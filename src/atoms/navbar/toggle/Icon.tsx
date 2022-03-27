import React from 'react';
import { NAVBAR_TOGGLE_ICON } from '../../../variables';

function Icon() {
  const className = [];
  className.push(NAVBAR_TOGGLE_ICON.base);

  return (
    <span className={className.join(' ')} />
  );
}

export default Icon;
