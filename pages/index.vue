<script setup lang="ts">
definePageMeta({
  title: 'Home',
})

const { TITLE_EN } = useAppConfig()

const timelineText = ref([
  '设计响应适配 (桌面 平板 手机)',
  '项目初始化 (搭建脚手架)',
  '目录规范 (文件夹命名 文件命名)',
  '代码质量 (代码规范 提交规范)',
  '代码测试 (单元 集成 端到端)',
  '性能优化 (资源 代码 构建工具)',
  '监控 (埋点 日志 上报)',
  '集成部署 (自动化 服务器)',
  '数据分析 (错误报告 用户数据)',
])
const codeContent = ref([
  ['Responsive Design ', '(desktop laptop tablet)'],
  ['Project Initialization ', '(scaffold)'],
  ['Directory Specification ', '(folder file)'],
  ['Code Quality ', '(code commit)'],
  ['Code Testing ', '(unit integration e2e)'],
  ['Performance Optimization ', '(resource code build)'],
  ['Monitoring ', '(point log report)'],
  ['Integration Deployment ', '(automation server)'],
  ['Data Analysis ', '(error user)'],
])

const timelineContent = ref<string[]>([])
timelineText.value.forEach((item, index) => {
  ;((text, key) => {
    setTimeout(() => {
      timelineContent.value.push(text)
    }, 3000 * key)
  })(item, index)
})
</script>

<template>
  <div class="home box-border w-full h-full pt-6">
    <!-- title -->
    <div class="pc:mb-24 mobile:mb-12 mx-auto max-w-7xl">
      <p class="mb-6 text-slate-900 text-4xl tracking-tight text-center">
        FE Engineering Construction Guide Refspec.
      </p>
      <p class="text-lg text-slate-600 text-center max-w-3xl mx-auto">
        This operation manual including
        <code class="font-mono font-medium text-sky-500">design</code>,
        <code class="font-mono font-medium text-sky-500">cli</code>,
        <code class="font-mono font-medium text-sky-500">specification</code>,
        <code class="font-mono font-medium text-sky-500">testing</code>,
        <code class="font-mono font-medium text-sky-500">optimization</code>,
        <code class="font-mono font-medium text-sky-500">monitoring</code>,
        <code class="font-mono font-medium text-sky-500">deployment</code>,
        <code class="font-mono font-medium text-sky-500">analysis</code>. can be applied to your
        system design.
      </p>
    </div>

    <!-- code -->
    <div class="box-border max-w-7xl mx-auto pc:flex pc:items-center pc:justify-around mobile:px-4 mobile:pb-12">
      <!-- code.timeline -->
      <div class="pc:w-3/8 pc:mb-0 mobile:w-full mobile:mb-6 mobile:mr-0">
        <div class="bg-white ring-1 ring-slate-900/5 rounded-lg shadow-xl px-6 pt-6 h-[28rem]">
          <div class="relative flex items-center mb-8">
            <span class="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-rose-400 opacity-75" />
            <span class="ml-6 text-rose-400">{{ TITLE_EN }}</span>
          </div>
          <div>
            <div
              v-for="(item, index) in timelineContent"
              :key="index"
              class="relative mb-5 flex items-center text-sm text-slate-600"
            >
              <div
                v-if="timelineContent.length !== index + 1"
                class="absolute left-1 top-6 w-px h-2.5 bg-slate-200"
              />
              <div class="mr-3 w-2.5 h-2.5 bg-white rounded-full border-2 border-blue-500" />
              <div class="break-word">
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- code.terminal -->
      <div class="pc:w-4/8 pc:h-[30rem] mobile:w-full mobile:h-[28rem] overflow-auto shadow-xl bg-slate-800 rounded-xl">
        <div class="border-b border-slate-500/30">
          <div class="flex items-center h-8 space-x-1.5 px-3">
            <div v-for="i in 3" :key="i" class="w-2.5 h-2.5 bg-slate-600 rounded-full" />
          </div>
        </div>
        <code class="text-sm text-slate-50 p-4">
          <div
            v-for="(item, index) in codeContent"
            :key="index"
            class="flex pl-4 mb-6 u-code"
            :style="{
              'animation-delay': `${3 * index}s`,
              'width': `${item.join('').length / 2 + 4}rem`,
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
</template>

<style lang="scss" scoped>
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
