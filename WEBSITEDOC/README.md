## Website Documentation


### ESlint、[Prettier](https://prettier.io/docs/en/options.html)

```
yarn add -D eslint

npx eslint --init
```

```
yarn add -D prettier

echo {}> .prettierrc
```

```
<!-- 解决冲突 -->

yarn add -D eslint-plugin-prettier eslint-config-prettier

<!-- .eslintrc.js -->
module.exports = {
  ...
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended' // 添加 prettier 插件
  ],
  ...
}
```


### stylelint

```
yarn add -D stylelint stylelint-config-standard

echo {}> .stylelintrc.json
```

```
<!-- 解决与prettier配置的冲突 -->
yarn add -D stylelint-config-prettier

<!-- .stylelintrc.json -->
{
  "extends": ["stylelint-config-standard", "stylelint-config-prettier"]
}
```


### [husky](https://github.com/typicode/husky)、[lint-staged](https://github.com/okonet/lint-staged)

```
npx husky-init && yarn
```

```
yarn add -D lint-staged

<!-- package.json -->
"lint-staged": {
  "*.{vue,js,ts}": "eslint --fix"
}

<!-- .husky/pre-commit 添加触发命令 -->
npx lint-staged
```


### Commitizen、Commitlint
```
yarn add -D commitizen

<!-- cz-conventional-changelog 适配器来初始化项目 -->
npx commitizen init cz-conventional-changelog --save-dev --save-exact --force

<!-- cz-customizable中文配置 -->
npx commitizen init cz-customizable --save-dev --save-exact --force
```

```
yarn add -D @commitlint/config-conventional @commitlint/cli

echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```


### [EditorConfig](http://editorconfig.org)


### 单元测试



## open source

### [Issues Templates、Pull Requests Templates](https://github.com/stevemao/github-issue-templates)



## 部署

### GitHub Actions

* [GitHub Token](https://github.com/settings/tokens/new)
  - repo、 workflow
  - New repository secret
* /.github/workflows/deploy.yml
