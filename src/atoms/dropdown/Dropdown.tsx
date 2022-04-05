import React from 'react';
import { DROPDOWN, Dropdown_ } from '../../variables';
import { globalProps, globalStyle } from '../global';

export default function Dropdown(props: Dropdown_): JSX.Element {
  const {
    children,
  } = props;

  const localClassName = [];
  localClassName.push(DROPDOWN.base);
  const className = localClassName.concat(globalStyle(props));

  return React.createElement('div', {
    className: className.join(' '),
    ...globalProps(props),
  }, children);
}

Dropdown.defaultProps = {
  children: null,
};
