# eslint-config-nz
NZ 的 Eslint 共享配置


## 如何使用

### 安装

#### npm 5+

```
npx install-peerdeps --dev eslint-config-nz
```

#### npm < 5

```
npm install -g install-peerdeps
install-peerdeps --dev eslint-config-nz
```

### 配置

创建并配置 `.eslintrc` 文件：

```
{
  "extends": "nz"
}
```

## 如何支持实验性的 ECMA 语法特性检查

1. 安装 `babel-eslint` 解析器：

   ```shell
   npm install --save-dev babel-eslint
   ```

2. 更改 Eslint 的默认解析器为 `babel-eslint`，在 `.eslintrc.json` 文件中增加配置项：

   ```diff
   {
     "extends": "nz",
   + "parser": "babel-eslint"
   }
   ```

   ​