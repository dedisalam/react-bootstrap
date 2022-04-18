// import React from 'react';
// import { DROPDOWN_ITEM } from '../../type';
// // import globalStyle from '../global';

// // type Common = {
// //   children: React.ReactNode;
// // };

// type Anchor = {
//   tag: 'a';
// } & React.ComponentProps<'a'>;
// type Div = {
//   tag: 'button';
// } & React.ComponentProps<'button'>;

// type Items = Anchor | Div;
// export default function Item(props: Items): JSX.Element {
//   const { children, tag } = props;

//   const localClassName = [];
//   localClassName.push(DROPDOWN_ITEM.base);
//   // const className = localClassName.concat(globalStyle(props));

//   return React.createElement(tag, {
//     className: localClassName.join(' '),
//     ...props,
//   }, children);
// }

// Item.defaultProps = {
// };
