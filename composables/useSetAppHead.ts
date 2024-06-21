export const useSetAppHead = () => {
  const { TITLE_EN, DESCRIPTION_EN } = useAppConfig()

  useHead({
    title: TITLE_EN,
    titleTemplate: title => title === TITLE_EN ? title : `${title} · ${TITLE_EN}`,
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: DESCRIPTION_EN },
    ],
    link: [
      {
        rel: 'icon', type: 'image/x-icon', href: `/favicon.ico`,
      },
    ],
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-L4BS2P1L41',
        async: true,
      },
      {
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-L4BS2P1L41');
        `,
        type: 'text/javascript',
      }
    ]
  })
}
