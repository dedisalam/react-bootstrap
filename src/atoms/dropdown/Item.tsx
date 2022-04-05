import React from 'react';
import { DropdownItem_, DROPDOWN_ITEM } from '../../variables';
import { globalProps, globalStyle } from '../global';

export default function Item(props: DropdownItem_): JSX.Element {
  const { children, tag } = props;

  const localClassName = [];
  localClassName.push(DROPDOWN_ITEM.base);
  const className = localClassName.concat(globalStyle(props));

  return React.createElement(tag, {
    className: className.join(' '),
    ...globalProps(props),
  }, children);
}

Item.defaultProps = {
  children: null,
  tag: 'button',
};
