import { GLOBAL, Global_ } from '../../variables';

export default function Visibility(props: Global_): string[] {
  const {
    visibility,
  } = props;
  const className = [];

  if (visibility !== undefined) {
    className.push(GLOBAL.visibility[visibility]);
  }

  return className;
}
