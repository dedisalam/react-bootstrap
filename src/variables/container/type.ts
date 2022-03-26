import { Global_, GridBreakpoints_, Obj_ } from '../global';

type ContainerVar = {
  size: Obj_;
};

type ContainerComp = Global_ & {
  children?: React.ReactNode;
  size: Exclude<GridBreakpoints_, 'xs'>;
};

export {
  type ContainerComp as ContainerComp_,
  type ContainerVar as Container_,
};
