import React from 'react'
import {Link} from 'gatsby'
import {MenuList} from './headerStyles/headerStyles'

const Menu = ({ menuItems }) => {
    return (
      <MenuList>
        {menuItems.map(({ node: item }, i) => (
          <li key={i}>
            <Link activeClassName="nav-active" to={item.path}>
              {item.label}
            </Link>
          </li>
        ))}
      </MenuList>
    )
  }
  
  export default Menu
  
