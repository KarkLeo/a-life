import React from 'react'
import { connect } from 'react-redux'
import './ActivityHeader.css'
import { setCategory } from '../../../store/activityReducer'

const ActivityHeader = ({ category, activeCategory, setCategory }) => {
  return (
    <ul className="activity-header">
      {category.map(({ node }) => (
        <li key={node.id} className="activity-header__item">
          <button
            className={`activity-header__button ${
              activeCategory === node.id
                ? 'activity-header__button--active'
                : ''
            }`}
            onClick={() => setCategory(node.id)}
          >
            {node.title}
          </button>
        </li>
      ))}
    </ul>
  )
}

let mapStateToProps = (state) => {
  return {
    activeCategory: state.activity.activeCategory,
  }
}

export default connect(mapStateToProps, { setCategory })(ActivityHeader)
