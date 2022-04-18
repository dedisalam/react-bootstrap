import { GLOBAL, Global_ } from '../../type';

export default function Shadow(props: Global_): string[] {
  const {
    shadow,
    'shadow-sm': shadowSm,
    'shadow-lg': shadowLg,
    'shadow-none': shadowNone,
  } = props;
  const className = [];

  if (shadow) {
    className.push(GLOBAL.shadow);
  }
  if (shadowSm) {
    className.push(GLOBAL['shadow-sm']);
  }
  if (shadowLg) {
    className.push(GLOBAL['shadow-lg']);
  }
  if (shadowNone) {
    className.push(GLOBAL['shadow-none']);
  }

  return className;
}
