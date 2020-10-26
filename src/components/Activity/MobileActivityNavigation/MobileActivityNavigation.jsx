import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Img from 'gatsby-image'

import SwiperCore, { Scrollbar, A11y, EffectFade, Autoplay } from 'swiper'
SwiperCore.use([Scrollbar, A11y, EffectFade, Autoplay])
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import './MobileActivityNavigation.css'

const MobileActivityNavigation = ({
  activity,
  activeCategory,
  activeActivity,
}) => {
  let [slider, setSlider] = useState(null)
  useEffect(() => {
    slider && slider.slideTo(0, 0, false)
  }, [activeCategory])

  return (
    <div className="mobile-activity-navigation">
      <Swiper
        className="mobile-activity-navigation__slider"
        spaceBetween={20}
        slidesOffsetBefore={10}
        slidesOffsetAfter={10}
        slidesPerView={1.8}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => setSlider(swiper)}
      >
        {activity
          .filter(({ node }) => node.category.id === activeCategory)
          .map(({ node }) => (
            <SwiperSlide
              key={node.id}
              className="mobile-activity-navigation__item"
            >
              <button
                className="mobile-activity-navigation__button"
                onClick={() => console.log(node.title)}
              >
                <div className="mobile-activity-navigation__image-wrap">
                  <div className="mobile-activity-navigation__image-inner">
                    <Img
                      fluid={node.image.fluid}
                      className="mobile-activity-navigation__image"
                      alt={node.title}
                    />
                  </div>
                </div>
                <span className="mobile-activity-navigation__name">
                  {node.title}
                </span>
              </button>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

let mapStateToProps = (state) => ({
  activeCategory: state.activity.activeCategory,
  activeActivity: state.activity.activeActivity,
})

export default connect(mapStateToProps, {})(MobileActivityNavigation)
