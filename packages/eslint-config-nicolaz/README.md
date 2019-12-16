# eslint-config-nicolaz

## 上手

### 安装

```
npx install-peerdeps --dev eslint-config-nicolaz
```

### 配置 `.eslintrc`

```
{
  "extends": "nicolaz"
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
  "extends": "nicolaz",
+ "parser": "babel-eslint"
}
```

## License

[MIT](https://github.com/nicolaszhao/eslint-config-nicolaz/blob/master/LICENSE) © [nicolaszhao](https://github.com/nicolaszhao)
