import React from 'react'
import ButtonPresentation from './ButtonPresentation'
import useButtonBehaviour from '../../behaviours/ButtonBehaviour'
import iconStyles from './ButtonIconPresentation.module.css'
import defaultStyles from './ButtonPresentation.module.css'

// unsure of what to do: ButtonIcon vs Navlink
// different styles > 2 presentations in the same folder?
// different props, even small difference like isCurrent > 2 folders?

export default function Button({children, onClick, isIcon}) {

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
    <ButtonPresentation
      isHovered={isHovered}
      isPressed={isPressed}
      isFocused={isFocused}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      onFocus={onFocus}
      onBlur={onBlur}
      styles={isIcon ? iconStyles : defaultStyles}
    >{children}</ButtonPresentation>
  )
}