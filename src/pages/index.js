import React from 'react'
import Slider from '../components/Slider/Slider'
import GlobalStyle from '../components/GlobalStyle/GlobalStyle'
import AboutUs from '../components/AboutUs/AboutUs'
import Sprite from '../components/Sprite/Sprite'
import Header from '../components/Header/Header'
import ResponsiveSetter from '../components/Responsive/ResponsiveSetter'

const RootIndex = ({ data }) => {
  return (
    <main>
      <GlobalStyle />
      <ResponsiveSetter />
      <Header
        header={data.contentfulHeader}
        category={data.allContentfulActivityCategory.edges}
      />
      <Slider slides={data.allContentfulSlider.edges} />
      <AboutUs about={data.contentfulAboutUs} />
      <Sprite />
    </main>
  )
}

export default RootIndex

export const pageQuery = graphql`
  query {
    contentfulHeader {
      mainLogo {
        svg {
          content
        }
      }
      tagline
      phoneNumbers
      supportName
      supportLogo {
        svg {
          content
        }
      }
    }
    allContentfulActivityCategory {
      edges {
        node {
          title
          id
        }
      }
    }
    allContentfulSlider {
      edges {
        node {
          id
          title
          image {
            fluid(maxWidth: 2000, background: "rgb:000000") {
              ...GatsbyContentfulFluid
            }
          }
          description {
            description
          }
        }
      }
    }
    contentfulAboutUs {
      text {
        json
      }
      image {
        fluid(maxWidth: 1200, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      title
    }
  }
`
