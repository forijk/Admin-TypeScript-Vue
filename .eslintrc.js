module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'strict': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'max-len': 'off',
    'no-underscore-dangle': 'off',
    'no-prototype-builtins': 'off',
    'no-use-before-define': 'off'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
