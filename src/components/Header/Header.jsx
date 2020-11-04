import React from 'react'
import './Header.css'
import Responsive from '../Responsive/Responsive'
import MobileMenu from './MobileMenu/MobileMenu'
import ReplaceBr from '../ui/ReplaceBR'
import HeaderTells from './HeaderTells/HeaderTells'
import HeaderCategory from './HeaderCategory/HeaderCategory'
import HeaderSupport from './HeaderSupport/HeaderSupport'
import { setCategory } from '../../store/activityReducer'
import { connect } from 'react-redux'

const Header = ({ header, category, setCategory }) => {
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
        <HeaderCategory category={category} selectActivity={setCategory} />
        <HeaderSupport
          supportName={header.supportName}
          supportLogo={header.supportLogo}
        />
      </Responsive>
    </div>
  )
}
let mapStateToProps = (state) => ({})

let a = ((rerer) => {
  return 5 + 6 * rerer
})(465465)

export default connect(mapStateToProps, { setCategory })(Header)
