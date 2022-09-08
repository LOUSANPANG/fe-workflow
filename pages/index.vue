<template>
  <div class="relative">
    <nav class="w-screen px-16 fixed left-0 top-6 flex justify-end text-slate-600 text-sm">
      <ul class="flex items-center space-x-8">
        <li v-for="item in navList" :key="item.title">
          <a class="hover:text-sky-500" :href="item.href">{{ item.title }}</a>
        </li>
      </ul>

      <div class="flex items-center border-l border-slate-200 ml-6 pl-6">
        <a class="block hover:text-slate-500" :href="githubUrl">
          <i class="iconfont icon-github-fill !text-lg" />
        </a>
      </div>
    </nav>
    <!-- <div class="absolute inset-0 bottom-10 bg-bottom bg-no-repeat bg-slate-50 beams"> </div> -->
  </div>
</template>

<script setup lang="ts">
  const navList = [
    { title: 'Docs', href: '' },
    { title: 'Blog', href: 'https://lousanpang.github.io/' },
  ]
  const githubUrl = 'https://github.com/LOUSANPANG/fe-workflow'
</script>

<style>
  .beams {
    background-image: url('~/assets/img/beam/hero@75.jpg');
    background-size: 150rem;
  }
</style>
