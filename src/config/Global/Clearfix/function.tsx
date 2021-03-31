import IClearfix from "./interface";

const CreateClearfixStyles = (
  props: IClearfix
): (string | boolean)[] => {
  const { clearfix } = props;

  const styles = [];

  if (clearfix) {
      styles.push('clearfix');
  }

  return styles;
};
export default CreateClearfixStyles;
