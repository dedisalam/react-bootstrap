import { GLOBAL, Global_ } from '../../type';

export default function Overflow(props: Global_): string[] {
  const {
    overflow,
  } = props;
  const className = [];

  if (overflow !== undefined) {
    className.push(GLOBAL.overflow[overflow]);
  }

  return className;
}
