<script setup lang="ts">
import type { linkType } from '~/types/navigation'

defineProps<{
  toc: linkType[],
  scrollCurrentHashId: string
}>()

const handleTocLink = (hashLink: string) => {
  // const bashUrl = process.env.NODE_ENV === 'development' ? '' : '/fe-workflow'
  const route = useRoute()
  const hash = useFormatHash(hashLink)
  window.location.href = `${route.path}${hash}`
}
</script>

<template>
  <div class="w-full min-h-full">
    <div
      class="block py-1 leading-6 text-slate-400 text-sm truncate cursor-pointer hover:text-sky-400"
      :class="scrollCurrentHashId === h2Item.text ? '!text-sky-400' : ''"
      v-for="h2Item in toc"
      :key="h2Item.id"
      @click.stop="handleTocLink(h2Item.text)"
    >
      {{ h2Item.text }}

      <div
        class="block pl-3 py-1 leading-6 text-slate-400 text-xs truncate cursor-pointer hover:text-sky-400"
        :class="scrollCurrentHashId === h3Item.text ? '!text-sky-400' : ''"
        v-for="h3Item in h2Item?.children"
        :key="h3Item.id"
        @click.stop="handleTocLink(h3Item.text)"
      >
        {{ h3Item.text }}
      </div>
      
    </div>
  </div>
</template>
