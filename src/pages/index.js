import React from "react"
import {useStaticQuery, graphql} from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/Seo"
// als ik de style van main wil veranderen ga ik dit gevruiken
import {Wrapper, Image, Film} from './pageStyles/pageStyles'
// import {COLORS} from '../constants'

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
              id
              film {
                rating
                name
                picture {
                  altText
                  sourceUrl
                  imageFile{
                    childImageSharp {
                      fluid(quality: 100, grayscale: true) {
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

  // console.log(data);
  // console.log(homePageFeaturedFilms)
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
          {/* voor de schuine lijn in het midden */}
          {/* <BottomEdgeDown color={COLORS.BLACK}/> */}
    </div>
    <div className="description">
      <p>{homePageDescription}</p>
      {/* <BottomEdgeUp color={COLORS.PRIMARY}/> */}
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
