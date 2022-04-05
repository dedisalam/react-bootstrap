import React from 'react';
import { NavbarToggleIcon_, NAVBAR_TOGGLE_ICON } from '../../../variables';
import { globalProps, globalStyle } from '../../global';

function Icon(props: NavbarToggleIcon_): JSX.Element {
  const { tag } = props;
  const localClassName = [];
  localClassName.push(NAVBAR_TOGGLE_ICON.base);
  const className = localClassName.concat(globalStyle(props));

  return React.createElement(tag, {
    className: className.join(' '),
    ...globalProps(props),
  });
}

Icon.defaultProps = {
  tag: 'span',
};

export default Icon;
