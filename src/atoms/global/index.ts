import { GLOBAL, GlobalProps_ } from '../../variables';

export function globalStyle(props:GlobalProps_):string[] {
  const { 'background-color': bgColor } = props;
  const className = [];
  if (bgColor !== undefined) {
    className.push(GLOBAL['background-color'][bgColor]);
  }
  return className;
}

export function globalProps(props:GlobalProps_):Object {
  const { id } = props;
  return {
    id,
  };
}
