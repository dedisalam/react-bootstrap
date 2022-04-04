import React from 'react';
import { NavbarToggleIcon_, NAVBAR_TOGGLE_ICON } from '../../../variables';
import { globalProps, globalStyle } from '../../global';

function Icon(props: NavbarToggleIcon_): JSX.Element {
  const localClassName = [];
  localClassName.push(NAVBAR_TOGGLE_ICON.base);
  const className = localClassName.concat(globalStyle(props));

  return React.createElement('span', {
    className: className.join(' '),
    ...globalProps(props),
  });
}

export default Icon;
