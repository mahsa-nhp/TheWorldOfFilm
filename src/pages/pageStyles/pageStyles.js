import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { COLORS, FONT_FAMILIES, MEDIA_QUERIES } from "../../constants"

export const Wrapper = styled.div`
  .banner {
    display: flex;
    position: relative;
    width: 100%;
    height: 580px;

    @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
      height: 355px;
    }

    .inner-div {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60%;
      padding: 1rem;
      background-color: ${COLORS.PRIMARY + "d0"};

      @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
        top: 120px;
        margin-top: 30px;
        width: 90%;
      }

      p {
        color: white;
        font-size: 1.3rem;
        text-align: center;

        @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
          font-size: 1rem;
        }
      }

      .header-title {
        font-family: ${FONT_FAMILIES.TITLE};
        font-size: 3rem;
        font-weight: 600;
        color: white;
        text-transform: uppercase;
        margin: auto;
        border-bottom: solid 5px white;
        margin-bottom: 1rem;

        @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
          font-size: 1.5rem;
        }
      }
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    padding: 3rem 0 10rem;
    background-color: ${({ descriptionColor = COLORS.BLACK }) =>
      `${descriptionColor}`};

    h2 {
      font-family: ${FONT_FAMILIES.TITLE};
      font-size: 3rem;
      color: white;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 3rem;

      @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
        font-size: 1.5rem;
      }
    }

    p {
      width: 70%;
      font-size: 1.3rem;
      color: ${COLORS.TERTIARY};
      text-align: center;
      line-height: 2rem;
      margin: auto;

      @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
        width: 90%;
        font-size: 1rem;
      }
    }
  }

  .contact-info {
    display: flex;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    margin-top: 2rem;

    @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
      flex-direction: column;
    }

    div {
      width: 33.33%;
      padding: 1em;
      color: ${COLORS.TERTIARY};

      @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
        width: 100%;
      }

      p {
        margin-top: 1rem;
        color: white;

        a {
          color: ${COLORS.SECONDARY};
        }
      }
    }
  }

  .films {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2rem 5%;
    background-color: ${({ filmsColor = COLORS.PRIMARY }) =>
      `${filmsColor}`};

    h2 {
      font-family: ${FONT_FAMILIES.TITLE};
      font-size: 3rem;
      color: white;
      text-transform: uppercase;
      margin-bottom: 3rem;

      @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
        font-size: 2rem;
        margin-bottom: 2rem;
      }
    }

    .film-items {
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      width: 100%;
      padding: 0 5%;
    }
  }
`

export const film = styled(Link)`
  display: flex;
  position: relative;
  width: 22vw;
  height: 22vw;
  margin: 2vw;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
    width: 90vw;
    height: 90vw;
    margin: 2vw 0;
  }

  &:hover {
    transform: scale(1.05);

    .film-info {
      height: 100%;
      background-color: ${COLORS.TERTIARY + "c0"};

      p {
        color: ${COLORS.BLACK};
      }
    }
  }

  .film-info {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    height: 80px;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: ${COLORS.BLACK + "c0"};
    transition: all 0.3s ease-in-out;

    p {
      text-transform: uppercase;
      font-size: 1.3rem;
      font-weight: 600;
      color: white;
      margin: 0;
    }

    p:nth-child(2) {
      color: ${COLORS.SECONDARY};

      margin-top: 0.3rem;
    }
  }
`

export const BottomEdgeDown = styled.div`
  position: absolute;
  bottom: 0;
  width: 0;
  border-bottom: 130px solid ${COLORS.TERTIARY};
  border-right: 100vw solid transparent;

  &:before {
    content: "";
    display: block;
    border-bottom: ${({ color }) => `100px solid ${color}`};
    border-right: 100vw solid transparent;
    transform: translateY(130px) scale(1.05);
  }
`

export const BottomEdgeUp = styled.div`
  position: absolute;
  bottom: 0;
  width: 0;
  border-bottom: 140px solid ${COLORS.TERTIARY};
  border-right: 100vw solid transparent;

  &:after {
    content: "";
    display: block;
    border-bottom: ${({ color }) => `100px solid ${color}`};
    border-left: 100vw solid transparent;

    transform: translateY(140px) scale(1.05);
  }
`

export const Image = styled(Img)`
  width: 100%;
  height: 100%;
`
