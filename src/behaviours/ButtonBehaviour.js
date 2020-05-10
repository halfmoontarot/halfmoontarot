import {useState} from 'react'

export default function useButtonBehaviour({onClick}) {
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
