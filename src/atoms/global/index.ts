import { GLOBAL, GlobalProps_ } from '../../variables';
import marginStyle from './margin';

export function globalStyle(props:GlobalProps_):string[] {
  const {
    'background-color': bgColor,
  } = props;
  const className = [];
  if (bgColor !== undefined) {
    className.push(GLOBAL['background-color'][bgColor]);
  }

  return className.concat(marginStyle(props));
}

export function globalProps(props:GlobalProps_):Object {
  const { id } = props;
  return {
    id,
  };
}
