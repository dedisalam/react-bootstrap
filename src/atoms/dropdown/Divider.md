// import React from 'react';
// import { DropdownDivider_, DROPDOWN_DIVIDER } from '../../type';
// import { globalProps, globalStyle } from '../global';

// export default function Divider(props: DropdownDivider_): JSX.Element {
//   const { children, tag } = props;

//   const localClassName = [];
//   localClassName.push(DROPDOWN_DIVIDER.base);
//   const className = localClassName.concat(globalStyle(props));

//   return React.createElement(tag, {
//     className: className.join(' '),
//     ...globalProps(props),
//   }, children);
// }

// Divider.defaultProps = {
//   children: null,
//   tag: 'hr',
// };
