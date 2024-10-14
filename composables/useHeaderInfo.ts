export const useHeaderInfo = () => {
  const repoGitHub = computed(() => {
    return {
      text: 'GitHub',
      icon: 'i-carbon-logo-github',
      link: 'https://github.com/LOUSANPANG/fe-workflow',
      target: '_blank'
    }
  })

  const headerLinks = computed(() => {
    return [
      {
        text: 'Docs',
        link: '/docs/documentation',
        target: '_self'
      },
      {
        text: 'Concept',
        link: '/concept/documentation',
        target: '_self'
      },
      {
        text: 'Blog',
        link: 'https://lousanpang.github.io',
        target: '_blank'
      }
    ]
  })

  return {
    repoGitHub,
    headerLinks,
  }
}
