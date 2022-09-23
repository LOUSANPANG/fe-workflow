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
      router: '/earlyDev/documentation',
    },
  ])

export interface DocsLayoutLeftGuide {
  title: string
  children: [] | Array<DocsLayoutLeftEarlyDev>
}
export const useDocsLayoutLeftGuide = () =>
  useState<Array<DocsLayoutLeftGuide>>('DOCSLAYOUTLEFTGUIDE', () => [
    {
      title: '项目目录规范',
      children: [
        {
          title: '规范目录参考',
          router: '/guide/standardDirectory',
        },
      ],
    },
    {
      title: '编码规范',
      children: [
        {
          title: 'ESlint',
          router: '/guide/standardCode/eslint',
        },
        {
          title: 'Prettier',
          router: '/guide/standardCode/prettier',
        },
        {
          title: 'Stylelint',
          router: '/guide/standardCode/stylelint',
        },
      ],
    },
  ])
