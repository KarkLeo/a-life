import React, { useState } from 'react'
import './MobileMenu.css'
import HeaderTells from '../HeaderTells/HeaderTells'
import HeaderSupport from '../HeaderSupport/HeaderSupport'
import { lockScroll, unlockScroll } from '../../../methods/scroll'
import HeaderCategory from '../HeaderCategory/HeaderCategory'

const MobileMenu = ({ header, category }) => {
  let [isOpenMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    if (isOpenMenu) unlockScroll()
    else lockScroll()
    setOpenMenu(!isOpenMenu)
  }

  return (
    <div className="mobile-menu">
      <button
        className={`mobile-menu__button ${
          isOpenMenu ? 'mobile-menu__button--open' : ''
        }`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isOpenMenu && (
        <div className="mobile-menu__content">
          <HeaderTells tells={header.phoneNumbers} />
          <HeaderCategory category={category} />
          <HeaderSupport
            supportName={header.supportName}
            supportLogo={header.supportLogo}
          />
        </div>
      )}
    </div>
  )
}

export default MobileMenu
