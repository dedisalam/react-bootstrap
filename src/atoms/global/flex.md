import { GLOBAL, Global_ } from '../../type';

export default function Flex(props: Global_): string[] {
  const {
    flex,
    'flex-sm': flexSm,
    'flex-md': flexMd,
    'flex-lg': flexLg,
    'flex-xl': flexXl,
    'flex-xxl': flexXxl,
    'flex-direction': flexDirection,
    'flex-direction-sm': flexDirectionSm,
    'flex-direction-md': flexDirectionMd,
    'flex-direction-lg': flexDirectionLg,
    'flex-direction-xl': flexDirectionXl,
    'flex-direction-xxl': flexDirectionXxl,
    'flex-grow': flexGrow,
    'flex-grow-sm': flexGrowSm,
    'flex-grow-md': flexGrowMd,
    'flex-grow-lg': flexGrowLg,
    'flex-grow-xl': flexGrowXl,
    'flex-grow-xxl': flexGrowXxl,
    'flex-shrink': flexShrink,
    'flex-shrink-sm': flexShrinkSm,
    'flex-shrink-md': flexShrinkMd,
    'flex-shrink-lg': flexShrinkLg,
    'flex-shrink-xl': flexShrinkXl,
    'flex-shrink-xxl': flexShrinkXxl,
    'flex-wrap': flexWrap,
    'flex-wrap-sm': flexWrapSm,
    'flex-wrap-md': flexWrapMd,
    'flex-wrap-lg': flexWrapLg,
    'flex-wrap-xl': flexWrapXl,
    'flex-wrap-xxl': flexWrapXxl,
    gap,
    'gap-sm': gapSm,
    'gap-md': gapMd,
    'gap-lg': gapLg,
    'gap-xl': gapXl,
    'gap-xxl': gapXxl,
    'justify-content': justifyContent,
    'justify-content-sm': justifyContentSm,
    'justify-content-md': justifyContentMd,
    'justify-content-lg': justifyContentLg,
    'justify-content-xl': justifyContentXl,
    'justify-content-xxl': justifyContentXxl,
    'align-items': alignItems,
    'align-items-sm': alignItemsSm,
    'align-items-md': alignItemsMd,
    'align-items-lg': alignItemsLg,
    'align-items-xl': alignItemsXl,
    'align-items-xxl': alignItemsXxl,
    'align-content': alignContent,
    'align-content-sm': alignContentSm,
    'align-content-md': alignContentMd,
    'align-content-lg': alignContentLg,
    'align-content-xl': alignContentXl,
    'align-content-xxl': alignContentXxl,
    'align-self': alignSelf,
    'align-self-sm': alignSelfSm,
    'align-self-md': alignSelfMd,
    'align-self-lg': alignSelfLg,
    'align-self-xl': alignSelfXl,
    'align-self-xxl': alignSelfXxl,
    order,
    'order-sm': orderSm,
    'order-md': orderMd,
    'order-lg': orderLg,
    'order-xl': orderXl,
    'order-xxl': orderXxl,
  } = props;
  const className = [];

  if (flex !== undefined) {
    className.push(GLOBAL.flex.fill);
  }
  if (flexSm !== undefined) {
    className.push(GLOBAL['flex-sm'].fill);
  }
  if (flexMd !== undefined) {
    className.push(GLOBAL['flex-md'].fill);
  }
  if (flexLg !== undefined) {
    className.push(GLOBAL['flex-lg'].fill);
  }
  if (flexXl !== undefined) {
    className.push(GLOBAL['flex-xl'].fill);
  }
  if (flexXxl !== undefined) {
    className.push(GLOBAL['flex-xxl'].fill);
  }
  if (flexDirection !== undefined) {
    className.push(GLOBAL['flex-direction'][flexDirection]);
  }
  if (flexDirectionSm !== undefined) {
    className.push(GLOBAL['flex-direction-sm'][flexDirectionSm]);
  }
  if (flexDirectionMd !== undefined) {
    className.push(GLOBAL['flex-direction-md'][flexDirectionMd]);
  }
  if (flexDirectionLg !== undefined) {
    className.push(GLOBAL['flex-direction-lg'][flexDirectionLg]);
  }
  if (flexDirectionXl !== undefined) {
    className.push(GLOBAL['flex-direction-xl'][flexDirectionXl]);
  }
  if (flexDirectionXxl !== undefined) {
    className.push(GLOBAL['flex-direction-xxl'][flexDirectionXxl]);
  }
  if (flexGrow !== undefined) {
    className.push(GLOBAL['flex-grow'][flexGrow]);
  }
  if (flexGrowSm !== undefined) {
    className.push(GLOBAL['flex-grow-sm'][flexGrowSm]);
  }
  if (flexGrowMd !== undefined) {
    className.push(GLOBAL['flex-grow-md'][flexGrowMd]);
  }
  if (flexGrowLg !== undefined) {
    className.push(GLOBAL['flex-grow-lg'][flexGrowLg]);
  }
  if (flexGrowXl !== undefined) {
    className.push(GLOBAL['flex-grow-xl'][flexGrowXl]);
  }
  if (flexGrowXxl !== undefined) {
    className.push(GLOBAL['flex-grow-xxl'][flexGrowXxl]);
  }
  if (flexShrink !== undefined) {
    className.push(GLOBAL['flex-shrink'][flexShrink]);
  }
  if (flexShrinkSm !== undefined) {
    className.push(GLOBAL['flex-shrink-sm'][flexShrinkSm]);
  }
  if (flexShrinkMd !== undefined) {
    className.push(GLOBAL['flex-shrink-md'][flexShrinkMd]);
  }
  if (flexShrinkLg !== undefined) {
    className.push(GLOBAL['flex-shrink-lg'][flexShrinkLg]);
  }
  if (flexShrinkXl !== undefined) {
    className.push(GLOBAL['flex-shrink-xl'][flexShrinkXl]);
  }
  if (flexShrinkXxl !== undefined) {
    className.push(GLOBAL['flex-shrink-xxl'][flexShrinkXxl]);
  }
  if (flexWrap !== undefined) {
    className.push(GLOBAL['flex-wrap'][flexWrap]);
  }
  if (flexWrapSm !== undefined) {
    className.push(GLOBAL['flex-wrap-sm'][flexWrapSm]);
  }
  if (flexWrapMd !== undefined) {
    className.push(GLOBAL['flex-wrap-md'][flexWrapMd]);
  }
  if (flexWrapLg !== undefined) {
    className.push(GLOBAL['flex-wrap-lg'][flexWrapLg]);
  }
  if (flexWrapXl !== undefined) {
    className.push(GLOBAL['flex-wrap-xl'][flexWrapXl]);
  }
  if (flexWrapXxl !== undefined) {
    className.push(GLOBAL['flex-wrap-xxl'][flexWrapXxl]);
  }
  if (justifyContent !== undefined) {
    className.push(GLOBAL['justify-content'][justifyContent]);
  }
  if (justifyContentSm !== undefined) {
    className.push(GLOBAL['justify-content-sm'][justifyContentSm]);
  }
  if (justifyContentMd !== undefined) {
    className.push(GLOBAL['justify-content-md'][justifyContentMd]);
  }
  if (justifyContentLg !== undefined) {
    className.push(GLOBAL['justify-content-lg'][justifyContentLg]);
  }
  if (justifyContentXl !== undefined) {
    className.push(GLOBAL['justify-content-xl'][justifyContentXl]);
  }
  if (justifyContentXxl !== undefined) {
    className.push(GLOBAL['justify-content-xxl'][justifyContentXxl]);
  }
  if (alignItems !== undefined) {
    className.push(GLOBAL['align-items'][alignItems]);
  }
  if (alignItemsSm !== undefined) {
    className.push(GLOBAL['align-items-sm'][alignItemsSm]);
  }
  if (alignItemsMd !== undefined) {
    className.push(GLOBAL['align-items-md'][alignItemsMd]);
  }
  if (alignItemsLg !== undefined) {
    className.push(GLOBAL['align-items-lg'][alignItemsLg]);
  }
  if (alignItemsXl !== undefined) {
    className.push(GLOBAL['align-items-xl'][alignItemsXl]);
  }
  if (alignItemsXxl !== undefined) {
    className.push(GLOBAL['align-items-xxl'][alignItemsXxl]);
  }
  if (alignContent !== undefined) {
    className.push(GLOBAL['align-content'][alignContent]);
  }
  if (alignContentSm !== undefined) {
    className.push(GLOBAL['align-content-sm'][alignContentSm]);
  }
  if (alignContentMd !== undefined) {
    className.push(GLOBAL['align-content-md'][alignContentMd]);
  }
  if (alignContentLg !== undefined) {
    className.push(GLOBAL['align-content-lg'][alignContentLg]);
  }
  if (alignContentXl !== undefined) {
    className.push(GLOBAL['align-content-xl'][alignContentXl]);
  }
  if (alignContentXxl !== undefined) {
    className.push(GLOBAL['align-content-xxl'][alignContentXxl]);
  }
  if (alignSelf !== undefined) {
    className.push(GLOBAL['align-self'][alignSelf]);
  }
  if (alignSelfSm !== undefined) {
    className.push(GLOBAL['align-self-sm'][alignSelfSm]);
  }
  if (alignSelfMd !== undefined) {
    className.push(GLOBAL['align-self-md'][alignSelfMd]);
  }
  if (alignSelfLg !== undefined) {
    className.push(GLOBAL['align-self-lg'][alignSelfLg]);
  }
  if (alignSelfXl !== undefined) {
    className.push(GLOBAL['align-self-xl'][alignSelfXl]);
  }
  if (alignSelfXxl !== undefined) {
    className.push(GLOBAL['align-self-xxl'][alignSelfXxl]);
  }
  if (order !== undefined) {
    className.push(GLOBAL.order[order]);
  }
  if (orderSm !== undefined) {
    className.push(GLOBAL['order-sm'][orderSm]);
  }
  if (orderMd !== undefined) {
    className.push(GLOBAL['order-md'][orderMd]);
  }
  if (orderLg !== undefined) {
    className.push(GLOBAL['order-lg'][orderLg]);
  }
  if (orderXl !== undefined) {
    className.push(GLOBAL['order-xl'][orderXl]);
  }
  if (orderXxl !== undefined) {
    className.push(GLOBAL['order-xxl'][orderXxl]);
  }
  if (gap !== undefined) {
    className.push(GLOBAL.gap[gap]);
  }
  if (gapSm !== undefined) {
    className.push(GLOBAL['gap-sm'][gapSm]);
  }
  if (gapMd !== undefined) {
    className.push(GLOBAL['gap-md'][gapMd]);
  }
  if (gapLg !== undefined) {
    className.push(GLOBAL['gap-lg'][gapLg]);
  }
  if (gapXl !== undefined) {
    className.push(GLOBAL['gap-xl'][gapXl]);
  }
  if (gapXxl !== undefined) {
    className.push(GLOBAL['gap-xxl'][gapXxl]);
  }

  return className;
}
