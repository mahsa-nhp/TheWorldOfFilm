// header component => menu items vanuit graphql API (gedefinieerd in headless WP) worden weergegeven.

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import Menu from "./Menu"
import {HeaderWrapper, Image} from './headerStyles/headerStyles'

const Header = ({ siteTitle }) => {
  const {
    logo,
    wpcontent: {
      menuItems
    },
  } = useStaticQuery(graphql`
  query {
    
    logo: file(relativePath: { eq: "logo.PNG" }) {
      childImageSharp {
        fixed(quality: 100, width: 220) {
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

  //console.log(menuItems, 'menu items')
 return (
    <HeaderWrapper>
    <Link to="/">
        <Image alt="logo the world of film" fixed={logo.childImageSharp.fixed} />
      </Link>
    <Menu menuItems={menuItems.edges} />
  </HeaderWrapper>
 ) 
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
