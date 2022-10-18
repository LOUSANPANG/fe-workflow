'use strict'
module.exports = {
  messages: {
    type: '选择你要提交的类型 :',
    scope: '选择一个提交范围（可选）:',
    customScope: '请输入自定义的提交范围 :',
    subject: '填写简短精炼的变更描述 :\n',
    body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
    breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
    footerPrefixsSelect: "选择关联issue前缀（可选）:",
    customFooterPrefixs: "输入自定义issue前缀 :",
    footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
    confirmCommit: '是否提交或修改commit ?',
  },

  types: [
    { value: "feat", name: "feat:     ✨  新增功能", emoji: ":sparkles:" },
    { value: "fix", name: "fix:     🐛  修复 bug", emoji: ":bug:" },
    { value: "docs", name: "docs:     📝  文档变更", emoji: ":memo:" },
    { value: "style", name: "style:     💄  代码格式（不影响功能，例如空格、分号等格式修正）", emoji: ":lipstick:" },
    { value: "refactor", name: "refactor:     ♻️  代码重构（不包括 bug 修复、功能新增）", emoji: ":recycle:" },
    { value: "perf", name: "perf:     ⚡️  性能优化", emoji: ":zap:" },
    { value: "test", name: "test:     ✅  添加、修改测试用例", emoji: ":white_check_mark:" },
    { value: "build", name: "build:     📦️  构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）", emoji: ":package:" },
    { value: "ci", name: "ci:     👷  修改 CI 配置、脚本", emoji: ":construction_worker:" },
    { value: "chore", name: "chore:     🔨  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）", emoji: ":hammer:" },
    { value: "revert", name: "revert:     ⏪️  回滚 commit", emoji: ":rewind:" }
  ],

  scopes: [
    ['view', '页面相关'],
    ['components', '组件相关'],
    ['utils', 'utils 相关'],
    ['styles', '样式相关'],
    ['deps', '项目依赖'],
    ['workflows', '部署相关'],
    ['md', '文档相关'],
    ['other', '其他修改'],
    ['custom', '以上都不是？我要自定义'],
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`,
    }
  }),

  useEmoji: true,
  allowBreakingChanges: ['feat', 'fix'],
  subjectLimit: 100,
  breaklineChar: '|'
}
