import Align from './align';
import BgColor from './bgColor';
import Border from './border';
import BorderRadius from './borderRadius';
import Display from './display';
import Flex from './flex';
import Float from './float';
import { Global_ } from '../../type';
import Interaction from './interaction';
import Opacity from './opacity';
import Overflow from './overflow';
import Position from './position';
import Shadow from './shadow';
import Sizing from './sizing';
import Spacing from './spacing';
import Text from './text';
import Visibility from './visibility';

export default function globalStyle(props: Global_): string[] {
  const className: string[] = [];

  return className.concat(
    Align(props),
    Float(props),
    Opacity(props),
    Overflow(props),
    Display(props),
    Shadow(props),
    Position(props),
    Border(props),
    Sizing(props),
    Flex(props),
    Spacing(props),
    Text(props),
    BgColor(props),
    Interaction(props),
    BorderRadius(props),
    Visibility(props),
  );
}
