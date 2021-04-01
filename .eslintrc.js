module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',

  ],
  rules: {
    'linebreak-style': 0,
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    'react/prefer-stateless-function': 0,
    'react/state-in-constructor': 0,
    'react/no-unused-state': -0,

  },
};
