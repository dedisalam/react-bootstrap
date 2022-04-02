import { GLOBAL, GlobalProps_ } from '../../variables';

export default function marginStyle(props:GlobalProps_):string[] {
  const {
    margin,
    'margin-sm': marginSm,
    'margin-md': marginMd,
    'margin-lg': marginLg,
    'margin-xl': marginXl,
    'margin-xxl': marginXxl,
    'margin-top': marginTop,
    'margin-top-sm': marginTopSm,
    'margin-top-md': marginTopMd,
    'margin-top-lg': marginTopLg,
    'margin-top-xl': marginTopXl,
    'margin-top-xxl': marginTopXxl,
    'margin-start': marginStart,
    'margin-start-sm': marginStartSm,
    'margin-start-md': marginStartMd,
    'margin-start-lg': marginStartLg,
    'margin-start-xl': marginStartXl,
    'margin-start-xxl': marginStartXxl,
    'margin-end': marginEnd,
    'margin-end-sm': marginEndSm,
    'margin-end-md': marginEndMd,
    'margin-end-lg': marginEndLg,
    'margin-end-xl': marginEndXl,
    'margin-end-xxl': marginEndXxl,
    'margin-bottom': marginBottom,
    'margin-bottom-sm': marginBottomSm,
    'margin-bottom-md': marginBottomMd,
    'margin-bottom-lg': marginBottomLg,
    'margin-bottom-xl': marginBottomXl,
    'margin-bottom-xxl': marginBottomXxl,
    'margin-y': marginY,
    'margin-y-sm': marginYSm,
    'margin-y-md': marginYMd,
    'margin-y-lg': marginYLg,
    'margin-y-xl': marginYXl,
    'margin-y-xxl': marginYXxl,
    'margin-x': marginX,
    'margin-x-sm': marginXSm,
    'margin-x-md': marginXMd,
    'margin-x-lg': marginXLg,
    'margin-x-xl': marginXXl,
    'margin-x-xxl': marginXXxl,
  } = props;
  const className = [];

  if (margin !== undefined) {
    className.push(GLOBAL.margin[margin]);
  }
  if (marginSm !== undefined) {
    className.push(GLOBAL['margin-sm'][marginSm]);
  }
  if (marginMd !== undefined) {
    className.push(GLOBAL['margin-md'][marginMd]);
  }
  if (marginLg !== undefined) {
    className.push(GLOBAL['margin-lg'][marginLg]);
  }
  if (marginXl !== undefined) {
    className.push(GLOBAL['margin-xl'][marginXl]);
  }
  if (marginXxl !== undefined) {
    className.push(GLOBAL['margin-xxl'][marginXxl]);
  }
  if (marginTop !== undefined) {
    className.push(GLOBAL['margin-top'][marginTop]);
  }
  if (marginTopSm !== undefined) {
    className.push(GLOBAL['margin-top-sm'][marginTopSm]);
  }
  if (marginTopMd !== undefined) {
    className.push(GLOBAL['margin-top-md'][marginTopMd]);
  }
  if (marginTopLg !== undefined) {
    className.push(GLOBAL['margin-top-lg'][marginTopLg]);
  }
  if (marginTopXl !== undefined) {
    className.push(GLOBAL['margin-top-xl'][marginTopXl]);
  }
  if (marginTopXxl !== undefined) {
    className.push(GLOBAL['margin-top-xxl'][marginTopXxl]);
  }
  if (marginStart !== undefined) {
    className.push(GLOBAL['margin-start'][marginStart]);
  }
  if (marginStartSm !== undefined) {
    className.push(GLOBAL['margin-start-sm'][marginStartSm]);
  }
  if (marginStartMd !== undefined) {
    className.push(GLOBAL['margin-start-md'][marginStartMd]);
  }
  if (marginStartLg !== undefined) {
    className.push(GLOBAL['margin-start-lg'][marginStartLg]);
  }
  if (marginStartXl !== undefined) {
    className.push(GLOBAL['margin-start-xl'][marginStartXl]);
  }
  if (marginStartXxl !== undefined) {
    className.push(GLOBAL['margin-start-xxl'][marginStartXxl]);
  }
  if (marginEnd !== undefined) {
    className.push(GLOBAL['margin-end'][marginEnd]);
  }
  if (marginEndSm !== undefined) {
    className.push(GLOBAL['margin-end-sm'][marginEndSm]);
  }
  if (marginEndMd !== undefined) {
    className.push(GLOBAL['margin-end-md'][marginEndMd]);
  }
  if (marginEndLg !== undefined) {
    className.push(GLOBAL['margin-end-lg'][marginEndLg]);
  }
  if (marginEndXl !== undefined) {
    className.push(GLOBAL['margin-end-xl'][marginEndXl]);
  }
  if (marginEndXxl !== undefined) {
    className.push(GLOBAL['margin-end-xxl'][marginEndXxl]);
  }
  if (marginBottom !== undefined) {
    className.push(GLOBAL['margin-bottom'][marginBottom]);
  }
  if (marginBottomSm !== undefined) {
    className.push(GLOBAL['margin-bottom-sm'][marginBottomSm]);
  }
  if (marginBottomMd !== undefined) {
    className.push(GLOBAL['margin-bottom-md'][marginBottomMd]);
  }
  if (marginBottomLg !== undefined) {
    className.push(GLOBAL['margin-bottom-lg'][marginBottomLg]);
  }
  if (marginBottomXl !== undefined) {
    className.push(GLOBAL['margin-bottom-xl'][marginBottomXl]);
  }
  if (marginBottomXxl !== undefined) {
    className.push(GLOBAL['margin-bottom-xxl'][marginBottomXxl]);
  }
  if (marginY !== undefined) {
    className.push(GLOBAL['margin-y'][marginY]);
  }
  if (marginYSm !== undefined) {
    className.push(GLOBAL['margin-y-sm'][marginYSm]);
  }
  if (marginYMd !== undefined) {
    className.push(GLOBAL['margin-y-md'][marginYMd]);
  }
  if (marginYLg !== undefined) {
    className.push(GLOBAL['margin-y-lg'][marginYLg]);
  }
  if (marginYXl !== undefined) {
    className.push(GLOBAL['margin-y-xl'][marginYXl]);
  }
  if (marginYXxl !== undefined) {
    className.push(GLOBAL['margin-y-xxl'][marginYXxl]);
  }
  if (marginX !== undefined) {
    className.push(GLOBAL['margin-x'][marginX]);
  }
  if (marginXSm !== undefined) {
    className.push(GLOBAL['margin-x-sm'][marginXSm]);
  }
  if (marginXMd !== undefined) {
    className.push(GLOBAL['margin-x-md'][marginXMd]);
  }
  if (marginXLg !== undefined) {
    className.push(GLOBAL['margin-x-lg'][marginXLg]);
  }
  if (marginXXl !== undefined) {
    className.push(GLOBAL['margin-x-xl'][marginXXl]);
  }
  if (marginXXxl !== undefined) {
    className.push(GLOBAL['margin-x-xxl'][marginXXxl]);
  }
  return className;
}
