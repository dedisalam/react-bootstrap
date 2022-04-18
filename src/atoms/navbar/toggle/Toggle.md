// import React from 'react';
// import { NavbarToggle_, NAVBAR_TOGGLE } from '../../../type';
// import { globalProps, globalStyle } from '../../global';

// export default function Toggle(props: NavbarToggle_): JSX.Element {
//   const { children, tag } = props;

//   const localClassName = [];
//   localClassName.push(NAVBAR_TOGGLE.base);
//   const className = localClassName.concat(globalStyle(props));

//   return React.createElement(tag, {
//     className: className.join(' '),
//     type: 'button',
//     ...globalProps(props),
//   }, children);
// }

// Toggle.defaultProps = {
//   children: null,
//   tag: 'button',
// };
