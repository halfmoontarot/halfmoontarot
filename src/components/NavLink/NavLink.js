import React from 'react'

import NavLinkPresentation from './NavLinkPresentation'
import useButtonBehaviour from '../../behaviours/ButtonBehaviour'
import styles from './NavLinkPresentation.module.css'

export default function NavLink({children, onClick, isCurrent}) {

  const {
    isHovered, 
    isPressed, 
    isFocused,
    onMouseDown, 
    onMouseUp, 
    onMouseLeave, 
    onMouseEnter, 
    onFocus, 
    onBlur
  } = useButtonBehaviour({onClick})

  return(
    <NavLinkPresentation
      isHovered={isHovered}
      isPressed={isPressed}
      isFocused={isFocused}
      isCurrent={isCurrent}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      onFocus={onFocus}
      onBlur={onBlur}
      styles={styles}
    >{children}</NavLinkPresentation>
  )
}