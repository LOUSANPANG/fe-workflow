// import { defineNuxtPlugin } from '#app'
export default defineNuxtPlugin(() => {
  // nuxtApp.vueApp.use()
  return {
    provide: {
      AppVersion: () => 'version 0.0.1',
    },
  }
})
