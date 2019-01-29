# eslint-config-nz
NZ 的 Eslint 共享配置


## 如何使用

1. 安装 eslint 以及 eslint 相关插件：

    ```shell
    npm install --save-dev eslint@^5.x eslint-plugin-import@^2.x eslint-plugin-react@^7.x eslint-plugin-jsx-a11y@^6.x
    ```

2. 安装该配置器：

    ```shell
    npm install --save-dev eslint-config-nz
    ```

3. 添加配置文件 `.eslintrc.json` 到项目根目录：

    ```json
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