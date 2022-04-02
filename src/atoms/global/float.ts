import { GLOBAL, Global_ } from '../../variables';

export default function Float(props: Global_): string[] {
  const {
    float,
    'float-sm': floatSm,
    'float-md': floatMd,
    'float-lg': floatLg,
    'float-xl': floatXl,
    'float-xxl': floatXxl,
  } = props;
  const className = [];

  if (float !== undefined) {
    className.push(GLOBAL.float[float]);
  }
  if (floatSm !== undefined) {
    className.push(GLOBAL['float-sm'][floatSm]);
  }
  if (floatMd !== undefined) {
    className.push(GLOBAL['float-md'][floatMd]);
  }
  if (floatLg !== undefined) {
    className.push(GLOBAL['float-lg'][floatLg]);
  }
  if (floatXl !== undefined) {
    className.push(GLOBAL['float-xl'][floatXl]);
  }
  if (floatXxl !== undefined) {
    className.push(GLOBAL['float-xxl'][floatXxl]);
  }

  return className;
}
