import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: [
        {
          include: 'docs/**',
          prefix: '/docs',
          // v2 忽略点开头的隐藏文件，v3 (dot:true) 默认包含，排除以保持一致
          exclude: ['**/.*.md'],
        },
        {
          include: 'concept/**',
          prefix: '/concept',
          exclude: ['**/.*.md'],
        },
      ],
    }),
  },
})
