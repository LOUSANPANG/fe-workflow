import { defineNuxtConfig } from 'nuxt/config'

const isDev = process.env.npm_lifecycle_event === 'dev'
// const baseURL = isDev ? '' : '/fe-workflow'
const baseURL = ''

export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  experimental: {
    payloadExtraction: false,
  },

  app: {
    baseURL,
    head: {
      link: [{ rel: 'shortcut icon', href: `${baseURL}/favicon.ico` }],
      script: isDev ? [{ src: 'https://cdn.tailwindcss.com' }] : [],
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
