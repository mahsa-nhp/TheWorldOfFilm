import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import {Wrapper, Image, Film} from './../pageStyles/pageStyles'

const IndexPage = () => {
  const {
    wpcontent: {
      page: {
        homeMeta: {
          homePageDescription,
          homePageHeaderTitle,
          homePageHeaderPicture,
          homePageFeaturedFilms,
        },
      },
    },
  } = useStaticQuery(graphql`
  
  query {
    wpcontent {
      page(id: "home", idType: URI) {
        homeMeta {
          homePageDescription
          homePageHeaderTitle
          homePageHeaderPicture {
            altText
            sourceUrl
            imageFile{
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          homePageFeaturedFilms {
            ... on WPGraphql_Film {
              slug
              film {
                rating
                name
                picture {
                  altText
                  sourceUrl
                  imageFile{
                    childImageSharp {
                      fluid(quality: 50, grayscale: true) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  `)

  return(
    <Layout>
    <SEO title="Home" />
    <Wrapper>
    <div className="banner">
      <Image
            fluid={homePageHeaderPicture.imageFile.childImageSharp.fluid}
            alt={homePageHeaderPicture.altText}
          />
          <div className="inner-div">
            <p className="header-title">{homePageHeaderTitle}</p>
          </div>
    </div>
    <div className="description">
    <h2>About Films</h2>
      <p>{homePageDescription}</p>
    </div>
    <div className="films">
      <h2>Featured Films</h2>
      <div className="film-items">
        {homePageFeaturedFilms.map(({film, slug}) => (
          <Film to={`/${slug}`} key={slug}>
            <Image fluid={film.picture.imageFile.childImageSharp.fluid} 
            altText={film.picture.altText}/>
            <div className="film-info">
              <p>{film.name}</p>
              <p>{film.rating}</p>
            </div>
          </Film>
        ))}
      </div>
    </div>
    </Wrapper>
  </Layout>
  )
}

export default IndexPage
