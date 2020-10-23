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
