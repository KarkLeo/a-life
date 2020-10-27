import React from 'react'
import './HeaderCategory.css'

const HeaderCategory = ({ category, selectActivity }) => {
  return (
    <ul className="header-category">
      {category.map(({ node }) => (
        <li key={node.id} className="header-category__item">
          <button
            className="header-category__button"
            onClick={() => selectActivity(node.id)}
          >
            {node.title}
          </button>
        </li>
      ))}
    </ul>
  )
}
export default HeaderCategory
