<template>
  <div class="docs">
    <div class="fixed z-1 left-0 top-0">
      <TheHeader />
    </div>

    <div class="w-full h-screen lg:px-16 border-t">
      <div class="w-full h-full flex box-border pt-28 lg:pl-16 lg:pr-10">
        <!-- left layout -->
        <div class="overflow-auto left-layout w-[17rem] h-full">
          <DocsLayoutLeft />
        </div>

        <!-- right layout -->
        <div class="overflow-auto right-layout pl-4 pb-10 w-[calc(100%-17rem)] h-full">
          <NuxtPage />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: false,
  })

  const route = useRoute()
  watchEffect(() => {
    if (process.client && route.path) {
      const docsContainer: HTMLDivElement | null = document.querySelector('.right-layout')
      docsContainer && docsContainer.scrollTo(0, 0)
    }
  })
</script>

<style scoped>
  .docs {
    background-image: url('~/assets/img/beam/docs@70.png');
    background-size: 70rem;
    background-position: 30rem 0rem;
    background-repeat: no-repeat;
  }
</style>
