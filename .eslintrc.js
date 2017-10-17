module.exports = {
  globals: {
    server: true,
  },
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  env: {
    browser: true,
  },
  rules: {
    'brace-style': ['error', 'stroustrup'],
    'indent': ['error', 2],
    'no-trailing-spaces': 2
  }
};
