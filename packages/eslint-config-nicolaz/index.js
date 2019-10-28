module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'nicolaz-base'
  ],
  rules: {

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],

    'react-hooks/exhaustive-deps': 'warn'
  }
};
