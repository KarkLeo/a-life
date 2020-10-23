import React from 'react'
import './AboutUs.css'
import Img from 'gatsby-image'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Icon from '../Sprite/Icon'

const AboutUs = ({ about }) => {
  const options = {
    renderNode: {
      [BLOCKS.HEADING_3]: (node) => {
        return (
          <div className="about-us__text-header">
            <Icon
              iconId="header_image"
              className="about-us__text-header-image"
            />
            {documentToReactComponents(node)}
          </div>
        )
      },
    },
  }

  return (
    <div className="about-us">
      <div className="about-us__body">
        <div className="about-us__content">
          <h2 className="about-us__title">{about.title}</h2>
          <div className="about-us__text">
            {documentToReactComponents(about.text.json, options)}
          </div>
        </div>
        <div className="about-us__img-wrap">
          <Img
            fluid={about.image.fluid}
            className="about-us__image"
            alt={about.title}
          />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
