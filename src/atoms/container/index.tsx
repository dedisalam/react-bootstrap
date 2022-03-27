import React from 'react';
import { CONTAINER, ContainerProps_ } from '../../variables';
import globalStyle from '../global';

export default function Container(props:ContainerProps_) {
  const { children, size } = props;

  const className = [];
  className.push(CONTAINER.size[size]);
  className.concat(globalStyle(props));

  return (
    <div className={className.join(' ')}>
      {children}
    </div>
  );
}

Container.defaultProps = {
  children: null,
};
