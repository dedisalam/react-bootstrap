import { GLOBAL, GlobalProps_ } from '../../variables';

export default function globalStyle(props:GlobalProps_) {
  const { 'background-color': bgColor } = props;
  const className = [];
  if (bgColor !== undefined) {
    className.push(GLOBAL['background-color'][bgColor]);
  }
  return className;
}
