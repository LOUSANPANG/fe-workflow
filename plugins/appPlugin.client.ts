import { defineNuxtPlugin } from '#imports'
export default defineNuxtPlugin(() => {
  // nuxtApp.vueApp.use()
  return {
    provide: {
      AppVersion: () => 'version 0.0.1',
    },
  }
})
