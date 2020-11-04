import React from 'react'
import './Services.css'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import MobileServicesContent from './MobileServicesContent/MobileServicesContent'

const Services = ({ services }) => {
  const bg = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "services_bg.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="services">
      <BackgroundImage
        fluid={bg.image.childImageSharp.fluid}
        className="services__bg"
      >
        <div className="services__body">
          <h2 className="services__title">Наши услуги</h2>
          <MobileServicesContent data={services} />
        </div>
      </BackgroundImage>
    </div>
  )
}

export default Services
