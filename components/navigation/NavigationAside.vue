<script setup lang="ts">
import type { RouteType } from '~/types/navigation'
import asideDocumentImg from '~/assets/img/aside/document.png'
import asideDesignImg from '~/assets/img/aside/design.png'

const props = defineProps<{
  title: string,
  asideEarlyDev: RouteType[]
  asideGuide: RouteType[]
}>()

const selectAside = ref<string>(props.title)
const emit = defineEmits(['clickAside'])
const handleClickAside = (title: string) => {
  selectAside.value = title
  emit('clickAside', title)
}
</script>

<template>
  <div class="w-full min-h-full">
    <!-- early dev -->
    <div class="aside_early mb-12">
      <NuxtLink
        class="group flex item-center mb-4 last:mb-0"
        activeClass="text-sky-500"
        v-for="(item, index) in asideEarlyDev"
        :key="index"
        :to="item._path"
        @click="handleClickAside(item.title)"
      >
        <img
          class="box-border w-6 h-6 mr-3 rounded ring-1 ring-slate-900/5 shadow group-hover:shadow-md group-hover:ring-slate-900/10"
          :class="selectAside === item.title ? '!shadow-md !ring-slate-900/10' : ''"
          :src="item.title === 'Documentation' ? asideDocumentImg : asideDesignImg"
        >
        <div
          class="text-sm font-bold text-slate-900 group-hover:text-sky-500"
          :class="selectAside === item.title ? '!text-sky-500' : ''"
        >{{ item.title }}</div>
      </NuxtLink>
    </div>

    <!-- guide -->
    <div class="aside_guide mb-8 last:mb-0" v-for="item in asideGuide" :key="item._path">
      <div class="mb-3 text-sm font-medium text-slate-700">{{ item.title }}</div>
      <div class="border-l border-slate-200">
        <NuxtLink
          class="block group mb-2.5 last:mb-2.5 pl-3 border-l border-transparent hover:border-sky-500 text-sm text-slate-500 hover:text-sky-500"
          :class="selectAside === navItem.title ? '!text-sky-500 !border-sky-500' : ''"
          v-for="navItem in item.children"
          :key="navItem._path"
          :to="navItem._path"
          @click="handleClickAside(navItem.title)"
        >{{ navItem.title }}</NuxtLink>
      </div>
    </div>
  </div>
</template>
