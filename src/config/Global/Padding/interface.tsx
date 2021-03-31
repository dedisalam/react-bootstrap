import {
  PaddingAll,
  PaddingTop,
  PaddingVertical,
  PaddingBottom,
  PaddingRight,
  PaddingHorizontal,
  PaddingLeft,
  PaddingTopXs,
  PaddingTopSm,
  PaddingTopMd,
  PaddingTopLg,
  PaddingTopXl,
  PaddingVerticalXs,
  PaddingVerticalSm,
  PaddingVerticalMd,
  PaddingVerticalLg,
  PaddingVerticalXl,
  PaddingBottomXs,
  PaddingBottomSm,
  PaddingBottomMd,
  PaddingBottomLg,
  PaddingBottomXl,
  PaddingRightXs,
  PaddingRightSm,
  PaddingRightMd,
  PaddingRightLg,
  PaddingRightXl,
  PaddingHorizontalXs,
  PaddingHorizontalSm,
  PaddingHorizontalMd,
  PaddingHorizontalLg,
  PaddingHorizontalXl,
  PaddingLeftXs,
  PaddingLeftSm,
  PaddingLeftMd,
  PaddingLeftLg,
  PaddingLeftXl,
} from "./types";

interface IPadding {
  padding?: boolean | typeof PaddingAll[number];
  paddingTop?: boolean | typeof PaddingTop[number];
  paddingVertical?: boolean | typeof PaddingVertical[number];
  paddingBottom?: boolean | typeof PaddingBottom[number];
  paddingRight?: boolean | typeof PaddingRight[number];
  paddingHorizontal?: boolean | typeof PaddingHorizontal[number];
  paddingLeft?: boolean | typeof PaddingLeft[number];
  paddingTopXs?: boolean | typeof PaddingTopXs[number];
  paddingVerticalXs?: boolean | typeof PaddingVerticalXs[number];
  paddingBottomXs?: boolean | typeof PaddingBottomXs[number];
  paddingRightXs?: boolean | typeof PaddingRightXs[number];
  paddingHorizontalXs?: boolean | typeof PaddingHorizontalXs[number];
  paddingLeftXs?: boolean | typeof PaddingLeftXs[number];
  paddingTopSm?: boolean | typeof PaddingTopSm[number];
  paddingVerticalSm?: boolean | typeof PaddingVerticalSm[number];
  paddingBottomSm?: boolean | typeof PaddingBottomSm[number];
  paddingRightSm?: boolean | typeof PaddingRightSm[number];
  paddingHorizontalSm?: boolean | typeof PaddingHorizontalSm[number];
  paddingLeftSm?: boolean | typeof PaddingLeftSm[number];
  paddingTopMd?: boolean | typeof PaddingTopMd[number];
  paddingVerticalMd?: boolean | typeof PaddingVerticalMd[number];
  paddingBottomMd?: boolean | typeof PaddingBottomMd[number];
  paddingRightMd?: boolean | typeof PaddingRightMd[number];
  paddingHorizontalMd?: boolean | typeof PaddingHorizontalMd[number];
  paddingLeftMd?: boolean | typeof PaddingLeftMd[number];
  paddingTopLg?: boolean | typeof PaddingTopLg[number];
  paddingVerticalLg?: boolean | typeof PaddingVerticalLg[number];
  paddingBottomLg?: boolean | typeof PaddingBottomLg[number];
  paddingRightLg?: boolean | typeof PaddingRightLg[number];
  paddingHorizontalLg?: boolean | typeof PaddingHorizontalLg[number];
  paddingLeftLg?: boolean | typeof PaddingLeftLg[number];
  paddingTopXl?: boolean | typeof PaddingTopXl[number];
  paddingVerticalXl?: boolean | typeof PaddingVerticalXl[number];
  paddingBottomXl?: boolean | typeof PaddingBottomXl[number];
  paddingRightXl?: boolean | typeof PaddingRightXl[number];
  paddingHorizontalXl?: boolean | typeof PaddingHorizontalXl[number];
  paddingLeftXl?: boolean | typeof PaddingLeftXl[number];
}

export default IPadding;
