import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  experimental: {
    payloadExtraction: false,
  },

  app: {
    baseURL: '/fe-workflow/',
    head: {
      link: [{ rel: 'shortcut icon', href: `/fe-workflow/favicon.ico` }],
      script: [],
    },
  },

  modules: ['@nuxt/content'],

  content: {
    highlight: {
      theme: 'github-dark-dimmed',
      preload: ['bash', 'git-commit', 'vue', 'nginx'],
    },
  },

  css: ['~/assets/css/base.css', '~/assets/css/tailwind.css', '~/assets/iconfont/iconfont.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
