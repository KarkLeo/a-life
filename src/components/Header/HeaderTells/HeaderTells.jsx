import React from 'react'
import './HeaderTells.css'

const HeaderTells = ({ tells }) => {
  return (
    <div className="header-tells">
      {tells.map((i) => (
        <a key={i} href={`tel:${i}`} className="header-tells__item">
          {i}
        </a>
      ))}
    </div>
  )
}

export default HeaderTells
