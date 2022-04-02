import { GLOBAL, Global_ } from '../../variables';

export default function Align(props: Global_): string[] {
  const {
    align,
  } = props;
  const className = [];

  if (align !== undefined) {
    className.push(GLOBAL.align[align]);
  }

  return className;
}
