export interface DocsLayoutLeftEarlyDev {
  title: string
  icon?: string
  router: string
}

export const useDocsLayoutLeftEarlyDev = () =>
  useState<Array<DocsLayoutLeftEarlyDev>>('DOCSLAYOUTLEFTEARLY', () => [
    {
      title: 'Documentation',
      icon: 'iconfont icon-ziliao',
      router: '/docs/documentation',
    },
    {
      title: 'Design',
      icon: 'iconfont icon-zhaopian',
      router: '/docs/design',
    },
    {
      title: 'Tools',
      icon: 'iconfont icon-179',
      router: '/docs/tools',
    },
  ])

export interface DocsLayoutLeftGuide {
  title: string
  children: [] | Array<DocsLayoutLeftEarlyDev>
}
export const useDocsLayoutLeftGuide = () =>
  useState<Array<DocsLayoutLeftGuide>>('DOCSLAYOUTLEFTGUIDE', () => [
    {
      title: '目录规范',
      children: [
        {
          title: 'Directory',
          router: '/docs/standard-directory',
        },
      ],
    },
    {
      title: '编码规范',
      children: [
        {
          title: 'ESlint',
          router: '/docs/eslint',
        },
        {
          title: 'Prettier',
          router: '/docs/prettier',
        },
        {
          title: 'Stylelint',
          router: '/docs/stylelint',
        },
        {
          title: '.Vscode',
          router: '/docs/vscode',
        },
        {
          title: 'TsConfig',
          router: '/docs/tsconfig',
        },
      ],
    },
    {
      title: '提交规范',
      children: [
        {
          title: 'Husky & LintStaged',
          router: '/docs/husky-lintstaged',
        },
        {
          title: 'Commitizen & Commitlint',
          router: '/docs/commitizen-commitlint',
        },
        {
          title: 'Changelog & Gitmoji',
          router: '/docs/changelog-gitmoji',
        },
      ],
    },
    {
      title: '开源规范',
      children: [
        {
          title: '.Github',
          router: '/docs/github',
        },
        {
          title: 'Package',
          router: '/docs/package',
        },
      ],
    },
    {
      title: '开发规范',
      children: [
        {
          title: 'Var & Param',
          router: '/docs/var-param',
        },
        {
          title: 'Notes',
          router: '/docs/notes',
        },
        {
          title: 'Test',
          router: '/docs/test',
        },
      ],
    },
    {
      title: '性能优化',
      children: [
        {
          title: 'Analysis',
          router: '/docs/analysis',
        },
        {
          title: 'Code',
          router: '/docs/code',
        },
        {
          title: 'Resource',
          router: '/docs/resource',
        },
        {
          title: 'Webpack',
          router: '/docs/webpack',
        },
        {
          title: 'Vite',
          router: '/docs/vite',
        },
        {
          title: 'Network',
          router: '/docs/network',
        },
      ],
    },
    {
      title: '项目部署',
      children: [
        {
          title: 'Gitlab',
          router: '/docs/gitlab',
        },
        {
          title: 'GitHubActions',
          router: '/docs/github-action',
        },
      ],
    },
    {
      title: '数据分析',
      children: [
        {
          title: 'ErrorLog',
          router: '/docs/errorlog',
        },
        {
          title: 'UserTraffic',
          router: '/docs/user-traffic',
        },
      ],
    },
  ])