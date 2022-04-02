import { GLOBAL, Global_ } from '../../variables';

export default function Opacity(props: Global_): string[] {
  const {
    opacity,
  } = props;
  const className = [];

  if (opacity !== undefined) {
    className.push(GLOBAL.opacity[opacity]);
  }

  return className;
}
