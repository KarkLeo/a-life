import React, { useState } from 'react'
import './MobileServicesContent.css'
import ServicesItem from '../ServicesItem/ServicesItem'

const MobileServicesContent = ({ data }) => {
  let [showAll, setShowAll] = useState(false)

  return (
    <div>
      {data
        .filter(({ node }) => node.isMain)
        .map(({ node }) => (
          <ServicesItem key={node.id} item={node} />
        ))}
      {showAll &&
        data
          .filter(({ node }) => !node.isMain)
          .map(({ node }) => <ServicesItem key={node.id} item={node} />)}
      <button onClick={() => setShowAll(!showAll)}>больше</button>
    </div>
  )
}

export default MobileServicesContent
