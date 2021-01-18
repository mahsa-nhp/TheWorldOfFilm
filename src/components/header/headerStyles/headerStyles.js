import Img from 'gatsby-image'
import styled from 'styled-components'
import { COLORS, MEDIA_QUERIES } from '../../../constants'

export const HeaderWrapper = styled.header`
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  background: ${COLORS.BLACK};
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  margin-bottom: 1.45rem;
  z-index: 999;

  a {
    display: flex;
    width: 200px;
    height: 80%;
    font-size: 1.5rem;
    text-align: center;
    justify-content: center;
  }

  @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
    display: none;
  }
`

export const Image = styled(Img)`
  margin: auto 0;
`
export const MenuList = styled.ul`
  display: flex;
  margin: 0;
  list-style: none;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      color: ${COLORS.WHITE};
      font-size: 1.2rem;
      text-transform: uppercase;
      white-space: nowrap;
      text-decoration: none;
      padding: 0.25rem 1rem;
    }

    a:hover {
      color: ${COLORS.TERTIARY};
    }
  }

  .nav-active {
    color: ${COLORS.TERTIARY};
  }
`
export const HamburgerButton = styled.div`
  display: block;
  position: fixed;
  right: 5%;
  top: 1.25rem;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  color: ${COLORS.TERTIARY};
  z-index: 1000;
  transition: all 0.2s ease;

  :hover {
    transform: scale(1.1);
  }

  @media (min-width: ${MEDIA_QUERIES.MEDIUM}) {
    display: none;
  }
`
export const CloseButton = styled.div`
  display: flex;
  right: 1.5rem;
  top: 1.5rem;
  position: absolute;
  width: 3rem;
  height: 3rem;
  justify-content: center;
  color: ${COLORS.TERTIARY};
  font-weight: 700;
  font-size: 2rem;
  cursor: pointer;
  transform-origin: 50% 50%;

  transition: all 0.2s ease;

  :hover {
    transform: scale(1.1);
  }
`

export const OverlayWrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.BLACK};
  z-index: 9999;
  transition: 1s ease-in-out opacity;
`
