<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const props = defineProps<{
  isHome: boolean,
  routeParamsSlug: string[],
}>()

const { TITLE_EN } = useAppConfig()
const { repoGitHub, headerLinks } = useHeaderInfo()

function goHome() {
  return clearError({ redirect: '/' })
}

const showMobileNavHeader = ref < Boolean > (false)
function handleMobileNavHeader() {
  showMobileNavHeader.value = !showMobileNavHeader.value
}

// aside
const navigation = inject<Ref<NavItem[]>>('navigation')
const { asideEarlyDev, asideGuide } = useOrganizeAside(navigation as Ref<NavItem[]>)
const pageTitle = ref < string > (props.routeParamsSlug[props.routeParamsSlug.length - 1])
const showMobileNavAside = ref < Boolean > (false)
function handleMobileNavAside() {
  showMobileNavAside.value = !showMobileNavAside.value
}
function handleClickAside(title: string) {
  pageTitle.value = title
  showMobileNavAside.value = false
}
</script>

<template>
  <div
    class="app-header sticky top-0 left-0 z-100 box-border w-full px-12 border-slate-900/10 backdrop-blur-sm"
    :class="isHome ? 'bg-slate-50/90' : 'bg-white/70 border-b'"
  >

    <!-- header navigation -->
    <div
      class="flex items-center justify-between box-content py-4 w-full h-7 pc:border-transparent mobile:border-slate-900/10"
      :class="isHome ? '' : 'mobile:border-b'"
    >
      <!-- logo -->
      <div class="flex items-center justify-between  cursor-pointer" @click="goHome">
        <img class="mr-3 w-8 h-8" src="/logo.png">
        <div class="text-xl text-slate-900 font-bold">{{ TITLE_EN }}</div>
      </div>

      <!-- navigation -->
      <div>
        <!-- pc -->
        <div class="pc:flex mobile:hidden items-center">
          <nav>
            <NuxtLink
              class="mr-6 text-sm font-semibold text-slate-700 hover:text-hover"
              v-for="link in headerLinks"
              :key="link.text"
              :to="link.link"
              :target="link.target"
            >{{ link.text }}</NuxtLink>
          </nav>
          <div class="flex items-center pl-6 border-l border-slate-200">
            <NuxtLink :to="repoGitHub.link" :target="repoGitHub.target">
              <div class="opacity-40 hover:opacity-100 w-5 h-5 i-carbon-logo-github" />
            </NuxtLink>
          </div>
        </div>
        <!-- mobile -->
        <div class="mobile:block pc:hidden">
          <div class="i-carbon-overflow-menu-vertical w-7 h-7 font-bold cursor-pointer opacity-60 hover:opacity-100" @click="handleMobileNavHeader" />
          <Teleport to="body">
            <div v-if="showMobileNavHeader" class="fixed z-200 inset-0">
              <div class="fixed inset-0 w-screen h-screen bg-black/20 backdrop-blur-sm" @click.stop="handleMobileNavHeader" />
              <div class="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-700">
                <div class="i-carbon-close absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 cursor-pointer hover:text-sky-500" @click.stop="handleMobileNavHeader" />
                <div class="space-y-6">
                  <NuxtLink
                    class="block hover:text-sky-500"
                    v-for="link in headerLinks"
                    :key="link.text"
                    :to="link.link"
                    :target="link.target"
                    @click="showMobileNavHeader = false"
                  >{{ link.text }}</NuxtLink>
                </div>
              </div>
            </div>
          </Teleport>
        </div>
      </div>
    </div>

    <!-- mobile aside navigation -->
    <div v-if="!isHome" class="pc:hidden flex items-center box-content py-4 w-full h-7">
      <div class="i-carbon-menu w-7 h-7 font-bold cursor-pointer opacity-60 hover:opacity-100 hover:text-sky-500"  @click.stop="handleMobileNavAside" />
      <div v-if="routeParamsSlug.length" class="ml-4 flex items-center text-sm font-semibold text-slate-700 truncate cursor-pointer">
        <span>{{ routeParamsSlug[0] }}</span>
        <span v-if="routeParamsSlug[1]" class="px-2">></span>
        <span v-if="routeParamsSlug[1]" class="text-slate-900">{{ routeParamsSlug[1] }}</span>
      </div>
      <Teleport to="body">
        <div v-if="showMobileNavAside" class="fixed z-200 inset-0 overflow-y-auto">
          <div class="fixed inset-0 w-screen h-screen bg-black/20 backdrop-blur-sm" @click.stop="handleMobileNavAside" />
          <div class="relative bg-white w-80 max-w-[calc(100%-3rem)] h-screen p-6">
            <div class="i-carbon-close absolute z-10 top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 cursor-pointer hover:text-sky-500" @click.stop="handleMobileNavAside" />
            <NavigationAside :asideEarlyDev="asideEarlyDev" :asideGuide="asideGuide" :title="pageTitle" @clickAside="handleClickAside" />
          </div>
        </div>
      </Teleport>
    </div>

  </div>
</template>
