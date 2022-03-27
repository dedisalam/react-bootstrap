import { GLOBAL, GlobalProps_ } from '../../variables';

function globalStyle(props:GlobalProps_) {
  const { 'background-color': bgColor } = props;
  const className = [];
  if (bgColor !== undefined) {
    className.push(GLOBAL['background-color'][bgColor]);
  }
  return className;
}
export default globalStyle;
