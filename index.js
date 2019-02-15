module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react',
    'jsx-a11y'
  ],
  extends: [
    'eslint-config-nz-base',
    'plugin:react/recommended',
    './rules/react.js',
    './rules/jsx-a11y.js'
  ]
};
