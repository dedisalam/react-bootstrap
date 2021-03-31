import IGlobal from "./interface";
import { CreateDisplayStyles } from "./Display";
import { CreateMarginStyles } from "./Margin";
import { CreatePaddingStyles } from "./Padding";
import { CreateAlignStyles } from "./Align";
import { CreateBackgroundStyles } from "./Background";
import { CreateBorderStyles } from "./Border";
import { CreateBorderRadiusStyles } from "./BorderRadius";
import { CreateClearfixStyles } from "./Clearfix";

const CreateGlobalStyles = (props: IGlobal): (string | boolean)[] => {
  const styles = [];

  styles.push(...CreateDisplayStyles(props));
  styles.push(...CreateMarginStyles(props));
  styles.push(...CreatePaddingStyles(props));
  styles.push(...CreateAlignStyles(props));
  styles.push(...CreateBackgroundStyles(props));
  styles.push(...CreateBorderStyles(props));
  styles.push(...CreateBorderRadiusStyles(props));
  styles.push(...CreateClearfixStyles(props));

  return styles;
};
export default CreateGlobalStyles;
