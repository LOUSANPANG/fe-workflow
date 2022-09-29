<template>
  <div class="box-border flex items-center justify-end w-screen h-20 px-16 bg-white/70">
    <nav class="flex text-slate-600 text-sm">
      <div class="flex items-center space-x-8 my-0">
        <nav v-for="item in navList" :key="item.name">
          <NuxtLink class="hover:text-sky-500" :to="item.path" :target="item.target">{{
            item.name
          }}</NuxtLink>
        </nav>
      </div>

      <div class="flex items-center border-l border-slate-200 ml-6 pl-6">
        <NuxtLink class="block hover:text-slate-500" :to="githubPath" target="_blank">
          <span class="iconfont icon-github-fill !text-lg" />
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
  const navList = useTheHeaderNavList()
  const githubPath = useTheHeaderGithubPath()
</script>
