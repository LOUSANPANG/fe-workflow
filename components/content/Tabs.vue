<script setup lang="ts">
defineProps<{
  tabs: string[];
}>();

const activeTab = ref<number>(0);
</script>

<template>
  <div class="mb-8 w-full bg-slate-800 rounded-xl shadow-md">
    <div class="w-full flex overflow-x-auto rounded-t-xl bg-slate-700/50 border-y border-slate-500/30">
      <div
        v-for="(item, index) in tabs"
        :key="index"
        class="
          px-4 py-1 pointer cursor-pointer
          text-slate-400 text-xs leading-6
          bg-slate-700/50 border border-r-none border-slate-500/30
          last:border-r border-slate-500/30
          rounded-tl hover:text-sky-300
        "
        :class="index === activeTab ? 'bg-slate-700 text-sky-300 border-b border-b-sky-300' : ''"
        @click="activeTab = index"
      >
        {{ item }}
      </div>
    </div>

    <div class="min-w-full overflow-auto" v-for="(item, index) in tabs" :key="item">
      <slot :name="item" v-if="index === activeTab" />
    </div>
  </div>
</template>
