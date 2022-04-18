import { GLOBAL, Global_ } from '../../type';

export default function BgColor(props: Global_): string[] {
  const {
    'background-color': backgroundColor,
    'background-opacity': backgroundOpacity,
    gradient,
  } = props;
  const className = [];

  if (backgroundColor !== undefined) {
    className.push(GLOBAL['background-color'][backgroundColor]);
  }
  if (backgroundOpacity !== undefined) {
    className.push(GLOBAL['background-opacity'][backgroundOpacity]);
  }
  if (gradient) {
    className.push(GLOBAL.gradient.gradient);
  }

  return className;
}
