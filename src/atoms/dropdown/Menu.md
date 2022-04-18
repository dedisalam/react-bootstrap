// import React from 'react';
// import { DROPDOWN_MENU, DropdownMenu_ } from '../../type';
// import { globalProps, globalStyle } from '../global';

// export default function Menu(props: DropdownMenu_): JSX.Element {
//   const {
//     children, tag,
//   } = props;

//   const localClassName = [];
//   localClassName.push(DROPDOWN_MENU.base);
//   const className = localClassName.concat(globalStyle(props));

//   return React.createElement(tag, {
//     className: className.join(' '),
//     ...globalProps(props),
//   }, children);
// }

// Menu.defaultProps = {
//   children: null,
//   tag: 'ul',
// };
