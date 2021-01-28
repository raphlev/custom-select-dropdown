module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-new': 0,
    'import/extensions': 0,
    'react/prop-types': 0,
    'linebreak-style': 0,
    'no-use-before-define': 0,
    'no-param-reassign': 0,
    'max-len': [
      2,
      250,
    ],
  },
};
