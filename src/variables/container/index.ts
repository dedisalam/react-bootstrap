import { GLOBAL } from '../global';
import { size } from './function';
import { Container_, ContainerProps_ } from './type';

const CONTAINER:Container_ = {
  ...GLOBAL,
  size: size(),
};

export {
  CONTAINER,
  type ContainerProps_,
};
