import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Img from 'gatsby-image'
import { setActivity } from '../../../store/activityReducer'

import SwiperCore, { Scrollbar, A11y, EffectFade, Autoplay } from 'swiper'
SwiperCore.use([Scrollbar, A11y, EffectFade, Autoplay])
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import './ActivityNavigation.css'

const ActivityNavigation = ({
  activity,
  activeCategory,
  activeActivity,
  setActivity,
}) => {
  let [slider, setSlider] = useState(null)
  useEffect(() => {
    slider && slider.slideTo(0, 0, false)
  }, [activeCategory])

  return (
    <div className="activity-navigation">
      <Swiper
        className="activity-navigation__slider"
        spaceBetween={20}
        slidesOffsetBefore={75}
        slidesOffsetAfter={75}
        slidesPerView={6}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => setSlider(swiper)}
      >
        {activity
          .filter(({ node }) => node.category.id === activeCategory)
          .map(({ node }) => (
            <SwiperSlide key={node.id} className="activity-navigation__item">
              <button
                className="activity-navigation__button"
                onClick={() => setActivity(node.id)}
              >
                <div className="activity-navigation__image-wrap">
                  <div className="activity-navigation__image-inner">
                    <Img
                      fluid={node.image.fluid}
                      className="activity-navigation__image"
                      alt={node.title}
                    />
                  </div>
                </div>
                <span className="activity-navigation__name">{node.title}</span>
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

export default connect(mapStateToProps, { setActivity })(ActivityNavigation)
