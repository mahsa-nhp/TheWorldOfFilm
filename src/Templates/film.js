import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Wrapper, Image } from "./templateStyles/filmStyles"

const FilmTemplate = ({
  data: {
    wpcontent: {
      film: {
        film,
        genres: { edges: genres },
      },
    },
  },
}) => {

  return (
    <Layout>
      <SEO title="Film" />
      <Wrapper>
        <div className="film-container">
          <div className="film-image">
            <Image
              fluid={film.picture.imageFile.childImageSharp.fluid}
              alt={film.picture.altText}
            />
            <div className="genres">
              {genres.map(({ node: genre }) => (
                <div key={genre.name} className="genre">
                  {genre.name}
                </div>
              ))}
            </div>
          </div>
          <div className="film-info"> 
              <h2>{film.name}</h2>
              <p className="info">
                <b>Director:</b> {film.director}
              </p>
              <p className="info">
                <b>Rating:</b> {film.rating}
              </p>
              <p className="info">
                <b>Cast And Crew:</b> {film.castAndCrew}
              </p>
              <p className="info">
                <b>Awards:</b> {film.award}
              </p>
              <p className="info">
                <b>Country:</b> {film.country}
              </p>
              <h3><b>STORYLINE</b></h3>
              <p className="description">
                {film.description}
              </p>
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}

export default FilmTemplate

export const pageQuery = graphql`
    query($id: ID!) {
        wpcontent{
            film(id: $id, idType: ID) {
                genres {
                  edges {
                    node {
                      name
                    }
                  }
                }
                film {
                  award
                  castAndCrew
                  country
                  description
                  director
                  name
                  rating
                  picture {
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
    }
 }
`
