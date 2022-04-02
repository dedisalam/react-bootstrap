import { GLOBAL, Global_ } from '../../variables';

export default function Text(props: Global_): string[] {
  const {
    'font-family': fontFamily,
    'font-size': fontSize,
    'font-style': fontStyle,
    'font-weight': fontWeight,
    'line-height': lineHeight,
    'text-align': textAlign,
    'text-align-sm': textAlignSm,
    'text-align-md': textAlignMd,
    'text-align-lg': textAlignLg,
    'text-align-xl': textAlignXl,
    'text-align-xxl': textAlignXxl,
    'text-decoration': textDecoration,
    'text-transform': textTransform,
    'white-space': whiteSpace,
    'word-wrap': wordWrap,
  } = props;
  const className = [];

  if (fontFamily !== undefined) {
    className.push(GLOBAL['font-family'][fontFamily]);
  }
  if (fontSize !== undefined) {
    className.push(GLOBAL['font-size'][fontSize]);
  }
  if (fontStyle !== undefined) {
    className.push(GLOBAL['font-style'][fontStyle]);
  }
  if (fontWeight !== undefined) {
    className.push(GLOBAL['font-weight'][fontWeight]);
  }
  if (lineHeight !== undefined) {
    className.push(GLOBAL['line-height'][lineHeight]);
  }
  if (textAlign !== undefined) {
    className.push(GLOBAL['text-align'][textAlign]);
  }
  if (textAlignSm !== undefined) {
    className.push(GLOBAL['text-align-sm'][textAlignSm]);
  }
  if (textAlignMd !== undefined) {
    className.push(GLOBAL['text-align-md'][textAlignMd]);
  }
  if (textAlignLg !== undefined) {
    className.push(GLOBAL['text-align-lg'][textAlignLg]);
  }
  if (textAlignXl !== undefined) {
    className.push(GLOBAL['text-align-xl'][textAlignXl]);
  }
  if (textAlignXxl !== undefined) {
    className.push(GLOBAL['text-align-xxl'][textAlignXxl]);
  }
  if (textDecoration !== undefined) {
    className.push(GLOBAL['text-decoration'][textDecoration]);
  }
  if (textTransform !== undefined) {
    className.push(GLOBAL['text-transform'][textTransform]);
  }
  if (whiteSpace !== undefined) {
    className.push(GLOBAL['white-space'][whiteSpace]);
  }
  if (wordWrap !== undefined) {
    className.push(GLOBAL['word-wrap'][wordWrap]);
  }

  return className;
}
