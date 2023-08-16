type NavList = {
  name: string
  path: string
  target: string
}

export const useTheHeaderNavList = () =>
  useState<Array<NavList>>('HEADERNAVLIST', () => [
    { name: 'Home', path: '/', target: '' },
    { name: 'Docs', path: '/docs/documentation', target: '' },
    { name: 'Animation', path: 'https://lousanpang.github.io/fe-css', target: '_blank' },
    { name: 'Blog', path: 'https://lousanpang.github.io/blog', target: '_blank' },
  ])

export const useTheHeaderGithubPath = () =>
  useState<string>('HEADERGITHUBPATH', () => 'https://github.com/LOUSANPANG/fe-workflow')
