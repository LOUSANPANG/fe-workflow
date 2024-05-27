<script setup lang="ts">
import '@unocss/reset/tailwind.css'
import '@unocss/reset/tailwind-compat.css'
import '~/assets/style/base.css'

useSetAppHead()

const { data: navigation } = await useLazyAsyncData('navigation', () => fetchContentNavigation(), { default: () => [] })
provide('navigation', navigation)
</script>

<template>
  <div class="font-ubuntu-sans w-screen h-screen">
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
