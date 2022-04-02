import { GLOBAL, Global_ } from '../../variables';

export default function Border(props: Global_): string[] {
  const {
    border,
    'border-top': borderTop,
    'border-end': borderEnd,
    'border-bottom': borderBottom,
    'border-start': borderStart,
    'border-color': borderColor,
    'border-width': borderWidth,
  } = props;
  const className = [];

  if (border !== undefined) {
    className.push(GLOBAL.border[border]);
  }
  if (borderTop !== undefined) {
    className.push(GLOBAL['border-top'][borderTop]);
  }
  if (borderEnd !== undefined) {
    className.push(GLOBAL['border-end'][borderEnd]);
  }
  if (borderBottom !== undefined) {
    className.push(GLOBAL['border-bottom'][borderBottom]);
  }
  if (borderStart !== undefined) {
    className.push(GLOBAL['border-start'][borderStart]);
  }
  if (borderColor !== undefined) {
    className.push(GLOBAL['border-color'][borderColor]);
  }
  if (borderWidth !== undefined) {
    className.push(GLOBAL['border-width'][borderWidth]);
  }

  return className;
}
