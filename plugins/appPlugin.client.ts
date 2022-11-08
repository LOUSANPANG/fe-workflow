import { defineNuxtPlugin } from '#imports'
export default defineNuxtPlugin(() => {
  // nuxtApp.vueApp.use()
  return {
    provide: {
      AppVersion: () => 'version 1.0.0',
    },
  }
})
