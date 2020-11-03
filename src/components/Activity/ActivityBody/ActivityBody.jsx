import React from 'react'
import { connect } from 'react-redux'
import './ActivityBody.css'
import Img from 'gatsby-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Icon from '../../Sprite/Icon'

const ActivityBody = ({ activity, activeCategory, activeActivity }) => {
  const active = activeActivity
    ? activity.filter(({ node }) => node.id === activeActivity)[0].node
    : activity.filter(({ node }) => node.category.id === activeCategory)[0].node
  return (
    <div className="activity-body">
      <div className="activity-body__image-wrap">
        <Img
          fluid={active.image.fluid}
          className="activity-body__image"
          alt={active.title}
        />
      </div>

      <div className="activity-body__content">
        <h3 className="activity-body__content-title">{active.title}</h3>
        <div className="activity-body__content-text">
          {documentToReactComponents(active.description.json)}
        </div>

        <ul className="activity-body__params">
          <li className="activity-body__params-item">
            <Icon
              iconId="people_black"
              className="activity-body__params-icon"
            />
            <span className="activity-body__params-name">{active.people}</span>
          </li>
          <li className="activity-body__params-item">
            <Icon iconId="level_black" className="activity-body__params-icon" />
            <span className="activity-body__params-name">{active.level}</span>
          </li>
          <li className="activity-body__params-item">
            <Icon iconId="time_black" className="activity-body__params-icon" />
            <span className="activity-body__params-name">{active.time}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

let mapStateToProps = (state) => ({
  activeCategory: state.activity.activeCategory,
  activeActivity: state.activity.activeActivity,
})

export default connect(mapStateToProps, {})(ActivityBody)
