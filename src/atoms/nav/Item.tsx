import React from 'react';
import { NAV_ITEM, NavItem_ } from '../../variables';
import { globalProps, globalStyle } from '../global';

export default function Item(props: NavItem_): JSX.Element {
  const {
    children, dropdown, tag,
  } = props;

  const localClassName = [];
  localClassName.push(NAV_ITEM.base);
  if (dropdown) {
    localClassName.push(NAV_ITEM.dropdown);
  }
  const className = localClassName.concat(globalStyle(props));

  return React.createElement(tag, {
    className: className.join(' '),
    ...globalProps(props),
  }, children);
}

Item.defaultProps = {
  children: null,
  dropdown: false,
  tag: 'li',
};
