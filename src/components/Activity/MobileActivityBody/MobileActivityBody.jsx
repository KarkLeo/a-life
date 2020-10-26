import React from 'react'
import { connect } from 'react-redux'
import './MobileActivityBody.css'
import Img from 'gatsby-image'

const MobileActivityBody = ({ activity, activeCategory, activeActivity }) => {
  const active = activeActivity
    ? activity.filter(({ node }) => node.id === activeActivity)[0].node
    : activity.filter(({ node }) => node.category.id === activeCategory)[0].node
  return (
    <div>
      <Img
        fluid={active.image.fluid}
        className="mobile-activity-body__image"
        alt={active.title}
      />
    </div>
  )
}

let mapStateToProps = (state) => ({
  activeCategory: state.activity.activeCategory,
  activeActivity: state.activity.activeActivity,
})

export default connect(mapStateToProps)(MobileActivityBody)
