import React from 'react'
import './ServicesContent.css'
import ServicesItem from '../ServicesItem/ServicesItem'

const ServicesContent = ({ data }) => {
  return (
    <div className="services-content">
      <div className="services-content__list services-content__list--main">
        {data
          .filter(({ node }) => node.isMain)
          .map(({ node }) => (
            <ServicesItem key={node.id} item={node} />
          ))}
      </div>
      <div className="services-content__list">
        {data
          .filter(({ node }) => !node.isMain)
          .map(({ node }) => (
            <ServicesItem key={node.id} item={node} />
          ))}
      </div>
    </div>
  )
}

export default ServicesContent
