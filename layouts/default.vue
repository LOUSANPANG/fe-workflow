<template>
  <div class="m-layout">
    <div class="fixed z-1 left-0 top-0">
      <TheHeader />
    </div>

    <div class="pt-20">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  const websiteName: string = unref(useWebsiteName())
  const websiteContent: string = unref(useWebsiteContent())

  useHead({
    title: websiteName,
    meta: [
      {
        name: websiteName,
        content: websiteContent,
      },
    ],
  })
</script>
