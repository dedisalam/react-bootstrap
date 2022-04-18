// import React from 'react';
// import { Button_, BUTTON } from '../../type';
// import { globalProps, globalStyle } from '../global';

// export default function Button(props: Button_): JSX.Element {
//   const {
//     children, tag, variant, outline, size, disabled, type,
//   } = props;

//   const localClassName = [];
//   localClassName.push(BUTTON.base);
//   if (outline && variant !== 'link') {
//     localClassName.push(BUTTON.outline[variant]);
//   } else {
//     localClassName.push(BUTTON.variant[variant]);
//   }
//   if (size) {
//     localClassName.push(BUTTON.size[size]);
//   }
//   const className = localClassName.concat(globalStyle(props));

//   return React.createElement(tag, {
//     className: className.join(' '),
//     ...globalProps(props),
//     type,
//     disabled,
//   }, children);
// }

// Button.defaultProps = {
//   children: null,
//   tag: 'button',
//   type: 'button',
//   disabled: false,
// };
