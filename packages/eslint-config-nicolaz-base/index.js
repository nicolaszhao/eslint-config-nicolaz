module.exports = {
  extends: [
    'airbnb-base'
  ],
  env: {
    browser: true
  },
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

    // 允许使用非 Error 对象作为 Promise 拒绝的原因
    // https://cn.eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': 'off',

    // 允许使用嵌套的三元表达式
    // https://cn.eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 'off',

    // 禁止未使用过的表达式，但允许在表达式中使用逻辑短路求值
    // https://cn.eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: false,
      allowTaggedTemplates: false,
    }],

    // 允许使用一元操作符 ++ 和 --
    // https://cn.eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'off',

    // 允许 require 的参数是动态生成的
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    'import/no-dynamic-require': 'off',
  }
};
