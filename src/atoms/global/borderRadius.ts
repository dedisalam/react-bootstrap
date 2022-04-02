import { GLOBAL, Global_ } from '../../variables';

export default function BorderRadius(props: Global_): string[] {
  const {
    rounded,
    'rounded-top': roundedTop,
    'rounded-end': roundedEnd,
    'rounded-bottom': roundedBottom,
    'rounded-start': roundedStart,
  } = props;
  const className = [];

  if (rounded !== undefined) {
    className.push(GLOBAL.rounded[rounded]);
  }
  if (roundedTop !== undefined) {
    className.push(GLOBAL['rounded-top'][roundedTop]);
  }
  if (roundedEnd !== undefined) {
    className.push(GLOBAL['rounded-end'][roundedEnd]);
  }
  if (roundedBottom !== undefined) {
    className.push(GLOBAL['rounded-bottom'][roundedBottom]);
  }
  if (roundedStart !== undefined) {
    className.push(GLOBAL['rounded-start'][roundedStart]);
  }

  return className;
}
