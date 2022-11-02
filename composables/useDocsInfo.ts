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
      title: 'Tools',
      icon: 'iconfont icon-179',
      router: '/docs/tools',
    },
    {
      title: 'Design',
      icon: 'iconfont icon-zhaopian',
      router: '/docs/design',
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
          title: 'EditorConfig',
          router: '/docs/editorconfig',
        },
        {
          title: 'TSConfig',
          router: '/docs/tsconfig',
        },
        {
          title: 'Browserslist',
          router: '/docs/browserslist',
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
          title: 'Changelog',
          router: '/docs/changelog',
        },
      ],
    },
    {
      title: '开发规范',
      children: [
        {
          title: 'Var',
          router: '/docs/var',
        },
        {
          title: 'Notes',
          router: '/docs/notes',
        },
        {
          title: 'Mock',
          router: '/docs/mock',
        },
        {
          title: 'Request',
          router: '/docs/request',
        },
        {
          title: 'Store',
          router: '/docs/store',
        },
        {
          title: 'Router',
          router: '/docs/router',
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
    {
      title: '开源规范',
      children: [
        {
          title: 'Github',
          router: '/docs/github',
        },
        {
          title: 'Package',
          router: '/docs/package',
        },
      ],
    },
  ])
