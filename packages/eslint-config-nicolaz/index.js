module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'nicolaz-base'
  ],
  rules: {

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],

    // https://www.npmjs.com/package/eslint-plugin-react-hooks
    // https://reactjs.org/docs/hooks-rules.html
    'react-hooks/exhaustive-deps': 'warn'
  }
};
