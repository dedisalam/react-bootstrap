import {
  MarginAll,
  MarginTop,
  MarginVertical,
  MarginBottom,
  MarginRight,
  MarginHorizontal,
  MarginLeft,
  MarginTopXs,
  MarginTopSm,
  MarginTopMd,
  MarginTopLg,
  MarginTopXl,
  MarginVerticalXs,
  MarginVerticalSm,
  MarginVerticalMd,
  MarginVerticalLg,
  MarginVerticalXl,
  MarginBottomXs,
  MarginBottomSm,
  MarginBottomMd,
  MarginBottomLg,
  MarginBottomXl,
  MarginRightXs,
  MarginRightSm,
  MarginRightMd,
  MarginRightLg,
  MarginRightXl,
  MarginHorizontalXs,
  MarginHorizontalSm,
  MarginHorizontalMd,
  MarginHorizontalLg,
  MarginHorizontalXl,
  MarginLeftXs,
  MarginLeftSm,
  MarginLeftMd,
  MarginLeftLg,
  MarginLeftXl,
} from "./types";

interface IMargin {
  margin?: boolean | typeof MarginAll[number];
  marginTop?: boolean | typeof MarginTop[number];
  marginVertical?: boolean | typeof MarginVertical[number];
  marginBottom?: boolean | typeof MarginBottom[number];
  marginRight?: boolean | typeof MarginRight[number];
  marginHorizontal?: boolean | typeof MarginHorizontal[number];
  marginLeft?: boolean | typeof MarginLeft[number];
  marginTopXs?: boolean | typeof MarginTopXs[number];
  marginVerticalXs?: boolean | typeof MarginVerticalXs[number];
  marginBottomXs?: boolean | typeof MarginBottomXs[number];
  marginRightXs?: boolean | typeof MarginRightXs[number];
  marginHorizontalXs?: boolean | typeof MarginHorizontalXs[number];
  marginLeftXs?: boolean | typeof MarginLeftXs[number];
  marginTopSm?: boolean | typeof MarginTopSm[number];
  marginVerticalSm?: boolean | typeof MarginVerticalSm[number];
  marginBottomSm?: boolean | typeof MarginBottomSm[number];
  marginRightSm?: boolean | typeof MarginRightSm[number];
  marginHorizontalSm?: boolean | typeof MarginHorizontalSm[number];
  marginLeftSm?: boolean | typeof MarginLeftSm[number];
  marginTopMd?: boolean | typeof MarginTopMd[number];
  marginVerticalMd?: boolean | typeof MarginVerticalMd[number];
  marginBottomMd?: boolean | typeof MarginBottomMd[number];
  marginRightMd?: boolean | typeof MarginRightMd[number];
  marginHorizontalMd?: boolean | typeof MarginHorizontalMd[number];
  marginLeftMd?: boolean | typeof MarginLeftMd[number];
  marginTopLg?: boolean | typeof MarginTopLg[number];
  marginVerticalLg?: boolean | typeof MarginVerticalLg[number];
  marginBottomLg?: boolean | typeof MarginBottomLg[number];
  marginRightLg?: boolean | typeof MarginRightLg[number];
  marginHorizontalLg?: boolean | typeof MarginHorizontalLg[number];
  marginLeftLg?: boolean | typeof MarginLeftLg[number];
  marginTopXl?: boolean | typeof MarginTopXl[number];
  marginVerticalXl?: boolean | typeof MarginVerticalXl[number];
  marginBottomXl?: boolean | typeof MarginBottomXl[number];
  marginRightXl?: boolean | typeof MarginRightXl[number];
  marginHorizontalXl?: boolean | typeof MarginHorizontalXl[number];
  marginLeftXl?: boolean | typeof MarginLeftXl[number];
}

export default IMargin;
