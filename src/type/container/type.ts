/* eslint-disable import/prefer-default-export */

type Container = {
  size:
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'all'
  | 'fluid',
} & React.ComponentProps<'div'>;

export {
  type Container as Container_,
};
