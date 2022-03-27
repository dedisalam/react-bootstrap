import {
  GlobalComp_, GlobalVar_, GridBreakpoints_, Obj_,
} from '../global';

type ContainerVar = GlobalVar_ & {
  size: Obj_;
};

type ContainerComp = GlobalComp_ & {
  children?: React.ReactNode;
  size: Exclude<GridBreakpoints_, 'xs'> | 'all' | 'fluid';
};

export {
  type ContainerComp as ContainerComp_,
  type ContainerVar as Container_,
};
