/* eslint-disable import/prefer-default-export */
import { Global_ } from '../global';

type Button = Global_ & {
  'variant':
  Exclude<
  NonNullable<Global_['background-color']>, 'black' | 'white' | 'transparent' | 'body'
  > | 'link';

  'outline'?: boolean;
  'size'?: 'sm' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'reset' | 'submit';
};

export {
  type Button as Button_,
};
