import { defineNuxtConfig } from 'nuxt'

const isDev = process.env.npm_lifecycle_event === 'dev'
const isPro = process.env.NODE_ENV === 'production'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    baseURL: isPro ? '/fe-workflow' : '',
    head: {
      link: [{ rel: 'shortcut icon', href: '/favicon.ico' }],
      script: [isDev && { src: 'https://cdn.tailwindcss.com' }],
    },
  },

  modules: ['@nuxt/content'],

  css: ['~/assets/css/tailwind.css', '~/assets/css/iconfont.css'],

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  typescript: {
    shim: false,
  },
})
