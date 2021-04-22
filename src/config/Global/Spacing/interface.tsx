import {
  MARGIN,
  MARGINBOTTOM,
  MARGINBOTTOMLG,
  MARGINBOTTOMMD,
  MARGINBOTTOMSM,
  MARGINBOTTOMXL,
  MARGINHORIZONTAL,
  MARGINHORIZONTALLG,
  MARGINHORIZONTALMD,
  MARGINHORIZONTALSM,
  MARGINHORIZONTALXL,
  MARGINLEFT,
  MARGINLEFTLG,
  MARGINLEFTMD,
  MARGINLEFTSM,
  MARGINLEFTXL,
  MARGINLG,
  MARGINMD,
  MARGINRIGHT,
  MARGINRIGHTLG,
  MARGINRIGHTMD,
  MARGINRIGHTSM,
  MARGINRIGHTXL,
  MARGINSM,
  MARGINTOP,
  MARGINTOPLG,
  MARGINTOPMD,
  MARGINTOPSM,
  MARGINTOPXL,
  MARGINVERTICAL,
  MARGINVERTICALLG,
  MARGINVERTICALMD,
  MARGINVERTICALSM,
  MARGINVERTICALXL,
  MARGINXL,
  PADDING,
  PADDINGBOTTOM,
  PADDINGBOTTOMLG,
  PADDINGBOTTOMMD,
  PADDINGBOTTOMSM,
  PADDINGBOTTOMXL,
  PADDINGHORIZONTAL,
  PADDINGHORIZONTALLG,
  PADDINGHORIZONTALMD,
  PADDINGHORIZONTALSM,
  PADDINGHORIZONTALXL,
  PADDINGLEFT,
  PADDINGLEFTLG,
  PADDINGLEFTMD,
  PADDINGLEFTSM,
  PADDINGLEFTXL,
  PADDINGLG,
  PADDINGMD,
  PADDINGRIGHT,
  PADDINGRIGHTLG,
  PADDINGRIGHTMD,
  PADDINGRIGHTSM,
  PADDINGRIGHTXL,
  PADDINGSM,
  PADDINGTOP,
  PADDINGTOPLG,
  PADDINGTOPMD,
  PADDINGTOPSM,
  PADDINGTOPXL,
  PADDINGVERTICAL,
  PADDINGVERTICALLG,
  PADDINGVERTICALMD,
  PADDINGVERTICALSM,
  PADDINGVERTICALXL,
  PADDINGXL,
} from "./types";

interface ISpacing {
  margin?: boolean | typeof MARGIN[number];
  marginTop?: boolean | typeof MARGINTOP[number];
  marginVertical?: boolean | typeof MARGINVERTICAL[number];
  marginBottom?: boolean | typeof MARGINBOTTOM[number];
  marginRight?: boolean | typeof MARGINRIGHT[number];
  marginHorizontal?: boolean | typeof MARGINHORIZONTAL[number];
  marginLeft?: boolean | typeof MARGINLEFT[number];

  marginSm?: boolean | typeof MARGINSM[number];
  marginTopSm?: boolean | typeof MARGINTOPSM[number];
  marginVerticalSm?: boolean | typeof MARGINVERTICALSM[number];
  marginBottomSm?: boolean | typeof MARGINBOTTOMSM[number];
  marginRightSm?: boolean | typeof MARGINRIGHTSM[number];
  marginHorizontalSm?: boolean | typeof MARGINHORIZONTALSM[number];
  marginLeftSm?: boolean | typeof MARGINLEFTSM[number];

  marginMd?: boolean | typeof MARGINMD[number];
  marginTopMd?: boolean | typeof MARGINTOPMD[number];
  marginVerticalMd?: boolean | typeof MARGINVERTICALMD[number];
  marginBottomMd?: boolean | typeof MARGINBOTTOMMD[number];
  marginRightMd?: boolean | typeof MARGINRIGHTMD[number];
  marginHorizontalMd?: boolean | typeof MARGINHORIZONTALMD[number];
  marginLeftMd?: boolean | typeof MARGINLEFTMD[number];

