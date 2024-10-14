export default defineNuxtConfig({
  devtools: { enabled: true },

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

  compatibilityDate: '2024-10-14',
})