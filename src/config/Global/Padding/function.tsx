import IPadding from "./interface";

const CreatePaddingStyles = (props: IPadding): (string | boolean)[] => {
  const {
    padding,
    paddingTop,
    paddingVertical,
    paddingBottom,
    paddingRight,
    paddingHorizontal,
    paddingLeft,
    paddingTopXs,
    paddingTopSm,
    paddingTopMd,
    paddingTopLg,
    paddingTopXl,
    paddingVerticalXs,
    paddingVerticalSm,
    paddingVerticalMd,
    paddingVerticalLg,
    paddingVerticalXl,
    paddingBottomXs,
    paddingBottomSm,
    paddingBottomMd,
    paddingBottomLg,
    paddingBottomXl,
    paddingRightXs,
    paddingRightSm,
    paddingRightMd,
    paddingRightLg,
    paddingRightXl,
    paddingHorizontalXs,
    paddingHorizontalSm,
    paddingHorizontalMd,
    paddingHorizontalLg,
    paddingHorizontalXl,
    paddingLeftXs,
    paddingLeftSm,
    paddingLeftMd,
    paddingLeftLg,
    paddingLeftXl,
  } = props;

  const styles = [];

  if (padding) {
    styles.push(padding);
  }
  if (paddingTop) {
    styles.push(paddingTop);
  }
  if (paddingVertical) {
    styles.push(paddingVertical);
  }
  if (paddingBottom) {
    styles.push(paddingBottom);
  }
  if (paddingRight) {
    styles.push(paddingRight);
  }
  if (paddingHorizontal) {
    styles.push(paddingHorizontal);
  }
  if (paddingLeft) {
    styles.push(paddingLeft);
  }
  if (paddingTopXs) {
    styles.push(paddingTopXs);
  }
  if (paddingVerticalXs) {
    styles.push(paddingVerticalXs);
  }
  if (paddingBottomXs) {
    styles.push(paddingBottomXs);
  }
  if (paddingRightXs) {
    styles.push(paddingRightXs);
  }
  if (paddingHorizontalXs) {
    styles.push(paddingHorizontalXs);
  }
  if (paddingLeftXs) {
    styles.push(paddingLeftXs);
  }
  if (paddingTopSm) {
    styles.push(paddingTopSm);
  }
  if (paddingVerticalSm) {
    styles.push(paddingVerticalSm);
  }
  if (paddingBottomSm) {
    styles.push(paddingBottomSm);
  }
  if (paddingRightSm) {
    styles.push(paddingRightSm);
  }
  if (paddingHorizontalSm) {
    styles.push(paddingHorizontalSm);
  }
  if (paddingLeftSm) {
    styles.push(paddingLeftSm);
  }
  if (paddingTopMd) {
    styles.push(paddingTopMd);
  }
  if (paddingVerticalMd) {
    styles.push(paddingVerticalMd);
  }
  if (paddingBottomMd) {
    styles.push(paddingBottomMd);
  }
  if (paddingRightMd) {
    styles.push(paddingRightMd);
  }
  if (paddingHorizontalMd) {
    styles.push(paddingHorizontalMd);
  }
  if (paddingLeftMd) {
    styles.push(paddingLeftMd);
  }
  if (paddingTopLg) {
    styles.push(paddingTopLg);
  }
  if (paddingVerticalLg) {
    styles.push(paddingVerticalLg);
  }
  if (paddingBottomLg) {
    styles.push(paddingBottomLg);
  }
  if (paddingRightLg) {
    styles.push(paddingRightLg);
  }
  if (paddingHorizontalLg) {
    styles.push(paddingHorizontalLg);
  }
  if (paddingLeftLg) {
    styles.push(paddingLeftLg);
  }
  if (paddingTopXl) {
    styles.push(paddingTopXl);
  }
  if (paddingVerticalXl) {
    styles.push(paddingVerticalXl);
  }
  if (paddingBottomXl) {
    styles.push(paddingBottomXl);
  }
  if (paddingRightXl) {
    styles.push(paddingRightXl);
  }
  if (paddingHorizontalXl) {
    styles.push(paddingHorizontalXl);
  }
  if (paddingLeftXl) {
    styles.push(paddingLeftXl);
  }

  return styles;
};
export default CreatePaddingStyles;