  marginLg?: boolean | typeof MARGINLG[number];
  marginTopLg?: boolean | typeof MARGINTOPLG[number];
  marginVerticalLg?: boolean | typeof MARGINVERTICALLG[number];
  marginBottomLg?: boolean | typeof MARGINBOTTOMLG[number];
  marginRightLg?: boolean | typeof MARGINRIGHTLG[number];
  marginHorizontalLg?: boolean | typeof MARGINHORIZONTALLG[number];
  marginLeftLg?: boolean | typeof MARGINLEFTLG[number];

  marginXl?: boolean | typeof MARGINXL[number];
  marginTopXl?: boolean | typeof MARGINTOPXL[number];
  marginVerticalXl?: boolean | typeof MARGINVERTICALXL[number];
  marginBottomXl?: boolean | typeof MARGINBOTTOMXL[number];
  marginRightXl?: boolean | typeof MARGINRIGHTXL[number];
  marginHorizontalXl?: boolean | typeof MARGINHORIZONTALXL[number];
  marginLeftXl?: boolean | typeof MARGINLEFTXL[number];

  padding?: boolean | typeof PADDING[number];
  paddingTop?: boolean | typeof PADDINGTOP[number];
  paddingVertical?: boolean | typeof PADDINGVERTICAL[number];
  paddingBottom?: boolean | typeof PADDINGBOTTOM[number];
  paddingRight?: boolean | typeof PADDINGRIGHT[number];
  paddingHorizontal?: boolean | typeof PADDINGHORIZONTAL[number];
  paddingLeft?: boolean | typeof PADDINGLEFT[number];

  paddingSm?: boolean | typeof PADDINGSM[number];
  paddingTopSm?: boolean | typeof PADDINGTOPSM[number];
  paddingVerticalSm?: boolean | typeof PADDINGVERTICALSM[number];
  paddingBottomSm?: boolean | typeof PADDINGBOTTOMSM[number];
  paddingRightSm?: boolean | typeof PADDINGRIGHTSM[number];
  paddingHorizontalSm?: boolean | typeof PADDINGHORIZONTALSM[number];
  paddingLeftSm?: boolean | typeof PADDINGLEFTSM[number];

  paddingMd?: boolean | typeof PADDINGMD[number];
  paddingTopMd?: boolean | typeof PADDINGTOPMD[number];
  paddingVerticalMd?: boolean | typeof PADDINGVERTICALMD[number];
  paddingBottomMd?: boolean | typeof PADDINGBOTTOMMD[number];
  paddingRightMd?: boolean | typeof PADDINGRIGHTMD[number];
  paddingHorizontalMd?: boolean | typeof PADDINGHORIZONTALMD[number];
  paddingLeftMd?: boolean | typeof PADDINGLEFTMD[number];

  paddingLg?: boolean | typeof PADDINGLG[number];
  paddingTopLg?: boolean | typeof PADDINGTOPLG[number];
  paddingVerticalLg?: boolean | typeof PADDINGVERTICALLG[number];
  paddingBottomLg?: boolean | typeof PADDINGBOTTOMLG[number];
  paddingRightLg?: boolean | typeof PADDINGRIGHTLG[number];
  paddingHorizontalLg?: boolean | typeof PADDINGHORIZONTALLG[number];
  paddingLeftLg?: boolean | typeof PADDINGLEFTLG[number];

  paddingXl?: boolean | typeof PADDINGXL[number];
  paddingTopXl?: boolean | typeof PADDINGTOPXL[number];
  paddingVerticalXl?: boolean | typeof PADDINGVERTICALXL[number];
  paddingBottomXl?: boolean | typeof PADDINGBOTTOMXL[number];
  paddingRightXl?: boolean | typeof PADDINGRIGHTXL[number];
  paddingHorizontalXl?: boolean | typeof PADDINGHORIZONTALXL[number];
  paddingLeftXl?: boolean | typeof PADDINGLEFTXL[number];
}

export default ISpacing;
