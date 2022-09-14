<template>
  <div class="relative pt-24">
    <div class="beams bg-no-repeat">
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

      <div class="max-w-7xl mx-auto px-4 pb-24 lg:flex lg:items-center">
        <!-- step -->
        <div class="lg:3/8 lg:mr-6 w-full mb-6 lg:mb-0">
          <div
            class="lg:h-[25rem] h-[28rem] bg-white ring-1 ring-slate-900/5 rounded-lg shadow-xl px-6 pt-6"
          >
            <div class="relative flex items-center mb-8">
              <span
                class="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-rose-400 opacity-75"
              ></span>
              <span class="ml-6 text-rose-400">前端工程化搭建指南</span>
            </div>
            <a-timeline>
              <a-timeline-item
                class="text-slate-600"
                v-for="(item, index) in timelineContent"
                :key="index"
                >{{ item }}</a-timeline-item
              >
            </a-timeline>
          </div>
        </div>
        <!-- terminal -->
        <div
          class="lg:4/8 w-full lg:h-[30rem] h-[28rem] overflow-auto shadow-xl bg-slate-800 rounded-xl"
        >
          <div class="border-b border-slate-500/30">
            <div class="flex items-center h-8 space-x-1.5 px-3">
              <div v-for="i in 3" :key="i" class="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
            </div>
          </div>
          <code class="text-sm text-slate-50 p-4">
            <div
              v-for="(item, index) in codeContent"
              :key="index"
              class="flex pl-4 mb-6 u-code"
              :style="{
                'animation-delay': `${3 * index}s`,
                width: `${item.join('').length / 2 + 4}rem`,
              }"
            >
              <div class="text-slate-600 pr-4">{{ index + 1 }}</div>
              <div class="text-slate-50">
                <span>{{ item[0] }}</span>
                <span class="text-sky-300">{{ item[1] }}</span>
              </div>
            </div>
          </code>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const timelineText = [
    '初始化项目脚手架（create init myApp）',
    '规范项目目录（component pages store router static ...）',
    '编码规范（eslint prettier stylelint commitlint vscode.setting）',
    '集成测试（jest vitest）',
    '性能优化（vite webpack rollup）',
    '部署（Docker CI Action）',
    '数据分析（数据分析 错误上报）',
  ]
  const timelineContent = ref([])

  const codeContent = [
    ['Create init my-app ', '(react vue uniapp package)'],
    ['Specification project directory ', '(components view store router)'],
    ['Code development specification ', '(codelint commitlint)'],
    ['Integration testing ', '(jest vitest)'],
    ['Performance optimization ', '(vite webpack rollup)'],
    ['Deploy ', '(Docker CI Git Action)'],
    ['Log analysis ', '(DataAnalysis BugReport)'],
  ]

  onMounted(() => {
    timelineText.forEach((item, index) => {
      ;((item, index) => {
        setTimeout(() => {
          timelineContent.value.push(item)
        }, 3000 * index)
      })(item, index)
    })
  })
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
