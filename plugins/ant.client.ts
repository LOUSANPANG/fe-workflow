import { defineNuxtPlugin } from '#app'
import Timeline from 'ant-design-vue/lib/timeline'
import 'ant-design-vue/lib/timeline/style/css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Timeline)
})
