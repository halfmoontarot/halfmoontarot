import React from 'react'

import NavLink from '../NavLink/NavLink'
import Text from '../Text/Text'

export default function NavbarPresentation ({styles, pages, onClick, isOpened}) {
  const arrayUrl = window.location.hash.split('/')
  const url = arrayUrl[1]

  return (
    <div styles={styles.root}>
      <ul className={isOpened ? styles.navbarIsDisplayed : styles.list}>
        {pages.map(page => {
          return (
            <li>
              <NavLink onClick={() => onClick(page.url)} isCurrent={url === (page.title).toLowerCase()}>
                <Text variant='nav'>{page.title}</Text>
              </NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}