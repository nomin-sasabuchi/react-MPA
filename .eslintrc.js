module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  // add your custom rules here
  rules: {
    'no-console': 0,
    'no-debugger': 'error',
    strict: 0,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType："モジュール"
  },
};
