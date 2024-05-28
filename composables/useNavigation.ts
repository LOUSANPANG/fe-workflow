export const useNavigation = () => {
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
        text: 'Lib',
        link: 'https://lousanpang.github.io/fe-lib',
        target: '_blank'
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
