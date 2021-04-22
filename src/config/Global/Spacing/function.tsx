import ISpacing from "./interface";

const CreateSpacingStyles = (props: ISpacing): (string | boolean)[] => {
  const {
    margin,
    marginTop,
    marginVertical,
    marginBottom,
    marginRight,
    marginHorizontal,
    marginLeft,
    marginSm,
    marginMd,
    marginLg,
    marginXl,
    marginTopSm,
    marginTopMd,
    marginTopLg,
    marginTopXl,
    marginVerticalSm,
    marginVerticalMd,
    marginVerticalLg,
    marginVerticalXl,
    marginBottomSm,
    marginBottomMd,
    marginBottomLg,
    marginBottomXl,
    marginRightSm,
    marginRightMd,
    marginRightLg,
    marginRightXl,
    marginHorizontalSm,
    marginHorizontalMd,
    marginHorizontalLg,
    marginHorizontalXl,
    marginLeftSm,
    marginLeftMd,
    marginLeftLg,
    marginLeftXl,
    padding,
    paddingTop,
    paddingVertical,
    paddingBottom,
    paddingRight,
    paddingHorizontal,
    paddingLeft,
    paddingSm,
    paddingMd,
    paddingLg,
    paddingXl,
    paddingTopSm,
    paddingTopMd,
    paddingTopLg,
    paddingTopXl,
    paddingVerticalSm,
    paddingVerticalMd,
    paddingVerticalLg,
    paddingVerticalXl,
    paddingBottomSm,
    paddingBottomMd,
    paddingBottomLg,
    paddingBottomXl,
    paddingRightSm,
    paddingRightMd,
    paddingRightLg,
    paddingRightXl,
    paddingHorizontalSm,
    paddingHorizontalMd,
    paddingHorizontalLg,
    paddingHorizontalXl,
    paddingLeftSm,
    paddingLeftMd,
    paddingLeftLg,
    paddingLeftXl,
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

  if (marginSm) {
    styles.push(`m-sm-${marginSm}`);
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

  if (marginMd) {
    styles.push(`m-md-${marginMd}`);
  }
  if (marginTopMd) {
    styles.push(`mt-md-${marginTopMd}`);
  }
  if (marginVerticalMd) {
    styles.push(`my-md-${marginVerticalMd}`);
  }
  if (marginBottomMd) {
    styles.push(`mb-md-${marginBottomMd}`);
  }
  if (marginRightMd) {
    styles.push(`mr-md-${marginRightMd}`);
  }
  if (marginHorizontalMd) {
    styles.push(`mx-md-${marginHorizontalMd}`);
  }
  if (marginLeftMd) {
    styles.push(`ml-md-${marginLeftMd}`);
  }

  if (marginLg) {
    styles.push(`m-lg-${marginLg}`);
  }
  if (marginTopLg) {
    styles.push(`mt-lg-${marginTopLg}`);
  }
  if (marginVerticalLg) {
    styles.push(`my-lg-${marginVerticalLg}`);
  }
  if (marginBottomLg) {
    styles.push(`mb-lg-${marginBottomLg}`);
  }
  if (marginRightLg) {
    styles.push(`mr-lg-${marginRightLg}`);
  }
  if (marginHorizontalLg) {
    styles.push(`mx-lg-${marginHorizontalLg}`);
  }
  if (marginLeftLg) {
    styles.push(`ml-lg-${marginLeftLg}`);
  }

  if (marginXl) {
    styles.push(`m-xl-${marginXl}`);
  }
  if (marginTopXl) {
    styles.push(`mt-xl-${marginTopXl}`);
  }
  if (marginVerticalXl) {
    styles.push(`my-xl-${marginVerticalXl}`);
  }
  if (marginBottomXl) {
    styles.push(`mb-xl-${marginBottomXl}`);
  }
  if (marginRightXl) {
    styles.push(`mr-xl-${marginRightXl}`);
  }
  if (marginHorizontalXl) {
    styles.push(`mx-xl-${marginHorizontalXl}`);
  }
  if (marginLeftXl) {
    styles.push(`ml-xl-${marginLeftXl}`);
  }

  if (padding) {
    styles.push(`p-${padding}`);
  }
  if (paddingTop) {
    styles.push(`pt-${paddingTop}`);
  }
  if (paddingVertical) {
    styles.push(`py-${paddingVertical}`);
  }
  if (paddingBottom) {
    styles.push(`pb-${paddingBottom}`);
  }
  if (paddingRight) {
    styles.push(`pr-${paddingRight}`);
  }
  if (paddingHorizontal) {
    styles.push(`px-${paddingHorizontal}`);
  }
  if (paddingLeft) {
    styles.push(`pl-${paddingLeft}`);
  }

  if (paddingSm) {
    styles.push(`p-sm-${paddingSm}`);
  }
  if (paddingTopSm) {
    styles.push(`pt-sm-${paddingTopSm}`);
  }
  if (paddingVerticalSm) {
    styles.push(`py-sm-${paddingVerticalSm}`);
  }
  if (paddingBottomSm) {
    styles.push(`pb-sm-${paddingBottomSm}`);
  }
  if (paddingRightSm) {
    styles.push(`pr-sm-${paddingRightSm}`);
  }
  if (paddingHorizontalSm) {
    styles.push(`px-sm-${paddingHorizontalSm}`);
  }
  if (paddingLeftSm) {
    styles.push(`pl-sm-${paddingLeftSm}`);
  }

  if (paddingMd) {
    styles.push(`p-md-${paddingMd}`);
  }
  if (paddingTopMd) {
    styles.push(`pt-md-${paddingTopMd}`);
  }
  if (paddingVerticalMd) {
    styles.push(`py-md-${paddingVerticalMd}`);
  }
  if (paddingBottomMd) {
    styles.push(`pb-md-${paddingBottomMd}`);
  }
  if (paddingRightMd) {
    styles.push(`pr-md-${paddingRightMd}`);
  }
  if (paddingHorizontalMd) {
    styles.push(`px-md-${paddingHorizontalMd}`);
  }
  if (paddingLeftMd) {
    styles.push(`pl-md-${paddingLeftMd}`);
  }

  if (paddingLg) {
    styles.push(`p-lg-${paddingLg}`);
  }
  if (paddingTopLg) {
    styles.push(`pt-lg-${paddingTopLg}`);
  }
  if (paddingVerticalLg) {
    styles.push(`py-lg-${paddingVerticalLg}`);
  }
  if (paddingBottomLg) {
    styles.push(`pb-lg-${paddingBottomLg}`);
  }
  if (paddingRightLg) {
    styles.push(`pr-lg-${paddingRightLg}`);
  }
  if (paddingHorizontalLg) {
    styles.push(`px-lg-${paddingHorizontalLg}`);
  }
  if (paddingLeftLg) {
    styles.push(`pl-lg-${paddingLeftLg}`);
  }

  if (paddingXl) {
    styles.push(`p-xl-${paddingXl}`);
  }
  if (paddingTopXl) {
    styles.push(`pt-xl-${paddingTopXl}`);
  }
  if (paddingVerticalXl) {
    styles.push(`py-xl-${paddingVerticalXl}`);
  }
  if (paddingBottomXl) {
    styles.push(`pb-xl-${paddingBottomXl}`);
  }
  if (paddingRightXl) {
    styles.push(`pr-xl-${paddingRightXl}`);
  }
  if (paddingHorizontalXl) {
    styles.push(`px-xl-${paddingHorizontalXl}`);
  }
  if (paddingLeftXl) {
    styles.push(`pl-xl-${paddingLeftXl}`);
  }

  return styles;
};
export default CreateSpacingStyles;
