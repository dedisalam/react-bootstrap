// import React from 'react';
// import { DROPDOWN, Dropdown_ } from '../../type';
// import { globalProps, globalStyle } from '../global';

// export default function Dropdown(props: Dropdown_): JSX.Element {
//   const {
//     children, tag,
//   } = props;

//   const localClassName = [];
//   localClassName.push(DROPDOWN.base);
//   const className = localClassName.concat(globalStyle(props));

//   return React.createElement(tag, {
//     className: className.join(' '),
//     ...globalProps(props),
//   }, children);
// }

// Dropdown.defaultProps = {
//   children: null,
//   tag: 'div',
// };
