import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/fe-workflow' : '',
  },

  modules: ['@nuxt/content'],

  content: {
    // https://content.nuxtjs.org/api/configuration
  },

  typescript: {
    shim: false,
  },
})
