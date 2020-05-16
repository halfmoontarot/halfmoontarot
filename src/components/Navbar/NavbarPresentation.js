import React from 'react'
import { Link } from "react-router-dom";

import NavLink from '../NavLink/NavLink'
import Text from '../Text/Text'

export default function NavbarPresentation ({styles, pages, onClick, isOpened}) {
  return (
    <div styles={styles.root}>
      <ul className={isOpened ? styles.navbarIsDisplayed : styles.list}>
        {pages.map(page => {
          return (
            <li>
              <NavLink onClick={() => onClick(page.url)}>
                <Link to={page.url}>
                  <Text variant='nav'>{page.title}</Text>
                </Link>
              </NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}