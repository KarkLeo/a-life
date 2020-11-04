import React from 'react'
import './ServicesItem.css'

const ServicesItem = ({ item }) => {
  return (
    <div className="services-item">
      <div className="services-item__image-wrap">
        <img
          className="services-item__image"
          src={item.icon.svg.dataURI}
          alt={item.name}
        />
      </div>
      <div className="services-item__content">
        <h3 className="services-item__name">{item.name}</h3>
        <p className="services-item__description">
          {item.description.description}
        </p>
      </div>
    </div>
  )
}

export default ServicesItem
