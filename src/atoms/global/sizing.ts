import { GLOBAL, Global_ } from '../../variables';

export default function Sizing(props: Global_): string[] {
  const {
    width,
    'max-width': maxWidth,
    'viewport-width': viewportWidth,
    'min-viewport-width': minViewportWidth,
    height,
    'max-height': maxHeight,
    'viewport-height': viewportHeight,
    'min-viewport-height': minViewportHeight,
  } = props;
  const className = [];

  if (width !== undefined) {
    className.push(GLOBAL.width[width]);
  }
  if (maxWidth !== undefined) {
    className.push(GLOBAL['max-width'][maxWidth]);
  }
  if (viewportWidth !== undefined) {
    className.push(GLOBAL['viewport-width'][viewportWidth]);
  }
  if (minViewportWidth !== undefined) {
    className.push(GLOBAL['min-viewport-width'][minViewportWidth]);
  }
  if (height !== undefined) {
    className.push(GLOBAL.height[height]);
  }
  if (maxHeight !== undefined) {
    className.push(GLOBAL['max-height'][maxHeight]);
  }
  if (viewportHeight !== undefined) {
    className.push(GLOBAL['viewport-height'][viewportHeight]);
  }
  if (minViewportHeight !== undefined) {
    className.push(GLOBAL['min-viewport-height'][minViewportHeight]);
  }

  return className;
}
