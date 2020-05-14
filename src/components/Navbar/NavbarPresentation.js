import React from 'react'
import { Link } from "react-router-dom";

import NavLink from '../NavLink/NavLink'
import Text from '../Text/Text'

export default function NavbarPresentation ({styles, pages, onClick}) {
  return (
    <div className={styles.root}>
      {pages.map(page => {
        return (
          <NavLink onClick={() => onClick(page.url)}>
            <Link to={page.url}>
              <Text variant='nav'>{page.title}</Text>
            </Link>
          </NavLink>
        )
      })}
    </div>
  )
}