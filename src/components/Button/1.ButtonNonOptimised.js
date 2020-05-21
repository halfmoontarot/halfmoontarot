import React, {useState} from 'react'
import ButtonPresentation from './ButtonPresentation'

// 1. To elevate the functions, we take everything that is in return() and place it in a new ButtonPresentation
// component, that we call in the return() of the Button component.
// This now allows to test the ButtonPresentation.
// But this still doesn't fully solve our need for the component to be behaving differently depending
// on where is is placed in the app when being clicked. Indeed to allow for this, we would need to 
// elevate the whole onMouseDown() function in the component above Button. This would solve our problem, 
// but would force the dev using the function to remember that they need to add setIsPressed(true) to the 
// elevated function if they wanted to both keep the existing behaviour and add the modal call.
// So what we want is to augment the behavior, and to do so we only expose the onClick function, which we
// pass to the Button and call in the onMouseDown() function in addition to its other behaviours

export default function Button({children, onClick}) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  function onMouseDown() {
    setIsPressed(true)
    onClick()
  }

  function onMouseUp() {
    setIsPressed(false)
  }

  function onMouseLeave() {
    setIsHovered(false)
  }

  function onMouseEnter() {
    setIsHovered(true)
  }

  function onFocus() {
    setIsFocused(true)
  }

  function onBlur() {
    setIsFocused(false)
  }

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