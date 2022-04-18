import { GLOBAL, Global_ } from '../../type';

export default function Spacing(props: Global_): string[] {
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
    padding,
    'padding-sm': paddingSm,
    'padding-md': paddingMd,
    'padding-lg': paddingLg,
    'padding-xl': paddingXl,
    'padding-xxl': paddingXxl,
    'padding-top': paddingTop,
    'padding-top-sm': paddingTopSm,
    'padding-top-md': paddingTopMd,
    'padding-top-lg': paddingTopLg,
    'padding-top-xl': paddingTopXl,
    'padding-top-xxl': paddingTopXxl,
    'padding-start': paddingStart,
    'padding-start-sm': paddingStartSm,
    'padding-start-md': paddingStartMd,
    'padding-start-lg': paddingStartLg,
    'padding-start-xl': paddingStartXl,
    'padding-start-xxl': paddingStartXxl,
    'padding-end': paddingEnd,
    'padding-end-sm': paddingEndSm,
    'padding-end-md': paddingEndMd,
    'padding-end-lg': paddingEndLg,
    'padding-end-xl': paddingEndXl,
    'padding-end-xxl': paddingEndXxl,
    'padding-bottom': paddingBottom,
    'padding-bottom-sm': paddingBottomSm,
    'padding-bottom-md': paddingBottomMd,
    'padding-bottom-lg': paddingBottomLg,
    'padding-bottom-xl': paddingBottomXl,
    'padding-bottom-xxl': paddingBottomXxl,
    'padding-y': paddingY,
    'padding-y-sm': paddingYSm,
    'padding-y-md': paddingYMd,
    'padding-y-lg': paddingYLg,
    'padding-y-xl': paddingYXl,
    'padding-y-xxl': paddingYXxl,
    'padding-x': paddingX,
    'padding-x-sm': paddingXSm,
    'padding-x-md': paddingXMd,
    'padding-x-lg': paddingXLg,
    'padding-x-xl': paddingXXl,
    'padding-x-xxl': paddingXXxl,
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
  if (padding !== undefined) {
    className.push(GLOBAL.padding[padding]);
  }
  if (paddingSm !== undefined) {
    className.push(GLOBAL['padding-sm'][paddingSm]);
  }
  if (paddingMd !== undefined) {
    className.push(GLOBAL['padding-md'][paddingMd]);
  }
  if (paddingLg !== undefined) {
    className.push(GLOBAL['padding-lg'][paddingLg]);
  }
  if (paddingXl !== undefined) {
    className.push(GLOBAL['padding-xl'][paddingXl]);
  }
  if (paddingXxl !== undefined) {
    className.push(GLOBAL['padding-xxl'][paddingXxl]);
  }
  if (paddingTop !== undefined) {
    className.push(GLOBAL['padding-top'][paddingTop]);
  }
  if (paddingTopSm !== undefined) {
    className.push(GLOBAL['padding-top-sm'][paddingTopSm]);
  }
  if (paddingTopMd !== undefined) {
    className.push(GLOBAL['padding-top-md'][paddingTopMd]);
  }
  if (paddingTopLg !== undefined) {
    className.push(GLOBAL['padding-top-lg'][paddingTopLg]);
  }
  if (paddingTopXl !== undefined) {
    className.push(GLOBAL['padding-top-xl'][paddingTopXl]);
  }
  if (paddingTopXxl !== undefined) {
    className.push(GLOBAL['padding-top-xxl'][paddingTopXxl]);
  }
  if (paddingStart !== undefined) {
    className.push(GLOBAL['padding-start'][paddingStart]);
  }
  if (paddingStartSm !== undefined) {
    className.push(GLOBAL['padding-start-sm'][paddingStartSm]);
  }
  if (paddingStartMd !== undefined) {
    className.push(GLOBAL['padding-start-md'][paddingStartMd]);
  }
  if (paddingStartLg !== undefined) {
    className.push(GLOBAL['padding-start-lg'][paddingStartLg]);
  }
  if (paddingStartXl !== undefined) {
    className.push(GLOBAL['padding-start-xl'][paddingStartXl]);
  }
  if (paddingStartXxl !== undefined) {
    className.push(GLOBAL['padding-start-xxl'][paddingStartXxl]);
  }
  if (paddingEnd !== undefined) {
    className.push(GLOBAL['padding-end'][paddingEnd]);
  }
  if (paddingEndSm !== undefined) {
    className.push(GLOBAL['padding-end-sm'][paddingEndSm]);
  }
  if (paddingEndMd !== undefined) {
    className.push(GLOBAL['padding-end-md'][paddingEndMd]);
  }
  if (paddingEndLg !== undefined) {
    className.push(GLOBAL['padding-end-lg'][paddingEndLg]);
  }
  if (paddingEndXl !== undefined) {
    className.push(GLOBAL['padding-end-xl'][paddingEndXl]);
  }
  if (paddingEndXxl !== undefined) {
    className.push(GLOBAL['padding-end-xxl'][paddingEndXxl]);
  }
  if (paddingBottom !== undefined) {
    className.push(GLOBAL['padding-bottom'][paddingBottom]);
  }
  if (paddingBottomSm !== undefined) {
    className.push(GLOBAL['padding-bottom-sm'][paddingBottomSm]);
  }
  if (paddingBottomMd !== undefined) {
    className.push(GLOBAL['padding-bottom-md'][paddingBottomMd]);
  }
  if (paddingBottomLg !== undefined) {
    className.push(GLOBAL['padding-bottom-lg'][paddingBottomLg]);
  }
  if (paddingBottomXl !== undefined) {
    className.push(GLOBAL['padding-bottom-xl'][paddingBottomXl]);
  }
  if (paddingBottomXxl !== undefined) {
    className.push(GLOBAL['padding-bottom-xxl'][paddingBottomXxl]);
  }
  if (paddingX !== undefined) {
    className.push(GLOBAL['padding-x'][paddingX]);
  }
  if (paddingXSm !== undefined) {
    className.push(GLOBAL['padding-x-sm'][paddingXSm]);
  }
  if (paddingXMd !== undefined) {
    className.push(GLOBAL['padding-x-md'][paddingXMd]);
  }
  if (paddingXLg !== undefined) {
    className.push(GLOBAL['padding-x-lg'][paddingXLg]);
  }
  if (paddingXXl !== undefined) {
    className.push(GLOBAL['padding-x-xl'][paddingXXl]);
  }
  if (paddingXXxl !== undefined) {
    className.push(GLOBAL['padding-x-xxl'][paddingXXxl]);
  }
  if (paddingY !== undefined) {
    className.push(GLOBAL['padding-y'][paddingY]);
  }
  if (paddingYSm !== undefined) {
    className.push(GLOBAL['padding-y-sm'][paddingYSm]);
  }
  if (paddingYMd !== undefined) {
    className.push(GLOBAL['padding-y-md'][paddingYMd]);
  }
  if (paddingYLg !== undefined) {
    className.push(GLOBAL['padding-y-lg'][paddingYLg]);
  }
  if (paddingYXl !== undefined) {
    className.push(GLOBAL['padding-y-xl'][paddingYXl]);
  }
  if (paddingYXxl !== undefined) {
    className.push(GLOBAL['padding-y-xxl'][paddingYXxl]);
  }
  return className;
}
