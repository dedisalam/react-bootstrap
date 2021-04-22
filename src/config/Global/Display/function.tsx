import IDisplay from "./interface";

const CreateDisplayStyles = (props: IDisplay): (string | boolean)[] => {
  const {
    display,
    displaySM,
    displayMD,
    displayLG,
    displayXL,
    displayPrint,
  } = props;

  const styles = [];

  if (display) {
    styles.push(`d-${display}`);
  }
  if (displaySM) {
    styles.push(`d-sm-${displaySM}`);
  }
  if (displayMD) {
    styles.push(`d-md-${displayMD}`);
  }
  if (displayLG) {
    styles.push(`d-lg-${displayLG}`);
  }
  if (displayXL) {
    styles.push(`d-xl-${displayXL}`);
  }
  if (displayPrint) {
    styles.push(`d-print-${displayPrint}`);
  }

  return styles;
};
export default CreateDisplayStyles;
