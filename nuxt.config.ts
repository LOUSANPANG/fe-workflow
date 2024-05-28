export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: false,

  app: {
    baseURL: '/fe-workflow/',
  },

  modules: [
    '@nuxt/eslint',
    "@nuxt/content",
    "@unocss/nuxt"
  ],

  eslint: {
    config: {
      stylistic: true,
      standalone: false
    },
  },

  routeRules: {
    '/docs': { redirect: '/docs/documentation', prerender: false },
  },

  content: {
    highlight: {
      theme: {
        default: 'github-dark-dimmed',
      },
      langs: [
        'js',
        'ts',
        'vue',
        'css',
        'scss',
        'sass',
        'html',
        'bash',
        'md',
        'mdc',
        'json'
      ]
    }
  },
})
