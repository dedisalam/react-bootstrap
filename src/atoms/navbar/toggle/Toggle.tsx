import React from 'react';
import { NavbarToggleProps_, NAVBAR_TOGGLE } from '../../../variables';
import { globalProps, globalStyle } from '../../global';

export default function Toggle(props: NavbarToggleProps_): JSX.Element {
  const { children } = props;

  const localClassName = [];
  localClassName.push(NAVBAR_TOGGLE.base);
  const className = localClassName.concat(globalStyle(props));

  return React.createElement('button', {
    className: className.join(' '),
    type: 'button',
    'data-bs-toggle': 'collapse',
    'data-bs-target': '#navbarSupportedContent',
    'aria-controls': 'navbarSupportedContent',
    'aria-expanded': 'false',
    'aria-label': 'Toggle navigation',
    ...globalProps(props),
  }, children);
}

Toggle.defaultProps = {
  children: null,
};
