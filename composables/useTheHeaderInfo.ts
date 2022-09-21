type NavList = {
  name: string
  path: string
  target: string
}

export const useTheHeaderNavList = () =>
  useState<Array<NavList>>('HEADERNAVLIST', () => [
    { name: 'Home', path: '/', target: '' },
    { name: 'Docs', path: '/docs', target: '' },
    { name: 'Blog', path: 'https://lousanpang.github.io/', target: '_blank' },
  ])

export const useTheHeaderGithubPath = () =>
  useState<string>('HEADERGITHUBPATH', () => 'https://github.com/LOUSANPANG/fe-workflow')
