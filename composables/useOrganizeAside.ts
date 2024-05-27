import type { NavItem } from '@nuxt/content/dist/runtime/types'
import type { RouteType } from '~/types/navigation'

export const useOrganizeAside = (navigation: Ref<NavItem[]>) => {
  const routes: RouteType[] = navigation.value[0].children as RouteType[]
  const asideEarlyDev: RouteType[] = routes.filter((route: RouteType) => !route.children)
  const asideGuide: RouteType[] = routes.filter((route: RouteType) => route.children)
  
  return {
    asideEarlyDev,
    asideGuide
  }
}
