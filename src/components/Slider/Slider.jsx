import React from 'react'

import SwiperCore, { Pagination, A11y, EffectFade, Autoplay } from 'swiper'
SwiperCore.use([Pagination, A11y, EffectFade, Autoplay])
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import './Slider.css'

import BackgroundImage from 'gatsby-background-image'

const Slider = ({ slides }) => {
  return (
    <div className="main-slider">
      <Swiper
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return (
              '<span class="' +
              className +
              '"><span>' +
              (index < 9 ? '0' + (index + 1) : index + 1) +
              '</span></span>'
            )
          },
        }}
      >
        {slides.map(({ node }) => (
          <SwiperSlide key={node.id} className="main-slide">
            <BackgroundImage
              fluid={node.image && node.image.fluid}
              className="main-slide__body"
            >
              <div className="main-slide__content">
                <h3 className="main-slide__title">{node.title}</h3>
                <p className="main-slide__description">
                  {node.description.description}
                </p>
              </div>
            </BackgroundImage>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
