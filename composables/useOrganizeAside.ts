import type { ContentNavigationItem } from '@nuxt/content'
import type { RouteType } from '~/types/navigation'


export const useOrganizeAside = (navigation: Ref<ContentNavigationItem[]>) => {
  const route = useRoute()
  const targetRoutName = ref('')
  if (route.fullPath.includes('docs')) {
    targetRoutName.value = 'docs'
  } else if (route.fullPath.includes('concept')) {
    targetRoutName.value = 'concept'
  }

  // v3 导航按 stem 字典序返回，用数字比较器恢复数字前缀顺序
  const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' })
  const sortRoutes = (routes: RouteType[]): RouteType[] =>
    [...routes].sort((a, b) => collator.compare(a.stem ?? a.path, b.stem ?? a.path))

  const routes: Array<ContentNavigationItem> = navigation.value.filter((item) => (item.title.toLowerCase() === targetRoutName.value))
  const children = routes[0]?.children
  const asideEarlyDev: RouteType[] = sortRoutes(children?.filter((route: RouteType) => !route.children) || [])
  const asideGuide: RouteType[] = sortRoutes(children?.filter((route: RouteType) => route.children) || [])
    .map(item => ({ ...item, children: sortRoutes(item.children || []) }))

  return {
    asideEarlyDev,
    asideGuide
  }
}
