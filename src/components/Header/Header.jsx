import React from 'react'
import './Header.css'
import Responsive from '../Responsive/Responsive'
import MobileMenu from './MobileMenu/MobileMenu'
import ReplaceBr from '../ui/ReplaceBR'
import HeaderTells from './HeaderTells/HeaderTells'
import HeaderCategory from './HeaderCategory/HeaderCategory'
import HeaderSupport from './HeaderSupport/HeaderSupport'

const Header = ({ header, category }) => {
  console.log(header)
  return (
    <div className="header">
      <div className="header__logo header-logo">
        <div
          className="header-logo__image"
          dangerouslySetInnerHTML={{ __html: header.mainLogo.svg.content }}
        />
        <p className="header-logo__tagline">
          <ReplaceBr string={header.tagline} />
        </p>
      </div>
      <Responsive options={['xs', 's']}>
        <MobileMenu header={header} category={category} />
      </Responsive>
      <Responsive options={['m', 'l', 'xl']}>
        <HeaderTells tells={header.phoneNumbers} />
        <HeaderCategory category={category} />
        <HeaderSupport
          supportName={header.supportName}
          supportLogo={header.supportLogo}
        />
      </Responsive>
    </div>
  )
}

export default Header
