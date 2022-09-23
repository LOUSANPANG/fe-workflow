<template>
  <div>
    <ul>
      <!-- earlyDev -->
      <li v-for="item in docsLayoutLeftEarlyDev" :key="item.title">
        <a
          :href="item.router"
          class="inline-flex items-center text-sm leading-6 mb-4 font-medium text-slate-700 hover:text-sky-500 hover:shadow-sm"
        >
          <span
            class="mr-4 p-[2px] !text-xl !leading-4 rounded ring-1 ring-slate-900/5 shadow-md"
            :class="item.icon"
          />
          {{ item.title }}
        </a>
      </li>

      <!-- guide -->
      <li class="mt-8" v-for="item in docsLayoutLeftGuide" :key="item.title">
        <h5 class="mb-3 font-medium text-slate-900">{{ item.title }}</h5>
        <ul class="space-y-2 border-l border-slate-100">
          <li v-for="val in item.children" :key="val.title">
            <a
              :href="val.router"
              class="block border-l pl-4 -ml-px border-transparent text-slate-500 hover:border-slate-400 hover:text-slate-900"
              >{{ val.title }}</a
            >
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { DocsLayoutLeftEarlyDev, DocsLayoutLeftGuide } from '~/composables/useDocsInfo'

  const docsLayoutLeftEarlyDev: Array<DocsLayoutLeftEarlyDev> = unref(useDocsLayoutLeftEarlyDev())
  const docsLayoutLeftGuide: Array<DocsLayoutLeftGuide> = unref(useDocsLayoutLeftGuide())
</script>
