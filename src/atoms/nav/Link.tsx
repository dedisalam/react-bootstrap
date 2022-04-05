import React from 'react';
import { NAV_LINK, NavLink_ } from '../../variables';
import { globalProps, globalStyle } from '../global';

export default function Link(props: NavLink_): JSX.Element {
  const {
    children, href, active, 'dropdown-toggle': dropdownToggle, tag,
  } = props;

  const localClassName = [];
  localClassName.push(NAV_LINK.base);
  if (active) {
    localClassName.push(NAV_LINK.active);
  }
  if (dropdownToggle) {
    localClassName.push(NAV_LINK['dropdown-toggle']);
  }
  const className = localClassName.concat(globalStyle(props));

  return React.createElement(tag, {
    className: className.join(' '),
    ...globalProps(props),
    href,
  }, children);
}

Link.defaultProps = {
  children: null,
  href: '#',
  tag: 'a',
};
