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
        {
          title: 'GitSkills',
          router: '/docs/git-skills',
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
      ],
    },
    {
      title: '便捷开发',
      children: [
        {
          title: 'Env',
          router: '/docs/env',
        },
        {
          title: 'Icon',
          router: '/docs/icon',
        },
      ],
    },
    {
      title: '系统构建',
      children: [
        {
          title: 'Package',
          router: '/docs/package',
        },
        {
          title: 'Webpack',
          router: '/docs/build-webpack',
        },
        {
          title: 'Vite',
          router: '/docs/build-vite',
        },
        {
          title: 'Rollup',
          router: '/docs/build-rollup',
        },
      ],
    },
    {
      title: '性能优化',
      children: [
        {
          title: 'ChromeAnalysis',
          router: '/docs/opt-analysis-chrome',
        },
        {
          title: 'CSS',
          router: '/docs/opt-css',
        },
        {
          title: 'JS',
          router: '/docs/opt-js',
        },
        {
          title: 'Resource',
          router: '/docs/opt-resource',
        },
        {
          title: 'Vue',
          router: '/docs/opt-vue',
        },
        {
          title: 'MiniProgram',
          router: '/docs/opt-mini-program',
        },
        {
          title: 'Webpack',
          router: '/docs/opt-webpack',
        },
        {
          title: 'Vite',
          router: '/docs/opt-vite',
        },
        {
          title: 'Network',
          router: '/docs/opt-network',
        },
      ],
    },
    {
      title: '测试',
      children: [
        {
          title: '端对端测试',
          router: '/docs/test-e2e',
        },
        {
          title: '集成测试',
          router: '/docs/test-integration',
        },
        {
          title: '单元测试',
          router: '/docs/test-unit',
        },
        {
          title: '静态测试',
          router: '/docs/test-static',
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
        {
          title: 'Netlify',
          router: '/docs/netlify',
        },
        {
          title: 'Nginx',
          router: '/docs/nginx',
        },
        {
          title: 'Docker',
          router: '/docs/docker',
        },
        {
          title: 'Jenkins',
          router: '/docs/jenkins',
        },
      ],
    },
    {
      title: '监控分析',
      children: [
        {
          title: '埋点',
          router: '/docs/buried',
        },
        {
          title: '监控',
          router: '/docs/monitor',
        },
        {
          title: '可视化分析',
          router: '/docs/user-traffic',
        },
      ],
    },
  ])
