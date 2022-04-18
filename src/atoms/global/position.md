import { GLOBAL, Global_ } from '../../type';

export default function Position(props: Global_): string[] {
  const {
    position,
    top,
    bottom,
    start,
    end,
    'translate-middle': translateMiddle,
  } = props;
  const className = [];

  if (position !== undefined) {
    className.push(GLOBAL.position[position]);
  }
  if (top !== undefined) {
    className.push(GLOBAL.top[top]);
  }
  if (bottom !== undefined) {
    className.push(GLOBAL.bottom[bottom]);
  }
  if (start !== undefined) {
    className.push(GLOBAL.start[start]);
  }
  if (end !== undefined) {
    className.push(GLOBAL.end[end]);
  }
  if (translateMiddle !== undefined) {
    className.push(GLOBAL['translate-middle'][translateMiddle]);
  }

  return className;
}
