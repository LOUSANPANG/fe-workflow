<template>
  <div class="w-screen px-16 py-6 fixed z-10 left-0 top-0 bg-white/[.9]">
    <nav class="flex justify-end text-slate-600 text-sm">
      <ul class="flex items-center space-x-8 my-0">
        <li v-for="item in navList" :key="item.name">
          <NuxtLink class="hover:text-sky-500" :to="item.path" :target="item.target">{{
            item.name
          }}</NuxtLink>
        </li>
      </ul>

      <div class="flex items-center border-l border-slate-200 ml-6 pl-6">
        <NuxtLink class="block hover:text-slate-500" :to="githubPath" target="_blank">
          <i class="iconfont icon-github-fill !text-lg" />
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
  const navList = useTheHeaderNavList()
  const githubPath = useTheHeaderGithubPath()
</script>
