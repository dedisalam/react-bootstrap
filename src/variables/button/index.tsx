import { GLOBAL } from '../global';
import { Button_ } from './type';

const BUTTON = {
  ...GLOBAL,
  base: 'btn',
  variant: {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    success: 'btn-success',
    danger: 'btn-danger',
    warning: 'btn-warning',
    info: 'btn-info',
    light: 'btn-light',
    dark: 'btn-dark',
    link: 'btn-link',
  },
  outline: {
    primary: 'btn-outline-primary',
    secondary: 'btn-outline-secondary',
    success: 'btn-outline-success',
    danger: 'btn-outline-danger',
    warning: 'btn-outline-warning',
    info: 'btn-outline-info',
    light: 'btn-outline-light',
    dark: 'btn-outline-dark',
  },
  size: {
    sm: 'btn-sm',
    lg: 'btn-lg',
  },
};

export {
  BUTTON,
  type Button_,
};
