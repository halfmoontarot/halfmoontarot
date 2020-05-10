import React from 'react'
import ButtonPresentation from './ButtonPresentation'
import useButtonBehaviour from '../../behaviours/ButtonBehaviour'

export default function Button({children, onClick}) {

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
    >{children}</ButtonPresentation>
  )
}