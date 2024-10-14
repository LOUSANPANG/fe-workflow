export const useUseDevice = () => {
  if (process.client) {
    const isMobile = ref(false)
    isMobile.value = /mobile/i.test(window.navigator.userAgent) || window.innerWidth <= 768
  
    return isMobile
  }
}
