export const getWindowSize = () => {
  if (window) {
    const width = window.innerWidth
    if (width >= 1920) {
      return 'xl'
    } else if (width < 1920 && width >= 1366) {
      return 'l'
    } else if (width < 1366 && width >= 1024) {
      return 'm'
    } else if (width < 1024 && width >= 768) {
      return 's'
    } else if (width < 768) {
      return 'xs'
    } else {
      return null
    }
  }
}
