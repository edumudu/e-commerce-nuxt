import { extend } from 'vee-validate';
import { required, min, email, alpha, confirmed, numeric, max } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'This field is required'
});

extend('min', {
  ...min,
  message: 'This field must be at least {length} characters'
});

extend('max', {
  ...max,
  message: 'This field must have a maximum of {length} characters'
});

extend('email', {
  ...email,
  message: 'This field must be a valid e-mail'
});

extend('alpha', {
  ...alpha,
  message: 'This field must be only contain alphabetic characters'
});

extend('confirmed', {
  ...confirmed,
  message: 'The {target} field does not match'
});

extend('numeric', {
  ...numeric,
  message: 'This field may only contain numeric characters'
});
