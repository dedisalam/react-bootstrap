import IDisplay from "./interface";

const CreateDisplayStyles = (props: IDisplay): (string | boolean)[] => {
  const {
    display,
    displayXS,
    displaySM,
    displayMD,
    displayLG,
    displayXL,
  } = props;

  const styles = [];

  if (display) {
    styles.push(`d-${display}`);
  }
  if (displayXS) {
    styles.push(`d-xs-${displayXS}`);
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

  return styles;
};
export default CreateDisplayStyles;
