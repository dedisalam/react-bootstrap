import { GLOBAL, Global_ } from '../../variables';

export default function Interaction(props: Global_): string[] {
  const {
    'user-select': userSelect,
    'pointer-events': pointerEvents,
  } = props;
  const className = [];

  if (userSelect !== undefined) {
    className.push(GLOBAL['user-select'][userSelect]);
  }
  if (pointerEvents !== undefined) {
    className.push(GLOBAL['pointer-events'][pointerEvents]);
  }

  return className;
}
