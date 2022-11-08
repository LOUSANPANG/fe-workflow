---
title: 'Changelog'
description: 'Changelog配置使用指南'
---

# 自动生成 Changelog

::alert{type="output"} 

根据项目的 commit 和 metadata 信息自动生成 changelogs 和 release notes 的系列工具，并且在辅助 standard-version 工具的情况下，可以自动帮你完成生成 version、打 tag, 生成 CHANGELOG 等系列过程。 

::

## 安装

```bash
pnpm add standard-version -D
```

## standard-version 版本命令更新

```json
// --release-as === -r 指定版本号
standard-version -r major -n  // 更新主版本 1.0.0 -> 2.0.0
standard-version -r minor -n // 更新次版本 1.0.0 -> 1.1.0
standard-version -r patch -n // 更新修订版 1.0.0 -> 1.0.1
standard-version -r 2.0.0-test // 自定义修改版本

// --prerelease === -p 预发版本命名
standard-version -p alpha -n // 更新alpha 1.0.0 -> 1.0.0-alpha.0 【再次执行 -alpha.0 -> -alpha.1】
standard-version -p beta -n // 更新beta 1.0.0 -> 1.0.0-beta.0
standard-version -p rc -n // 更新rc 1.0.0 -> 1.0.0-rc.0

// --tag-prefix === -t 版本 tag 前缀
standard-version --tag-prefix "stable-" // 1.0.0 -> stable-v1.0.0

// 查看更多命令
standard-version --help
```

## 配置 package.json

```json
"scirpt": {
    "release": "standard-version", // 默认 更新patch
    "release:major": "standard-version -r major -n",
    "release:minor": "standard-version -r minor -n",
    "release:patch": "standard-version -r patch -n",
    "prerelease:alpha": "standard-version -p alpha -n",
    "prerelease:beta": "standard-version -p beta -n",
    "prerelease:rc": "standard-version -p rc -n"
}
```

## git tag help

```bash
# 列出所有 tag
git tag

# 添加 tag
git tag -a stable-v1.0.0 -m 'xx功能需求稳定版本1.0.0'

# 删除某个标签
git tag -d <tag_name>

# 显示标签对应提交记录的具体信息
git show <tag_name>

# 推送某个标签到远程仓库
git push <remote> <tag_name>

# 删除远程仓库中的某个标签
git push <remote> --delete <tag_name>
```

## 语义化版本 semver

[语义化版本 semver](https://semver.org/){.doclink}

#### 语义版本控制规范

```bash
Example: 1.0.0 < 2.0.0 < 2.1.0 < 2.1.1.

Example: 1.0.0-alpha < 1.0.0.

Example: 1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0.
```
