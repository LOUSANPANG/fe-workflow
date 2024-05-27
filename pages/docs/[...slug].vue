<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

// success route
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

// aside
const navigation = inject<Ref<NavItem[]>>('navigation')
const { asideEarlyDev, asideGuide } = useOrganizeAside(navigation as Ref<NavItem[]>)
// toc
const toc = page.value?.body?.toc && useToc(page.value.body.toc)
// title
const pageTitle = page.value.title || asideEarlyDev[0].title

// watch content scroll -> update toc
const refContent = ref<HTMLElement | null>(null)
const scrollCurrentHashId = ref<string>('')
onMounted(() => {
  if (refContent.value) {
    // get headings rect top
    let headingsRectTop: {hashId: string; top: number}[] = []
    const headings = refContent.value.querySelectorAll('h2, h3')
    headings.forEach(el => {
      const rectTop = el.getBoundingClientRect().top
      headingsRectTop.push({ hashId: el.textContent as string, top: rectTop })
    })
    // scroll event
    let timer: ReturnType<typeof setTimeout>
    refContent.value.addEventListener('scroll', () => {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        if (!refContent.value) return
        const scrollTop = refContent.value.scrollTop
        const currentHeadingIndex = headingsRectTop.findLastIndex(h => h.top <= scrollTop )
        const currentHeadingHashId = headingsRectTop[currentHeadingIndex > 0 ? currentHeadingIndex : 0].hashId
        scrollCurrentHashId.value = currentHeadingHashId
      }, 300)
    })
  }
})

// remove scroll event
onBeforeUnmount(() => {
  if (refContent.value) {
    refContent.value.removeEventListener('scroll', () => {})
  }
})
</script>

<template>
  <div class="docs overflow-hidden box-border flex w-full h-full mx-auto pt-8 px-12">
    <!-- aside -->
    <div class="box-border overflow-y-auto pr-12 h-full pc:w-20% pc:block mobile:hidden">
      <NavigationAside :asideEarlyDev="asideEarlyDev" :asideGuide="asideGuide" :title="pageTitle" />
    </div>

    <!-- content -->
    <div ref="refContent" class="box-border overflow-y-auto h-full pc:w-63% mobile:w-full" :class="toc?.length ? '' : '!pc:w-80%'">
      <ContentDoc />
    </div>

    <!-- toc -->
    <div v-if="toc?.length" class="box-border overflow-y-auto pl-12 h-full pc:w-17% pc:block mobile:hidden">
      <NavigationToc :toc="toc" :scrollCurrentHashId="scrollCurrentHashId" />
    </div>
  </div>
</template>
