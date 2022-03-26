import React from 'react';
import { CONTAINER, Container_ } from '../../variables';

function Container(props:Container_) {
  const { children, size } = props;

  const className = [];
  className.push(CONTAINER.size[size]);

  return (
    <div className={className.join(' ')}>
      {children}
    </div>
  );
}

Container.defaultProps = {
  children: null,
};

export default Container;
