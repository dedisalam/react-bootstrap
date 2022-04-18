// import React from 'react';
// import { NAVBAR, Navbar_ } from '../../type';
// import { globalProps, globalStyle } from '../global';

// export default function Navbar(props: Navbar_): JSX.Element {
//   const {
//     children, expand, mode, tag,
//   } = props;

//   const localClassName = [];
//   localClassName.push(NAVBAR.base);
//   localClassName.push(NAVBAR.expand[expand]);
//   localClassName.push(NAVBAR.mode[mode]);
//   const className = localClassName.concat(globalStyle(props));

//   return React.createElement(tag, {
//     className: className.join(' '),
//     ...globalProps(props),
//   }, children);
// }

// Navbar.defaultProps = {
//   children: null,
//   tag: 'nav',
// };

import styled from 'styled-components';
import { NAVBAR_PADDING_X, NAVBAR_PADDING_Y } from '../../variables';

const Navbar = styled.nav({
  position: 'relative',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: NAVBAR_PADDING_Y,
  paddingRight: NAVBAR_PADDING_X,
  paddingBottom: NAVBAR_PADDING_Y,
  paddingLeft: NAVBAR_PADDING_X,
});

// eslint-disable-next-line no-console
console.log(Navbar);

export default Navbar;
