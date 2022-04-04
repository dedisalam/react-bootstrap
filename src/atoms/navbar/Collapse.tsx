import React from 'react';
import { NavbarCollapse_ } from '../../variables';
import { globalProps, globalStyle } from '../global';

export default function Collapse(props: NavbarCollapse_): JSX.Element {
  const { children } = props;

  const localClassName = [];
  localClassName.push('collapse');
  localClassName.push('navbar-collapse');
  const className = localClassName.concat(globalStyle(props));

  return React.createElement('div', {
    className: className.join(' '),
    ...globalProps(props),
  }, children);
}

Collapse.defaultProps = {
  children: null,
};
