import { AlignDefaultProps } from "./Align";
import { BackgroundDefaultProps } from "./Background";
import { BorderDefaultProps } from "./Border";
import { DisplayDefaultProps } from "./Display";
import { SpacingDefaultProps } from "./Spacing";

const GlobalDefaultProps = {
  ...DisplayDefaultProps,
  ...SpacingDefaultProps,
  ...AlignDefaultProps,
  ...BackgroundDefaultProps,
  ...BorderDefaultProps,
};

export default GlobalDefaultProps;
