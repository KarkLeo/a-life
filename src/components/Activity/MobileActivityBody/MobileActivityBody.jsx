import React from 'react'
import { connect } from 'react-redux'
import './MobileActivityBody.css'
import Img from 'gatsby-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Icon from '../../Sprite/Icon'

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
      {activeActivity && (
        <div className="mobile-activity-body__content">
          <h3 className="mobile-activity-body__content-header">
            {active.title}
          </h3>
          <div className="mobile-activity-body__content-text">
            {documentToReactComponents(active.description.json)}
          </div>
          <ul className="mobile-activity-body__params">
            <li className="mobile-activity-body__params-item">
              <Icon
                iconId="people_white"
                className="mobile-activity-body__params-icon"
              />
              <span className="mobile-activity-body__params-name">
                {active.people}
              </span>
            </li>
            <li className="mobile-activity-body__params-item">
              <Icon
                iconId="level_white"
                className="mobile-activity-body__params-icon"
              />
              <span className="mobile-activity-body__params-name">
                {active.level}
              </span>
            </li>
            <li className="mobile-activity-body__params-item">
              <Icon
                iconId="time_white"
                className="mobile-activity-body__params-icon"
              />
              <span className="mobile-activity-body__params-name">
                {active.time}
              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

let mapStateToProps = (state) => ({
  activeCategory: state.activity.activeCategory,
  activeActivity: state.activity.activeActivity,
})

export default connect(mapStateToProps)(MobileActivityBody)
