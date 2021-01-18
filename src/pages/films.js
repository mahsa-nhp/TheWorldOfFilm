import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { Wrapper, Image, Film } from './../pageStyles/pageStyles'
import {COLORS} from '../constants'

const FilmsPage = () => {
    const {
      wpcontent: {
      page: {
        filmMeta: {
          filmsPageDescription,
          filmsPageHeaderPicture
        },
      },
      films: {
        edges: films
      },
    } } = useStaticQuery(graphql`
      query {
        wpcontent {
          page(id: "films", idType: URI) {
            filmMeta {
              filmsPageDescription
              filmsPageHeaderPicture {
                sourceUrl
                imageFile {
                  childImageSharp {
                    fluid(quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
                altText
              }
            }
          }
          films {
            edges {
              node {
                film {
                  name
                  director
                  country
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
                slug
              }
            }
          }
        }
      }
    `)
    
  return (
    <Layout>
      <SEO title="Films"/>
      <Wrapper filmColor={COLORS.BLACK} descriptionColor={COLORS.SECONDARY}>
        <div className="banner">
          <Image fluid={filmsPageHeaderPicture.imageFile.childImageSharp.fluid}
                 altText={filmsPageHeaderPicture.altText} />
        </div>
        <div className="description">
          <h2>our website</h2>
          <p>{filmsPageDescription}</p>
        </div>
        <div className="films">
          <h2>Our Films</h2>
          <div className="film-items">
            {films.map(({node: {film, slug}}) => (
              <Film to={`/${slug}`} key={slug}>
                <Image fluid={film.picture.imageFile.childImageSharp.fluid} 
                       altText={film.picture.altText}
                />
                <div className="film-info">
                  <p>{film.name}</p>
                  <p>{film.director}</p>
                  <p>{film.country}</p>
                </div>
              </Film>
            ))}
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}
export default FilmsPage