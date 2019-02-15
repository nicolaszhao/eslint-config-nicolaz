module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
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
    'import'
  ],
  extends: [
    'eslint:recommended',
    './rules/best-practices.js',
    './rules/errors.js',
    './rules/style.js',
    './rules/variables.js',
    './rules/es6.js',
    './rules/imports.js'
  ]
};
