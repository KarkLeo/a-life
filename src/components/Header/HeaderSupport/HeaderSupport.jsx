import React from 'react'
import './HeaderSupport.css'
import ReplaceBr from '../../ui/ReplaceBR'

const HeaderSupport = ({ supportName, supportLogo }) => {
  return (
    <div className="header-support">
      <div
        className="header-support__image"
        dangerouslySetInnerHTML={{ __html: supportLogo.svg.content }}
      />
      <p className="header-support__name">
        <ReplaceBr string={supportName} />
      </p>
    </div>
  )
}

export default HeaderSupport
