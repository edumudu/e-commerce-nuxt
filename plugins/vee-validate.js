import { extend } from 'vee-validate';
import {
  required,
  // eslint-disable-next-line camelcase
  required_if,
  min,
  max,
  email,
  alpha,
  // eslint-disable-next-line camelcase
  alpha_spaces,
  // eslint-disable-next-line camelcase
  max_value,
  // eslint-disable-next-line camelcase
  alpha_num,
  // eslint-disable-next-line camelcase
  min_value,
  confirmed,
  numeric,
  digits,
  regex,
  length,
  image
} from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'This field is required'
});

extend('required_if', {
  // eslint-disable-next-line camelcase
  ...required_if,
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

extend('alpha_spaces', {
  // eslint-disable-next-line camelcase
  ...alpha_spaces,
  message: 'This field must be only contain alphabetic characters as well as spaces'
});

extend('alpha_num', {
  // eslint-disable-next-line camelcase
  ...alpha_num,
  message: 'This field may only contain alpha-numeric characters'
});

extend('max_value', {
  // eslint-disable-next-line camelcase
  ...max_value,
  message: 'This field must be {max} or less'
});

extend('min_value', {
  // eslint-disable-next-line camelcase
  ...min_value,
  message: 'This field must be {min} or more'
});

extend('confirmed', {
  ...confirmed,
  message: 'The {target} field does not match'
});

extend('numeric', {
  ...numeric,
  message: 'This field may only contain numeric characters'
});

extend('digits', {
  ...digits,
  message: 'The field must be numeric and exactly contain {length} digits'
});

extend('regex', {
  ...regex,
  message: 'The field format is invalid'
});

extend('length', {
  ...length,
  message: 'The field must be {length} long'
});

extend('image', {
  ...image,
  message: 'The field must be an image'
});

extend('decimals', {
  params: ['decimals', 'separator'],
  validate: (value, { decimals = '*', separator = '.' }) => {
    if (value === null || value === undefined || value === '') {
      return {
        valid: false
      };
    }

    if (+decimals === 0) {
      return {
        valid: /^-?\d*$/.test(value)
      };
    }

    const regexPart = decimals === '*' ? '+' : `{${decimals}}`;
    const regex = new RegExp(`^-?\\d+\\${separator}\\d${regexPart}$`);

    return {
      valid: regex.test(value)
    };
  },

  message: 'This field must contain {decimals} decimal places'
});
