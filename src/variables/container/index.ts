import { GLOBAL } from '../global';
import { size } from './function';
import { Container_, ContainerComp_ } from './type';

const CONTAINER:Container_ = {
  ...GLOBAL,
  size: size(),
};

export {
  CONTAINER,
  type ContainerComp_ as Container_,
};
