import React from 'react';
import { NavbarToggleIconProps_, NAVBAR_TOGGLE_ICON } from '../../../variables';
import { globalProps, globalStyle } from '../../global';

function Icon(props:NavbarToggleIconProps_):JSX.Element {
  const localClassName = [];
  localClassName.push(NAVBAR_TOGGLE_ICON.base);
  const className = localClassName.concat(globalStyle(props));

  return React.createElement('span', {
    className: className.join(' '),
    ...globalProps(props),
  });
}

export default Icon;
