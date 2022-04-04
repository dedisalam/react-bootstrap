import { GLOBAL } from '../global';
import { Container_ } from './type';

const CONTAINER = {
  ...GLOBAL,
  size: {
    all: 'container',
    sm: 'container-sm',
    md: 'container-md',
    lg: 'container-lg',
    xl: 'container-xl',
    xxl: 'container-xxl',
    fluid: 'container-fluid',
  },
};

export {
  CONTAINER,
  type Container_,
};
