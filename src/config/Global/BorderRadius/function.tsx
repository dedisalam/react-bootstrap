import IBorderRadius from "./interface";

const CreateBorderRadiusStyles = (
  props: IBorderRadius
): (string | boolean)[] => {
  const { borderRadius } = props;

  const styles = [];

  if (borderRadius) {
    if (borderRadius === "all") {
      styles.push(`rounded`);
    } else {
      styles.push(`rounded-${borderRadius}`);
    }
  }

  return styles;
};
export default CreateBorderRadiusStyles;
