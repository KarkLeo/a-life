import React, { useState } from 'react'
import './MobileMenu.css'
import HeaderTells from '../HeaderTells/HeaderTells'
import HeaderSupport from '../HeaderSupport/HeaderSupport'
import { lockScroll, unlockScroll } from '../../../methods/scroll'
import HeaderCategory from '../HeaderCategory/HeaderCategory'
import { connect } from 'react-redux'
import { setCategory } from '../../../store/activityReducer'

const MobileMenu = ({ header, category, setCategory }) => {
  let [isOpenMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    if (isOpenMenu) unlockScroll()
    else lockScroll()
    setOpenMenu(!isOpenMenu)
  }

  const selectActivity = (id) => {
    unlockScroll()
    setOpenMenu(false)
    setCategory(id)
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
          <HeaderCategory category={category} selectActivity={selectActivity} />
          <HeaderSupport
            supportName={header.supportName}
            supportLogo={header.supportLogo}
          />
        </div>
      )}
    </div>
  )
}
let mapStateToProps = (state) => ({})
export default connect(mapStateToProps, { setCategory })(MobileMenu)
