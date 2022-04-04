/* eslint-disable import/prefer-default-export */
import { Global_ } from '../global';

type Container = Global_ & {
  children?: React.ReactNode;
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
