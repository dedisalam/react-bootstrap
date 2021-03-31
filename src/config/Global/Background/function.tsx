import IBackground from "./interface";

const CreateBackgroundStyles = (props: IBackground): (string | boolean)[] => {
  const { background } = props;

  const styles = [];

  if (background) {
    styles.push(`bg-${background}`);
  }

  return styles;
};
export default CreateBackgroundStyles;
