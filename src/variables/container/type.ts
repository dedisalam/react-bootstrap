import {
  GlobalProps_, GlobalVar_, GridBreakpoints_, Obj_,
} from '../global';

type ContainerVar = GlobalVar_ & {
  size: Obj_;
};

type ContainerProps = GlobalProps_ & {
  children?: React.ReactNode;
  size: Exclude<GridBreakpoints_, 'xs'> | 'all' | 'fluid';
};

export {
  type ContainerProps as ContainerProps_,
  type ContainerVar as Container_,
};
