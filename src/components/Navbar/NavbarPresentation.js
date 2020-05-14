import React from 'react'
import NavLink from '../NavLink/NavLink'
import Text from '../Text/Text'

export default function NavbarPresentation ({styles, pages, onClick}) {
  return (
    <div className={styles.root}>
      {pages.map(page => <NavLink onClick={() => onClick(page.url)}><Text variant='nav'>{page.title}</Text></NavLink>)}
    </div>
  )
}