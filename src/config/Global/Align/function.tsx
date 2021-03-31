import IAlign from "./interface";

const CreateAlignStyles = (props: IAlign): (string | boolean)[] => {
  const { align } = props;

  const styles = [];

  if (align) {
    styles.push(`align-${align}`);
  }

  return styles;
};
export default CreateAlignStyles;
