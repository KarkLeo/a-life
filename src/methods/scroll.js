export const setScrollWidth = () => {
  let div = document.createElement('div')
  div.style.overflowY = 'scroll'
  div.style.width = '50px'
  div.style.height = '50px'
  div.style.visibility = 'hidden'
  document.body.appendChild(div)
  let scrollWidth = div.offsetWidth - div.clientWidth
  document.body.removeChild(div)
  document.documentElement.style.setProperty(
    '--scroll-width',
    scrollWidth + 'px'
  )
}

export const lockScroll = () => {
  document.body.style.overflow = 'hidden'
  document.body.style.borderRight = 'var(--scroll-width) solid #fff'
}

export const unlockScroll = () => {
  document.body.style.overflow = ''
  document.body.style.borderRight = ''
}
