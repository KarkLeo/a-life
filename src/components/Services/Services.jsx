import React from 'react'
import './Services.css'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import MobileServicesContent from './MobileServicesContent/MobileServicesContent'
import ServicesContent from './ServicesContent/ServicesContent'
import Responsive from '../Responsive/Responsive'

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
          <Responsive options={['xs', 's']}>
            <MobileServicesContent data={services} />
          </Responsive>
          <Responsive options={['m', 'l', 'xl']}>
            <ServicesContent data={services} />
          </Responsive>
        </div>
      </BackgroundImage>
    </div>
  )
}

export default Services
