# 贡献指南

## 环境搭建

- 需要安装 [Node.js](http://nodejs.org/) 14.16 or 16.11+，以及 [pnpm](https://pnpm.io/)。
- 克隆仓库到本地后，执行 `pnpm install --shamefully-hoist` 安装开发依赖。



## 开发

### 使用 `markdown-template` 代码片段生成 `markdown` 模版


### 开发规范

- 首行空两个回车
- 二级标题之间空三个回车
- 紧邻二级标题内容空一个回车
- 三级标题之间空两个回车
- 四级标题之间空一个回车


```md
---
title: ''
description: ''


## 二级标题



## 二级标题

### 三级标题


### 三级标题

#### 四级标题

- 内容1
- 内容二
---
```



## 是否通过代码提交规范

- [x] *.vue 校验
- [x] *.{js,jsx,ts,tsx} 校验
- [x] *.md 校验



## 提交 PR

- fork 本仓库，在自己仓库基于 master 分支创建专用分支用于提交更改。
- commit 规范遵循 Vue 仓库 [Git Commit Message Convention](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md)。
- 提交之前确保进行了完善的测试。
- 确保 PR 提交到 master 分支。
- 修复 Bug 请提供详细的描述信息，或链接到对应的 issue。
- 提交新功能请阐明起用途以及提交到主仓库的必要性，最好事先仓库主要成员商议后再进行。
