import React from 'react';
import { NAV_LINK, NavLink_ } from '../../type';
import { globalProps, globalStyle } from '../global';

export default function Link(props: NavLink_): JSX.Element {
  const {
    children, active, 'dropdown-toggle': dropdownToggle, tag, disabled,
  } = props;

  const localClassName = [];
  localClassName.push(NAV_LINK.base);
  if (active) {
    localClassName.push(NAV_LINK.active);
  }
  if (disabled) {
    localClassName.push(NAV_LINK.disabled);
  }
  if (dropdownToggle) {
    localClassName.push(NAV_LINK['dropdown-toggle']);
  }
  const className = localClassName.concat(globalStyle(props));

  return React.createElement(tag, {
    className: className.join(' '),
    ...globalProps(props),
  }, children);
}

Link.defaultProps = {
  children: null,
  href: '#',
  tag: 'a',
};
