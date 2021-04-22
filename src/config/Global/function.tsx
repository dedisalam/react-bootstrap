import IGlobal from "./interface";
import { CreateDisplayStyles } from "./Display";
import { CreateSpacingStyles } from "./Spacing";
import { CreateAlignStyles } from "./Align";
import { CreateBackgroundStyles } from "./Background";
import { CreateBorderStyles } from "./Border";

const CreateGlobalStyles = (props: IGlobal): (string | boolean)[] => {
  const styles = [];

  styles.push(...CreateDisplayStyles(props));
  styles.push(...CreateSpacingStyles(props));
  styles.push(...CreateAlignStyles(props));
  styles.push(...CreateBackgroundStyles(props));
  styles.push(...CreateBorderStyles(props));

  return styles;
};
export default CreateGlobalStyles;
