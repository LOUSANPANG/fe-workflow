const isDev = process.env.npm_lifecycle_event === 'dev'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    baseURL: isDev ? '' : '/fe-workflow',
    head: {
      link: [{ rel: 'shortcut icon', href: '/fe-workflow/favicon.ico' }],
      script: [isDev && { src: 'https://cdn.tailwindcss.com' }],
    },
  },

  modules: ['@nuxt/content'],

  css: ['~/assets/css/tailwind.css', '~/assets/iconfont/iconfont.css'],

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
})
