import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { setCategory } from '../../../store/activityReducer'
import { getIndexCategoryById } from '../../../methods/activity'

import SwiperCore, { Navigation, A11y, EffectFade, Autoplay } from 'swiper'
SwiperCore.use([Navigation, A11y, EffectFade, Autoplay])
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'

import './MobileActivityHeader.css'

const MobileActivityHeader = ({ category, setCategory, activeCategory }) => {
  let [slider, setSlider] = useState(null)
  useEffect(() => {
    const currentCategory = getIndexCategoryById(category, activeCategory)
    if (slider && slider.activeIndex !== currentCategory)
      slider.slideTo(currentCategory)
  }, [activeCategory])

  return (
    <div className="mobile-activity-header">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        onSlideChange={(swiper) =>
          setCategory(category[swiper.activeIndex].node.id)
        }
        onSwiper={(swiper) => setSlider(swiper)}
      >
        {category.map(({ node }) => (
          <SwiperSlide key={node.id} className="">
            <h4 className="mobile-activity-header__title">{node.title}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

let mapStateToProps = (state) => ({
  activeCategory: state.activity.activeCategory,
})

export default connect(mapStateToProps, { setCategory })(MobileActivityHeader)
