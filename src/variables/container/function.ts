/* eslint-disable import/prefer-default-export */
import { GRID_BREAKPOINTS, Obj_, SEPARATOR } from '../global';
import { BASE } from './classNames';

function size() {
  const obj:Obj_ = {};
  GRID_BREAKPOINTS.forEach(
    (breakpoint) => {
      if (breakpoint !== 'xs') {
        obj[breakpoint] = BASE + SEPARATOR + breakpoint;
      }
    },
  );
  obj.all = BASE;
  obj.fluid = `${BASE + SEPARATOR}fluid`;
  return obj;
}

export { size };
