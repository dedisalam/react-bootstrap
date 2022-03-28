import { GLOBAL, GlobalProps_ } from '../../variables';

export function globalStyle(props:GlobalProps_):string[] {
  const {
    'background-color': bgColor,
  //  'margin-end': marginEnd
  } = props;
  const className = [];
  if (bgColor !== undefined) {
    className.push(GLOBAL['background-color'][bgColor]);
  }

  // if (marginEnd !== undefined) {
  //   className.push(GLOBAL['margin-end'][marginEnd]);
  // }
  return className;
}

export function globalProps(props:GlobalProps_):Object {
  const { id } = props;
  return {
    id,
  };
}
