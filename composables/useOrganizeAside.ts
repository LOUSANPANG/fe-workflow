import type { NavItem } from '@nuxt/content/dist/runtime/types'
import type { RouteType } from '~/types/navigation'


export const useOrganizeAside = (navigation: Ref<NavItem[]>) => {
  const route = useRoute()
  const targetRoutName = ref('')
  if (route.fullPath.includes('docs')) {
    targetRoutName.value = 'docs'
  } else if (route.fullPath.includes('concept')) {
    targetRoutName.value = 'concept'
  }

  const routes: Array<NavItem> = navigation.value.filter((item) => (item.title.toLowerCase() === targetRoutName.value))
  const asideEarlyDev: RouteType[] = routes[0]?.children.filter((route: RouteType) => !route.children)
  const asideGuide: RouteType[] = routes[0]?.children.filter((route: RouteType) => route.children)
  
  return {
    asideEarlyDev,
    asideGuide
  }
}
