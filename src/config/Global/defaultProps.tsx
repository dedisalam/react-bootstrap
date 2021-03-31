import { AlignDefaultProps } from "./Align";
import { BackgroundDefaultProps } from "./Background";
import { BorderDefaultProps } from "./Border";
import { BorderRadiusDefaultProps } from "./BorderRadius";
import { ClearfixDefaultProps } from "./Clearfix";
import { DisplayDefaultProps } from "./Display";
import { MarginDefaultProps } from "./Margin";
import { PaddingDefaultProps } from "./Padding";

const GlobalDefaultProps = {
  ...DisplayDefaultProps,
  ...MarginDefaultProps,
  ...PaddingDefaultProps,
  ...AlignDefaultProps,
  ...BackgroundDefaultProps,
  ...BorderDefaultProps,
  ...BorderRadiusDefaultProps,
  ...ClearfixDefaultProps,
};

export default GlobalDefaultProps;
