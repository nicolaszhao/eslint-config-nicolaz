# eslint-config-nicolaz-base

## 上手

### 安装

```
npx install-peerdeps --dev eslint-config-nicolaz-base
```

### 配置 `.eslintrc`

```
{
  "extends": "nicolaz-base"
}
```

## 支持实验性的 ES6+ 语法特性检查

### 安装 `babel-eslint`

```shell
npm install --save-dev babel-eslint
```

### `.eslintrc`

```diff
{
  "extends": "nicolaz-base",
+ "parser": "babel-eslint"
}
```

### Vue

如果你安装了 `eslint-plugin-vue` 来检查你的 Vue 项目，你需要修改上面的 `parser` 选项。

因为该插件依赖 `vue-eslint-parser` 来解析 `*.vue ` 文件，如果重写了 `parser` 选项，就会导致该插件无法工作，参见：[eslint-plugin-vue 用户手册](https://eslint.vuejs.org/user-guide/#usage)。

```diff
{
  "extends": [
    "nicolaz-base",
 	  "plugin:vue/recommended"
  ],
- "parser": "babel-eslint",
  "parserOptions": {
+   "parser": "babel-eslint"
  }
}
```

## 混合 TypeScript

1、安装 [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) 插件相关的包：

```
npm i --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

2、配置 `.eslintrc`

```diff
{
  "extends": "nicolaz-base",
+ "overrides": [
+   {
+     "files": ["**/*.ts?(x)"],
+     "extends": ["plugin:@typescript-eslint/recommended"]
+   }
+ ],
}
```

## License

[MIT](https://github.com/nicolaszhao/eslint-config-nicolaz/blob/master/LICENSE) © [nicolaszhao](https://github.com/nicolaszhao)

