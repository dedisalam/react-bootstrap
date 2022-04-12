/* eslint-disable import/prefer-default-export */
import { Global_ } from '../../utilities';

type Button = {
  'variant':
  Exclude<
  NonNullable<Global_['background-color']>, 'black' | 'white' | 'transparent' | 'body'
  > | 'link';

  'outline'?: boolean;
  'size'?: 'sm' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'reset' | 'submit';
}
& React.ComponentProps<'button'>;

export {
  type Button as Button_,
};
