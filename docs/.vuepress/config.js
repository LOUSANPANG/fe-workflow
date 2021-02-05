module.exports = {
  title: '前端工作流',
  description: '项目规范',
  head: [
    ['link', { rel: 'icon', href: '/home.png' }]
  ],
  port: 3000,
  base: '/fe-workflow/',

  markdown: {
    lineNumbers: true
  },

  themeConfig: {
    logo: '/home.png',
    displayAllHeaders: true,
    smoothScroll: true,

    repo: 'LOUSANPANG/fe-workflow',
    docsRepo: 'LOUSANPANG/fe-workflow',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    lastUpdated: 'Last Updated',

    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      {
        text: '项目设计',
        items: [
          {
            text: 'Vue',
            items: [
              { text: '文件目录', link: '/guide/project-design/vue/file-directory' },
              { text: '开发规范', link: '/guide/project-design/vue/dev-standard' },
            ]
          },
          {
            text: 'Taro',
            items: [
              { text: '文件目录', link: '/guide/project-design/taro/file-directory' },
              { text: '开发规范', link: '/guide/project-design/taro/dev-standard' },
            ]
          }
        ]
      },
      {
        text: '工程化',
        items: [
          { text: '集成', link: '/guide/engineering/git' },
          { text: '部署', link: '/guide/engineering/ci' },
          { 
            text: 'Vue',
            items: [
              { text: '打包', link: '/guide/engineering/vue/build' },
              { text: '测试', link: '/guide/engineering/vue/test' },
              { text: '性能优化', link: '/guide/engineering/vue/optimization' }
            ]
          },
          { 
            text: 'Taro',
            items: [
              { text: '打包', link: '/guide/engineering/taro/build' },
              { text: '测试', link: '/guide/engineering/taro/test' },
              { text: '性能优化', link: '/guide/engineering/taro/optimization' }
            ]
          },
        ]
      },
      {
        text: '相关依赖包',
        items: [
          {
            text: 'Vue',
            link: '/guide/related-packages/vue/'
          },
          {
            text: 'Taro',
            link: '/guide/related-packages/taro/'
          }
        ]
      },
    ],

    // 侧边栏
    sidebar: {
      '/guide/related-packages/vue/': [{
        title: 'Vue',
        path:'/guide/related-packages/vue/',
				children: [
					{ title: '开发前', path:'/guide/related-packages/vue/before-dev' },
					{ title: '开发', path:'/guide/related-packages/vue/dev' },
					{ title: '开发后', path:'/guide/related-packages/vue/after-dev' }
				]
      }],
      '/guide/related-packages/taro/': [{
        title: 'Taro',
        path:'/guide/related-packages/taro/',
				children: [
					{ title: '开发前', path:'/guide/related-packages/taro/before-dev' },
					{ title: '开发', path:'/guide/related-packages/taro/dev' },
					{ title: '开发后', path:'/guide/related-packages/taro/after-dev' }
				]
			}],
    }
  }
}