import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setSize } from '../../store/responsiveReducer'
import { getWindowSize } from '../../methods/responsive'

const ResponsiveSetter = ({ size, setSize }) => {
  useEffect(() => {
    const resize = () => {
      setSize(getWindowSize())
    }
    resize()
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])
  return <></>
}

let mapStateToProps = (state) => ({ size: state.responsive.size })

export default connect(mapStateToProps, { setSize })(ResponsiveSetter)
