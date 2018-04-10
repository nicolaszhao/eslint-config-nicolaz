module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jquery: true,
    mocha: true
  },
  plugins: [
    'import',
    'react',
    'jsx-a11y'
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    './rules/errors.js',
    './rules/best-practices.js',
    './rules/variables.js',
    './rules/styles.js',
    './rules/es6.js',
    './rules/import.js',
    './rules/jsx-a11y.js',
    './rules/react.js'
  ]
};
