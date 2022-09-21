<template>
  <div>
    <TheHeader />

    <div class="relative pt-20">
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
