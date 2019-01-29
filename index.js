module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    worker: true,
    amd: true,
    mocha: true,
    jest: true,
    qunit: true,
    jquery: true,
    shelljs: true
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
    './rules/style.js',
    './rules/es6.js',
    './rules/import.js',
    './rules/jsx-a11y.js',
    './rules/react.js'
  ]
};
