module.exports = {
  rules: {

    // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-new-wrappers': 'error',

    // 禁止使用 var 多次声明同一变量
    'no-redeclare': 'error',

    // 禁止使用 javascript: url
    'no-script-url': 'error',

    // 禁止不必要的字符串字面量或模板字面量的连接
    'no-useless-concat': 'error',

    // 强制在parseInt()使用基数参数
    'radix': ['error', 'always'],

    // 要求或禁止 “Yoda” 条件
    'yoda': ['error', 'never', {
      'exceptRange': true
    }]
  }
};
