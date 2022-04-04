/* eslint-disable import/prefer-default-export */
import { Global_ } from '../global';

type Container = Global_ & {
  size:
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'all'
  | 'fluid',
};

export {
  type Container as Container_,
};
