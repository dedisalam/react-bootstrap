import IMargin from "./interface";

const CreateMarginStyles = (props: IMargin): (string | boolean)[] => {
  const {
    margin,
    marginTop,
    marginVertical,
    marginBottom,
    marginRight,
    marginHorizontal,
    marginLeft,
    marginTopXs,
    marginTopSm,
    marginTopMd,
    marginTopLg,
    marginTopXl,
    marginVerticalXs,
    marginVerticalSm,
    marginVerticalMd,
    marginVerticalLg,
    marginVerticalXl,
    marginBottomXs,
    marginBottomSm,
    marginBottomMd,
    marginBottomLg,
    marginBottomXl,
    marginRightXs,
    marginRightSm,
    marginRightMd,
    marginRightLg,
    marginRightXl,
    marginHorizontalXs,
    marginHorizontalSm,
    marginHorizontalMd,
    marginHorizontalLg,
    marginHorizontalXl,
    marginLeftXs,
    marginLeftSm,
    marginLeftMd,
    marginLeftLg,
    marginLeftXl,
  } = props;

  const styles = [];

  if (margin) {
    styles.push(`m-${margin}`);
  }
  if (marginTop) {
    styles.push(`mt-${marginTop}`);
  }
  if (marginVertical) {
    styles.push(`my-${marginVertical}`);
  }
  if (marginBottom) {
    styles.push(`mb-${marginBottom}`);
  }
  if (marginRight) {
    styles.push(`mr-${marginRight}`);
  }
  if (marginHorizontal) {
    styles.push(`mx-${marginHorizontal}`);
  }
  if (marginLeft) {
    styles.push(`ml-${marginLeft}`);
  }
  if (marginTopXs) {
    styles.push(`mt-xs-${marginTopXs}`);
  }
  if (marginVerticalXs) {
    styles.push(`my-xs-${marginVerticalXs}`);
  }
  if (marginBottomXs) {
    styles.push(`mb-xs-${marginBottomXs}`);
  }
  if (marginRightXs) {
    styles.push(`mr-xs-${marginRightXs}`);
  }
  if (marginHorizontalXs) {
    styles.push(`mx-xs-${marginHorizontalXs}`);
  }
  if (marginLeftXs) {
    styles.push(`ml-xs-${marginLeftXs}`);
  }
  if (marginTopSm) {
    styles.push(`mt-sm-${marginTopSm}`);
  }
  if (marginVerticalSm) {
    styles.push(`my-sm-${marginVerticalSm}`);
  }
  if (marginBottomSm) {
    styles.push(`mb-sm-${marginBottomSm}`);
  }
  if (marginRightSm) {
    styles.push(`mr-sm-${marginRightSm}`);
  }
  if (marginHorizontalSm) {
    styles.push(`mx-sm-${marginHorizontalSm}`);
  }
  if (marginLeftSm) {
    styles.push(`ml-sm-${marginLeftSm}`);
  }
  if (marginTopMd) {
    styles.push(`mt-md-${marginTopMd}`);
  }
  if (marginVerticalMd) {
    styles.push(`my-md${marginVerticalMd}`);
  }
  if (marginBottomMd) {
    styles.push(`mb-md${marginBottomMd}`);
  }
  if (marginRightMd) {
    styles.push(`mr-md-${marginRightMd}`);
  }
  if (marginHorizontalMd) {
    styles.push(`marginHorizontalMd`);
  }
  if (marginLeftMd) {
    styles.push(marginLeftMd);
  }
  if (marginTopLg) {
    styles.push(marginTopLg);
  }
  if (marginVerticalLg) {
    styles.push(marginVerticalLg);
  }
  if (marginBottomLg) {
    styles.push(marginBottomLg);
  }
  if (marginRightLg) {
    styles.push(marginRightLg);
  }
  if (marginHorizontalLg) {
    styles.push(marginHorizontalLg);
  }
  if (marginLeftLg) {
    styles.push(marginLeftLg);
  }
  if (marginTopXl) {
    styles.push(marginTopXl);
  }
  if (marginVerticalXl) {
    styles.push(marginVerticalXl);
  }
  if (marginBottomXl) {
    styles.push(marginBottomXl);
  }
  if (marginRightXl) {
    styles.push(marginRightXl);
  }
  if (marginHorizontalXl) {
    styles.push(marginHorizontalXl);
  }
  if (marginLeftXl) {
    styles.push(marginLeftXl);
  }

  return styles;
};
export default CreateMarginStyles;
