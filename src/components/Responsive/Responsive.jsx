import React from 'react'
import { connect } from 'react-redux'

const Responsive = ({ options, size, children }) => {
  return (
    <>
      {options &&
        options.map((option) => {
          if (option === size) return children
          return null
        })}
    </>
  )
}

let mapStateToProps = (state) => ({ size: state.responsive.size })

export default connect(mapStateToProps)(Responsive)
