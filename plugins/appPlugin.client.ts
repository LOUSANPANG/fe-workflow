export default defineNuxtPlugin(() => {
  return {
    provide: {
      AppVersion: () => 'version 0.0.1',
    },
  }
})
