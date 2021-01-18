import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { OverlayWrapper, Image, CloseButton, MenuList } from './headerStyles/headerStyles'

const OverlayMenu = ({ handleOverlayMenu, menuOpen }) => {
  const {
    logo,
    wpcontent: { menuItems },
  } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.PNG" }) {
        childImageSharp {
          fixed(quality: 100, width: 200) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      wpcontent {
        menuItems {
          edges {
            node {
              label
              path
            }
          }
        }
      }
    }
  `)

  return (
    <>
      {menuOpen && (
        <OverlayWrapper>
          <CloseButton onClick={handleOverlayMenu}>x</CloseButton>
          <Link to="/" style={{ marginBottom: "1.5rem" }}>
            <Image
              alt="logo the world of film"
              fixed={logo.childImageSharp.fixed}
            />
          </Link>
          <MenuList style={{ flexDirection: "column" }}>
            {menuItems.edges.map(({ node: item }, i) => (
              <li key={i}>
                <Link activeClassName="nav-active" to={item.path}>
                  {item.label}
                </Link>
              </li>
            ))}
          </MenuList>
        </OverlayWrapper>
      )}
    </>
  )
}

export default OverlayMenu
