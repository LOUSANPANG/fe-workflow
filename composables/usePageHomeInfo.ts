export const usePageHomeTimeline = () =>
  useState<Array<string>>('PAGEHOMETIMELINE', () => [
    '初始化项目脚手架（create init myApp）',
    '项目目录规范（component pages store router static ...）',
    '编码规范（eslint prettier stylelint commitlint vscode.setting）',
    '集成测试（jest vitest）',
    '性能优化（vite webpack rollup）',
    '部署（Docker CI Action）',
    '数据分析（数据分析 错误上报）',
  ])

export const usePageHomeCode = () =>
  useState<Array<Array<string>>>('PAGEHOMECODE', () => [
    ['Create init my-app ', '(react vue uniapp package)'],
    ['Specification project directory ', '(components view store router)'],
    ['Code development specification ', '(codelint commitlint)'],
    ['Integration testing ', '(jest vitest)'],
    ['Performance optimization ', '(vite webpack rollup)'],
    ['Deploy ', '(Docker CI Git Action)'],
    ['Log analysis ', '(DataAnalysis BugReport)'],
  ])
