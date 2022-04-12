import React from 'react';
import { CONTAINER, Container_ } from '../../type';
import { globalProps, globalStyle } from '../global';

export default function Container(props: Container_): JSX.Element {
  const { children, size, tag } = props;

  const localClassName = [];
  localClassName.push(CONTAINER.size[size]);
  const className = localClassName.concat(globalStyle(props));

  return React.createElement(tag, {
    className: className.join(' '),
    ...globalProps(props),
  }, children);
}

Container.defaultProps = {
  children: null,
  tag: 'div',
};
