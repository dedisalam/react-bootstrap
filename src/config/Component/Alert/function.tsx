import IAlert from "./interface";

const CreateAlertStyles = (props: IAlert): (string | boolean)[] => {
  const { bg, dismissible } = props;

  const styles = [];

  styles.push("alert");

  if (bg) {
    styles.push(`alert-${bg}`);
  }

  if (dismissible) {
    styles.push("alert-dismissible");
    styles.push("fade");
    styles.push("show");
  }

  return styles;
};

export default CreateAlertStyles;
