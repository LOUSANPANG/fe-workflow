<template>
  <div>
    <div class="pb-20">
      <!-- earlyDev -->
      <div v-for="item in docsLayoutLeftEarlyDev" :key="item.title">
        <NuxtLink
          :to="item.router"
          class="inline-flex items-center text-sm leading-6 mb-4 font-medium text-slate-700 hover:text-sky-500 hover:shadow-sm"
          activeClass="text-sky-500"
        >
          <span
            class="mr-4 p-[2px] !text-xl !leading-4 rounded ring-1 ring-slate-900/5 shadow-md"
            :class="item.icon"
          />
          {{ item.title }}
        </NuxtLink>
      </div>

      <!-- guide -->
      <div class="mt-8" v-for="item in docsLayoutLeftGuide" :key="item.title">
        <h5 class="mb-3 font-medium text-slate-900">{{ item.title }}</h5>
        <div class="space-y-2 border-l border-slate-100">
          <p v-for="val in item.children" :key="val.title">
            <NuxtLink
              :to="val.router"
              class="block border-l pl-4 -ml-px border-slate-200 text-slate-500 hover:border-slate-400 hover:text-slate-900"
              activeClass="!text-sky-500 border-sky-500"
              >{{ val.title }}</NuxtLink
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { DocsLayoutLeftEarlyDev, DocsLayoutLeftGuide } from '~/composables/useDocsInfo'

  const docsLayoutLeftEarlyDev: Array<DocsLayoutLeftEarlyDev> = unref(useDocsLayoutLeftEarlyDev())
  const docsLayoutLeftGuide: Array<DocsLayoutLeftGuide> = unref(useDocsLayoutLeftGuide())
  console.info(docsLayoutLeftEarlyDev)
  console.info(docsLayoutLeftGuide)
</script>
