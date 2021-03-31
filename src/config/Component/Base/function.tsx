import IBase from "./interface";

const CreateBaseStyles = (props: IBase): (string | boolean)[] => {
  const { className } = props;

  const styles = [];

  if (className) {
    styles.push(className);
  }

  return styles;
};

export default CreateBaseStyles;
