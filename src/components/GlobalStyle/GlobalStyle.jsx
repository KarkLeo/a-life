import React, { useEffect } from 'react'
import '../../css/base.css'
import '../../css/variables.css'
import { setScrollWidth } from '../../methods/scroll'

const GlobalStyle = () => {
  useEffect(() => {
    setScrollWidth()
  }, [])
  return <></>
}

export default GlobalStyle
