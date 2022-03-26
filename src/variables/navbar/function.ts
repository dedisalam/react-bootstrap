/* eslint-disable import/prefer-default-export */
import { GRID_BREAKPOINTS, Obj_, SEPARATOR } from '../global';
import { BASE, EXPAND } from './classNames';

function expand() {
  const obj:Obj_ = {};
  GRID_BREAKPOINTS.forEach(
    (breakpoint) => {
      obj[breakpoint] = BASE + SEPARATOR + EXPAND + SEPARATOR + breakpoint;
    },
  );
  obj.all = BASE + SEPARATOR + EXPAND;
  return obj;
}

export { expand };
