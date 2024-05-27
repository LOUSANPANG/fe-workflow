<script setup lang="ts">
const route = useRoute()
const isHome = ref(true)
const routeParamsSlug = ref(['Getting Started'])
watchEffect(() => {
  if (route.path === '/')
    isHome.value = true
  else
    isHome.value = false

  if (Array.isArray(route.params.slug) && route.params.slug.length > 0)
    routeParamsSlug.value = route.params.slug
})
</script>

<template>
  <div class="flex flex-col w-screen h-screen" :class="isHome ? '' : 'bg-docs'">
    <AppHeader class="flex-none" :is-home="isHome" :route-params-slug="routeParamsSlug" />

    <div class="grow" :class="isHome ? 'bg-slate-50/90 bg-home' : 'overflow-hidden'">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .bg-home {
    background-image: url('~/assets/img/beam/home_bg.jpg');
    background-size: 100rem;
    background-position: 0 1rem;
    background-repeat: no-repeat;
  }
  .bg-docs {
    background-image: url('~/assets/img/beam/docs_bg.png');
    background-size: 70rem;
    background-position: 30rem 0rem;
    background-repeat: no-repeat;
  }
</style>
