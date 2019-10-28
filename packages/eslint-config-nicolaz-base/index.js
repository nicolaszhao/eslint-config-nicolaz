module.exports = {
  extends: [
    'airbnb-base'
  ],
  rules: {

    // 允许对函数参数重新赋值
    // https://cn.eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': 'off',

    // 允许函数根据代码分支有不同的 return 行为
    // https://cn.eslint.org/docs/rules/consistent-return
    'consistent-return': 'off',

    // 允许 require() 在代码的任何地方调用
    // https://cn.eslint.org/docs/rules/global-require
    'global-require': 'off',

    'prefer-promise-reject-errors': 'off',
    'no-nested-ternary': 'off',

    'import/no-dynamic-require': 'off',
  }
};