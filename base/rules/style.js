module.exports = {
  rules: {

    // 强制数组方括号中使用一致的空格
    'array-bracket-spacing': ['error', 'never'],

    // 强制在代码块中使用一致的大括号风格
    'brace-style': ['error', '1tbs'],

    // 强制使用骆驼拼写法命名约定
    'camelcase': ['error', {
      'properties': 'always'
    }],

    // 强制在逗号前后使用一致的空格
    'comma-spacing': 'error',

    // 强制使用一致的逗号风格
    'comma-style': 'error',

    // 强制使用一致的缩进
    'indent': ['error', 2, {
      'SwitchCase': 1,
      'VariableDeclarator': 1
    }],

    // 强制在 JSX 属性中一致地使用双引号或单引号
    'jsx-quotes': ['error', 'prefer-double'],

    // 强制在对象字面量的属性中键和值之间使用一致的间距
    'key-spacing': 'error',

    // 强制在关键字前后使用一致的空格
    'keyword-spacing': 'error',

    // 强制使用一致的换行风格
    'linebreak-style': ['error', 'unix'],

    // 要求在注释周围有空行
    'lines-around-comment': ['error', {
      'beforeLineComment': true
    }],

    // 强制一行的最大长度
    'max-len': ['error', {
      code: 100,
      tabWidth: 2,
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true
    }],

    // 要求构造函数首字母大写
    'new-cap': ['error', {
      'capIsNew': false
    }],

    // 要求或禁止在声明语句前后有一个或多个的空行
    'padding-line-between-statements': ['error', 
      { 'blankLine': 'always', 'prev': ['const', 'let', 'var'], 'next': '*' },
      { 'blankLine': "any", 'prev': ['const', 'let', 'var'], 'next': ['const', 'let', 'var']},
      { 'blankLine': 'always', 'prev': 'function', 'next': '*' },
      { 'blankLine': 'always', 'prev': 'if', 'next': '*' },
      { 'blankLine': 'always', 'prev': 'for', 'next': '*' },
      { 'blankLine': 'always', 'prev': 'while', 'next': '*' },
      { 'blankLine': 'always', 'prev': 'switch', 'next': '*' },
      { 'blankLine': 'always', 'prev': 'try', 'next': '*' },
      { 'blankLine': 'always', 'prev': '*', 'next': 'return' }
    ],

    // 要求方法链中每个调用都有一个换行符
    'newline-per-chained-call': 'error',

    // 不允许多个空行
    'no-multiple-empty-lines': 'error',

    // 禁止调用 function 时，标识符和括号之间出现空格
    'func-call-spacing': 'error',

    // 强制操作符使用一致的换行符
    'operator-linebreak': ['error', 'after'],

    // 强制使用一致的反勾号、双引号或单引号
    'quotes': ['error', 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],

    // 要求或禁止使用分号而不是 ASI
    'semi': 'error',

    // 强制在块之前使用一致的空格
    'space-before-blocks': 'error',

    // 要求操作符周围有空格
    'space-infix-ops': 'error',

    // 强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': 'error',

    // enforce consistent line breaks inside braces
    // default: { consistent: true }: 要么换行，要么都不换行
    'object-curly-newline': ['error', {
      minProperties: 4,
      multiline: true,
      consistent: true
    }]
  }
};
