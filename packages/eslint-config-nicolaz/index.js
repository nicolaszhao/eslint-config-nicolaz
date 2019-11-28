module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'nicolaz-base'
  ],
  rules: {

    // 目前使用下来有些问题:
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/511
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/label-has-associated-control.md
    'jsx-a11y/label-has-associated-control': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],

    // 强制 props 不使用展开操作符，但允许自定义组件
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-props-no-spreading.md
    'react/jsx-props-no-spreading': ['error', {
      html: 'enforce',
      custom: 'ignore',
      exceptions: [],
    }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': 'off',

    // https://www.npmjs.com/package/eslint-plugin-react-hooks
    // https://reactjs.org/docs/hooks-rules.html
    'react-hooks/exhaustive-deps': 'warn',
  }
};
