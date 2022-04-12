import { GLOBAL, Global_ } from '../../type';

export default function Display(props: Global_): string[] {
  const {
    display,
    'display-sm': displaySm,
    'display-md': displayMd,
    'display-lg': displayLg,
    'display-xl': displayXl,
    'display-xxl': displayXxl,
    'display-print': displayPrint,
  } = props;
  const className = [];

  if (display !== undefined) {
    className.push(GLOBAL.display[display]);
  }
  if (displaySm !== undefined) {
    className.push(GLOBAL['display-sm'][displaySm]);
  }
  if (displayMd !== undefined) {
    className.push(GLOBAL['display-md'][displayMd]);
  }
  if (displayLg !== undefined) {
    className.push(GLOBAL['display-lg'][displayLg]);
  }
  if (displayXl !== undefined) {
    className.push(GLOBAL['display-xl'][displayXl]);
  }
  if (displayXxl !== undefined) {
    className.push(GLOBAL['display-xxl'][displayXxl]);
  }
  if (displayPrint !== undefined) {
    className.push(GLOBAL['display-print'][displayPrint]);
  }

  return className;
}
