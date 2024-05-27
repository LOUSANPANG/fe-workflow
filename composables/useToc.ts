import type { linkType, tocType } from '~/types/navigation'

export const useToc = (toc: tocType) => {
  const links: linkType[] = toc.links

  return links
}
