export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxt/content',
    '@unocss/nuxt',
  ],
  devtools: { enabled: true },

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
        'json',
      ],
    },
  },

  compatibilityDate: '2024-10-14',

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },

  eslint: {
    config: {
      stylistic: true,
      standalone: false,
    },
  },
})
