import Align_ from './align';
import BgColor_ from './bgColor';
import BorderRadius_ from './borderRadius';
import Border_ from './border';
import Display_ from './display';
import Flex_ from './flex';
import Float_ from './float';
import Interaction_ from './interaction';
import Opacity_ from './opacity';
import Overflow_ from './overflow';
import Position_ from './position';
import Shadow_ from './shadow';
import Sizing_ from './sizing';
import Spacing_ from './spacing';
import Text_ from './text';
import Visibility_ from './visibility';

type Global =
  & Align_
  & Float_
  & Opacity_
  & Overflow_
  & Display_
  & Shadow_
  & Position_
  & Border_
  & Sizing_
  & Flex_
  & Spacing_
  & Text_
  & BgColor_
  & Interaction_
  & BorderRadius_
  & Visibility_
  & {
    children?: React.ReactNode,
    id?: string,
    'data-bs-toggle'?: string,
    'data-bs-target'?: string,
    'aria-controls'?: string,
    'aria-expanded'?: string,
    'aria-label'?: string,
  };

export default Global;
