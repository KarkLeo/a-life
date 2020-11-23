import React, { useState } from 'react'
import './MobileServicesContent.css'
import ServicesItem from '../ServicesItem/ServicesItem'
import Icon from '../../Sprite/Icon'

const MobileServicesContent = ({ data }) => {
  let [showAll, setShowAll] = useState(false)

  return (
    <div className="mobile-services-content">
      {data
        .filter(({ node }) => node.isMain)
        .map(({ node }) => (
          <ServicesItem key={node.id} item={node} />
        ))}
      {showAll &&
        data
          .filter(({ node }) => !node.isMain)
          .map(({ node }) => <ServicesItem key={node.id} item={node} />)}

      <button
        onClick={() => setShowAll(!showAll)}
        className={`mobile-services-content__more-button ${
          showAll ? 'mobile-services-content__more-button--active' : ''
        }`}
      >
        <Icon
          iconId="arrow_next"
          className="mobile-services-content__more-button-icon"
        />
      </button>
    </div>
  )
}

export default MobileServicesContent
