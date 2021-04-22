import IBorder from "./interface";

const CreateBorderStyles = (props: IBorder): (string | boolean)[] => {
  const {
    border,
    borderTop,
    borderRight,
    borderBottom,
    borderLeft,
    border0,
    borderTop0,
    borderRight0,
    borderBottom0,
    borderLeft0,
    borderRadius,
    borderColor,
  } = props;

  const styles = [];

  if (border) {
    styles.push("border");
  }
  if (borderTop) {
    styles.push("border-top");
  }
  if (borderRight) {
    styles.push("border-right");
  }
  if (borderBottom) {
    styles.push("border-bottom");
  }
  if (borderLeft) {
    styles.push("border-left");
  }

  if (border0) {
    styles.push("border-0");
  }
  if (borderTop0) {
    styles.push("border-top-0");
  }
  if (borderRight0) {
    styles.push("border-right-0");
  }
  if (borderBottom0) {
    styles.push("border-bottom-0");
  }
  if (borderLeft0) {
    styles.push("border-left-0");
  }

  if (borderRadius) {
    styles.push(`rounded-${borderRadius}`);
  }
  if (borderColor) {
    styles.push(`border-${borderColor}`);
  }

  return styles;
};
export default CreateBorderStyles;
