import styled from "styled-components"
import Img from "gatsby-image"
// import { COLORS, FONT_FAMILIES, MEDIA_QUERIES } from "../../constants"
import { COLORS, MEDIA_QUERIES } from "../../constants"

export const Wrapper = styled.div`
  background-color: ${COLORS.BLACK};
  margin-top: 100px;

  .film-container {
    display: flex;
    margin: 3rem auto;
    width: 90%;
    background-color: ${COLORS.GREY};

    @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
      flex-direction: column;
    }

    .film-image {
      position: relative;
      width: 20vw;

      @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
        height: 90vw;
        width: 90vw;
        border-bottom: solid 15px ${COLORS.PRIMARY};
      }

      .genres {
        position: absolute;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        flex-wrap: wrap;
        color: ${COLORS.SECONDARY};
        ${'' /* font-family: ${FONT_FAMILIES.TITLE}; */}
        text-transform: uppercase;
        background-color: ${COLORS.GREY};
        border-right: solid 8px ${COLORS.SECONDARY};

        @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
          color: ${COLORS.PRIMARY};
          border-right: solid 5px ${COLORS.PRIMARY};
        }

        .genre {
          padding: 0.3rem 1.5rem;
        }
      }
    }

    .film-info {
      display: flex;
      flex-direction: column;
      width: 60vw;
      padding: 1.5rem 2rem;

      @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
        width: 100%;
      }

      h2 {
        ${'' /* font-family: ${FONT_FAMILIES.TITLE}; */}
        text-transform: uppercase;
        font-size: 3rem;
        padding-bottom: 1rem;
        margin-bottom: 0.5rem;

        @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
          margin-right: auto;
          margin-left: 0;
          font-size: 2.5rem;
        }
      }

      h3 {
        ${'' /* font-family: ${FONT_FAMILIES.TITLE}; */}
        color: white;
        font-size: 1.8rem;
        text-transform: uppercase;

        @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
          font-size: 1.3rem;
        }

        span:first-child {
          color: ${COLORS.TERTIARY};
        }
      }

      .description {
        font-size: 1rem;
        color: #DAF7A6 ;

        @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
          font-size: 1rem;
        }
      }

      .info {
        font-family: 2rem;
        color: #FFC300;
      }
    }
  }

    .film-picture {
      width: 28.5vw;
      height: 57vw;
      margin: 0 1vw;

      @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
        width: 90vw;
        height: 160vw;
        margin: 2vw auto;
      }
    }
  }
`

export const Image = styled(Img)`
  width: 100%;
  height: 100%;
`
