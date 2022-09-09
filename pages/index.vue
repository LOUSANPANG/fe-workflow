<template>
  <div class="relative pt-24">
    <div class="beams bg-no-repeat">
      <!-- introduce -->
      <div class="max-w-5xl mx-auto mb-24">
        <h1 class="pt-8 text-slate-900 text-4xl tracking-tight text-center">
          FE Engineering Construction Guide Refspec.
        </h1>
        <p class="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto">
          This operation manual including
          <code class="font-mono font-medium text-sky-500">cli install</code>,
          <code class="font-mono font-medium text-sky-500">specification</code>,
          <code class="font-mono font-medium text-sky-500">testing</code>,
          <code class="font-mono font-medium text-sky-500">optimization</code>,
          <code class="font-mono font-medium text-sky-500">deploy</code>. can be applied to your
          system design.
        </p>
      </div>

      <!-- demo -->
      <div class="max-w-7xl mx-auto px-4 lg:grid lg:grid-cols-12 lg:gap-8 pb-24">
        <!-- step -->
        <div class="lg:col-span-5 xl:col-span-6">
          <div class="bg-white ring-1 ring-slate-900/5 rounded-lg shadow-xl px-6 py-5 my-auto">
          </div>
        </div>
        <!-- terminal -->
        <div class="lg:col-span-7 xl:col-span-6 h-[30rem] shadow-xl bg-slate-800 rounded-xl">
          <div class="border-b border-slate-500/30">
            <div class="flex items-center h-8 space-x-1.5 px-3">
              <div v-for="i in 3" :key="i" class="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
            </div>
          </div>
          <code class="overflow-auto text-sm text-slate-50 p-4">
            <div
              v-for="(item, index) in codeContent"
              :key="index"
              :class="['flex', 'pl-4', 'mb-6', 'u-code', `w-[${item.length / 2 + 4}rem]`]"
              :style="{ 'animation-delay': `${3 * index}s` }"
            >
              <div class="text-slate-600 pr-4">{{ index + 1 }}</div>
              <div class="text-slate-50">{{ item }}</div>
            </div>
          </code>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const codeContent = [
    'Create init my-app (react vue uniapp package)',
    'Specification project directory (codelint commitlint)',
    'Code development specification (components view store router)',
    'Integration testing (jest vitest)',
    'Performance optimization (vite webpack rollup)',
    'Deploy (Docker CI Git Action)',
    'Log analysis (DataAnalysis BugReport)',
  ]
</script>

<style>
  .beams {
    background-image: url('~/assets/img/beam/hero@75.jpg');
    background-size: 120rem;
    background-position: 0 3rem;
  }

  .u-code {
    border-right: 0.15em solid rgb(248 250 252);
    animation: typeing 3s steps(30, end);
    animation-fill-mode: forwards;
    overflow: hidden;
    opacity: 0;
    white-space: nowrap;
  }

  @keyframes typeing {
    0% {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    99.9% {
      border-right: 0.15em solid rgb(248 250 252);
    }
    100% {
      opacity: 1;
      border: none;
    }
  }
</style>
