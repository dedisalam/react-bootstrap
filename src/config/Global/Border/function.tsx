import IBorder from "./interface";

const CreateBorderStyles = (props: IBorder): (string | boolean)[] => {
  const { border } = props;

  const styles = [];

  if (border) {
    if (border === "all") {
      styles.push(`border`);
    } else {
      styles.push(`border-${border}`);
    }
  }

  return styles;
};
export default CreateBorderStyles;
