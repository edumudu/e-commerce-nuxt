module.exports = {
  extends: 'stylelint-config-standard-scss',
  rules: {
    'string-quotes': 'single',
    'selector-pseudo-element-no-unknown': [
      true,
      { ignorePseudoElements: ['v-deep'] },
    ],
  },
};
