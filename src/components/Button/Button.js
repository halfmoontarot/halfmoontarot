import React, {useState} from 'react'
import ButtonPresentation from './ButtonPresentation'

// Now, we want to isolate the logic from the Button parent component, so that we can reuse this logic 
// somewhere else, for example in another component that also needs click, hover and focus.
// To do so, we create a custom hook, which is nothing more than taking the logic and placing it in a 
// function which name starts with "use", and which returns the state and functions as an object.
// We then call this function in the Button component and destructure it.

function useButtonBehaviour({onClick}) {
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

  return {isHovered, isPressed, isFocused, onMouseDown, onMouseUp, onMouseLeave, onMouseEnter, onFocus, onBlur}
}

export default function Button({children, onClick}) {

  const {isHovered, isPressed, isFocused, onMouseDown, onMouseUp, onMouseLeave, onMouseEnter, onFocus, onBlur} = useButtonBehaviour({onClick})

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